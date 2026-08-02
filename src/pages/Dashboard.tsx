import { useCallback, useEffect, useState } from "react";
import todoSvg from "../assets/todo.svg";
import { useLocation } from "react-router-dom";

type Todo = {
  id: number;
  title: string;
  status: string;
  due_datetime?: string;
};

type StatusKey = "completed" | "pending" | "overdue" | "other";

const getDeadlineTime = (date?: string) => {
  if (!date) return null;

  const time = new Date(date.replace(" ", "T")).getTime();

  return Number.isNaN(time) ? null : time;
};

const getStatusKey = (todo: Todo): StatusKey => {
  const status = todo.status?.trim().toLowerCase();

  if (status === "completed") return "completed";

  if (status === "pending") {
    const deadline = getDeadlineTime(todo.due_datetime);
    return deadline !== null && deadline <= Date.now() ? "overdue" : "pending";
  }

  return "other";
};

const statusLabels: Record<StatusKey, string> = {
  completed: "Completed",
  pending: "Pending",
  overdue: "Overdue",
  other: "",
};

const getDeadlineLabel = (todo: Todo) => {
  const deadline = getDeadlineTime(todo.due_datetime);
  if (deadline === null) return null;

  const diff = deadline - Date.now();
  if (diff <= 0) return "Overdue";

  const totalMinutes = Math.floor(diff / 60000);
  const days = Math.floor(totalMinutes / 1440);
  const hours = Math.floor((totalMinutes % 1440) / 60);
  const mins = totalMinutes % 60;

  if (days > 0) return `Due in ${days}d ${hours}h`;
  if (hours > 0) return `Due in ${hours}h ${mins}m`;
  return `Due in ${mins}m`;
};

const Dashboard = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const location = useLocation();

  // 🔥 GET USER ID
  const userId = localStorage.getItem("userId");

  const loadTasks = useCallback(() => {
    if (!userId) return;

    fetch(`${import.meta.env.VITE_API_URL}/api/tasks/${userId}`)
      .then(res => res.json())
      .then(data => setTodos(data))
      .catch(err => console.log(err));
  }, [userId]);

  useEffect(() => {
    loadTasks();
  }, [loadTasks, location.key]);

  useEffect(() => {
    const refreshDashboard = () => loadTasks();

    const refreshWhenVisible = () => {
      if (document.visibilityState === "visible") {
        loadTasks();
      }
    };

    window.addEventListener("focus", refreshDashboard);
    window.addEventListener("tasks-updated", refreshDashboard);
    document.addEventListener("visibilitychange", refreshWhenVisible);

    return () => {
      window.removeEventListener("focus", refreshDashboard);
      window.removeEventListener("tasks-updated", refreshDashboard);
      document.removeEventListener("visibilitychange", refreshWhenVisible);
    };
  }, [loadTasks]);

  const isCompleted = (todo: Todo) => getStatusKey(todo) === "completed";

  const completedCount = todos.filter(isCompleted).length;
  const pendingCount = todos.filter(todo => !isCompleted(todo)).length;

  return (
    <section className="dashboard-page">

      {/* HERO HEADER */}
      <div className="hero-banner dashboard-hero">
        <div className="hero-banner-bg" aria-hidden="true" />

        <div className="dashboard-hero-container">
          <div className="hero-banner-left">
            <span className="hero-pill">Your Workspace</span>

            <h1 className="hero-banner-title">Dashboard</h1>

            <p className="hero-banner-desc">
              A quick snapshot of today&apos;s progress — see what&apos;s
              done and what&apos;s still pending.
            </p>
          </div>
        </div>
      </div>

      <div className="dashboard-content">

        {/* STATS */}
        <div className="dashboard-stats">
          <div className="stat-card">
            <span className="stat-number">{todos.length}</span>
            <span className="stat-label"> Total Tasks</span>
          </div>

          <div className="stat-card completed">
            <span className="stat-number">{completedCount}</span>
            <span className="stat-label"> Completed</span>
          </div>

          <div className="stat-card pending">
            <span className="stat-number">{pendingCount}</span>
            <span className="stat-label"> Pending</span>
          </div>
        </div>

        {/* TASK LIST */}
        <h2 className="section-title">
          Today <span>Tasks</span>
        </h2>

        {todos.length === 0 ? (
          <div className="no-tasks">
            <img src={todoSvg} alt="No tasks" />
            <p>No task created</p>
          </div>
        ) : (
          <ul className="task-list">
            {todos.map((todo) => {
              const statusKey = getStatusKey(todo);
              const deadlineLabel =
                statusKey === "completed" ? null : getDeadlineLabel(todo);

              return (
                <li
                  key={todo.id}
                  className={statusKey === "completed" ? "done" : ""}
                >
                  <div className="task-list-main">
                    <span
                      className={`task-list-status-dot ${statusKey}`}
                      aria-hidden="true"
                    />

                    <div className="task-list-text">
                      <span className="task-list-title">{todo.title}</span>

                      {deadlineLabel && (
                        <span
                          className={`task-list-deadline ${
                            statusKey === "overdue" ? "overdue-text" : ""
                          }`}
                        >
                          {deadlineLabel}
                        </span>
                      )}
                    </div>
                  </div>

                  <span className={`status-pill status-pill-${statusKey}`}>
                    {statusKey === "other" ? todo.status : statusLabels[statusKey]}
                  </span>
                </li>
              );
            })}
          </ul>
        )}

      </div>
    </section>
  );
};

export default Dashboard;
