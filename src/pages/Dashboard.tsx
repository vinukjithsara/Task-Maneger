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
type Tab = "All" | "Pending" | "Completed";

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

const formatUpcomingDate = (date?: string) => {
  if (!date) return "";

  return new Date(date.replace(" ", "T")).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
};

const Dashboard = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [activeTab, setActiveTab] = useState<Tab>("All");
  const location = useLocation();

  // 🔥 GET USER ID
  const userId = localStorage.getItem("userId");
  const userName = localStorage.getItem("userName");

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
  const overdueCount = todos.filter(
    todo => getStatusKey(todo) === "overdue"
  ).length;

  const progressPercent =
    todos.length === 0
      ? 0
      : Math.round((completedCount / todos.length) * 100);

  const progressSub =
    todos.length === 0
      ? "Create a task to get started."
      : progressPercent >= 75
        ? "Almost there — keep pushing!"
        : progressPercent >= 40
          ? "Keep going! You're doing great."
          : "Let's make some progress today.";

  const visibleTasks = todos.filter(todo => {
    if (activeTab === "Pending") return !isCompleted(todo);
    if (activeTab === "Completed") return isCompleted(todo);
    return true;
  });

  const upcomingTasks = todos
    .filter(todo => !isCompleted(todo) && getDeadlineTime(todo.due_datetime) !== null)
    .sort(
      (a, b) =>
        (getDeadlineTime(a.due_datetime) ?? 0) -
        (getDeadlineTime(b.due_datetime) ?? 0)
    )
    .slice(0, 3);

  return (
    <section className="dashboard-page">

      {/* HERO HEADER */}
      <div className="hero-banner dashboard-hero">
        <div className="hero-banner-bg" aria-hidden="true" />

        <div className="dashboard-hero-container">
          <div className="hero-banner-left">
            <span className="hero-pill">
              {getGreeting()}
              {userName ? `, ${userName}` : ""} 👋
            </span>

            <h1 className="hero-banner-title">Dashboard</h1>

            <p className="hero-banner-desc">
              Let&apos;s make today productive.
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

          <div className="stat-card pending">
            <span className="stat-number">{pendingCount}</span>
            <span className="stat-label"> Pending</span>
          </div>

          <div className="stat-card completed">
            <span className="stat-number">{completedCount}</span>
            <span className="stat-label"> Completed</span>
          </div>

          <div className="stat-card overdue">
            <span className="stat-number">{overdueCount}</span>
            <span className="stat-label"> Overdue</span>
          </div>
        </div>

        <div className="dashboard-panels">

          {/* MY TASKS */}
          <div className="dashboard-card dashboard-tasks-card">
            <div className="dashboard-card-header">
              <h2 className="section-title">
                My <span>Tasks</span>
              </h2>

              <div className="dashboard-tabs">
                {(["All", "Pending", "Completed"] as Tab[]).map(tab => (
                  <button
                    key={tab}
                    className={activeTab === tab ? "active" : ""}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {todos.length === 0 ? (
              <div className="no-tasks">
                <img src={todoSvg} alt="No tasks" />
                <p>No task created</p>
              </div>
            ) : visibleTasks.length === 0 ? (
              <p className="dashboard-empty-row">No tasks in this view.</p>
            ) : (
              <ul className="task-list">
                {visibleTasks.map((todo) => {
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
                        >
                          {statusKey === "completed" && (
                            <svg viewBox="0 0 24 24">
                              <path d="m5 13 4 4L19 7" />
                            </svg>
                          )}
                        </span>

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

          {/* PROGRESS + UPCOMING */}
          <div className="dashboard-card dashboard-side-card">
            <div className="dashboard-progress">
              <div
                className="dashboard-progress-ring"
                style={{ "--progress": `${progressPercent}%` } as React.CSSProperties}
              >
                <span>{progressPercent}%</span>
              </div>

              <p className="dashboard-progress-label">Overall Progress</p>
              <p className="dashboard-progress-sub">{progressSub}</p>
            </div>

            <div className="dashboard-upcoming">
              <span className="dashboard-upcoming-title">Upcoming</span>

              {upcomingTasks.length === 0 ? (
                <p className="dashboard-upcoming-empty">Nothing scheduled.</p>
              ) : (
                upcomingTasks.map(todo => (
                  <div className="dashboard-upcoming-item" key={todo.id}>
                    <span className="dashboard-upcoming-name">{todo.title}</span>
                    <span className="dashboard-upcoming-time">
                      {formatUpcomingDate(todo.due_datetime)}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Dashboard;
