import { useNavigate } from "react-router-dom";
import featureImg from "../assets/tasks.png";
import Logo from "./Logo";

type HeroProps = {
  isLoggedIn: boolean;
};

const mockTasks = [
  { title: "Design new landing page", status: "In Progress" },
  { title: "Review project proposal", status: "In Progress" },
  { title: "Update task tracker UI", status: "Completed" },
  { title: "Team meeting", status: "In Progress" },
  { title: "Fix dashboard bug", status: "To Do" },
];

const HeroMock = () => (
  <div className="hero-mock" aria-hidden="true">
    <div className="hero-mock-topbar">
      <span className="hero-mock-search">Search tasks...</span>
      <span className="hero-mock-bell" />
      <span className="hero-mock-avatar" />
    </div>

    <div className="hero-mock-body">
      <aside className="hero-mock-sidebar">
        <div className="hero-mock-logo">
          <Logo className="small" />
        </div>

        <nav>
          <span className="active">Dashboard</span>
          <span>Tasks</span>
          <span>Calendar</span>
          <span>Projects</span>
          <span>Team</span>
          <span>Settings</span>
        </nav>
      </aside>

      <main className="hero-mock-main">
        <p className="hero-mock-greeting">
          Good morning, Asitha <span>👋</span>
        </p>
        <p className="hero-mock-subgreeting">Let's make today productive.</p>

        <div className="hero-mock-stats">
          <div className="hero-mock-stat">
            <span className="hero-mock-stat-num">24</span>
            <span className="hero-mock-stat-label">Total tasks</span>
          </div>
          <div className="hero-mock-stat">
            <span className="hero-mock-stat-num">8</span>
            <span className="hero-mock-stat-label">In progress</span>
          </div>
          <div className="hero-mock-stat">
            <span className="hero-mock-stat-num">16</span>
            <span className="hero-mock-stat-label">Completed</span>
          </div>
          <div className="hero-mock-stat">
            <span className="hero-mock-stat-num">85%</span>
            <span className="hero-mock-stat-label">This week</span>
          </div>
        </div>

        <div className="hero-mock-panels">
          <div className="hero-mock-tasks">
            <div className="hero-mock-tasks-header">
              <span>My Tasks</span>
              <div className="hero-mock-tabs">
                <span className="active">All</span>
                <span>In Progress</span>
                <span>Completed</span>
              </div>
            </div>

            <ul>
              {mockTasks.map((task) => (
                <li key={task.title}>
                  <span className="hero-mock-checkbox" />
                  <span className="hero-mock-task-title">{task.title}</span>
                  <span
                    className={`hero-mock-status hero-mock-status-${task.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {task.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-mock-side">
            <div className="hero-mock-progress">
              <div className="hero-mock-ring">
                <span>72%</span>
              </div>
              <span className="hero-mock-progress-label">Overall Progress</span>
              <span className="hero-mock-progress-sub">Keep going! You're doing great.</span>
            </div>

            <div className="hero-mock-upcoming">
              <span className="hero-mock-upcoming-title">Upcoming</span>
              <div className="hero-mock-upcoming-item">
                <span className="hero-mock-upcoming-name">Team Standup</span>
                <span className="hero-mock-upcoming-time">Today, 10:00 AM</span>
              </div>
              <div className="hero-mock-upcoming-item">
                <span className="hero-mock-upcoming-name">Project Deadline</span>
                <span className="hero-mock-upcoming-time">May 20, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
);

const Hero = ({ isLoggedIn }: HeroProps) => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      {/* MAIN HERO */}
      <div className="hero-banner">
        <div className="hero-banner-bg" aria-hidden="true" />

        <div className="hero-banner-container">
          <div className="hero-banner-left">
            <span className="hero-pill">Plan. Focus. Achieve.</span>

            <h1 className="hero-banner-title">
              Track your work.
              <br />
              <span>Achieve</span> more.
            </h1>

            <p className="hero-banner-desc">
              WorkTrack helps you break down tasks, stay focused, and track
              progress — so you can get more done, every day.
            </p>

            <div className="hero-banner-actions">
              <button
                className="hero-banner-cta"
                onClick={() => navigate(isLoggedIn ? "/task" : "/signup")}
              >
                {isLoggedIn ? "Go to Tasks" : "Get Started"}
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>

              <button
                className="hero-banner-secondary"
                onClick={() => navigate("/about")}
              >
                Learn More
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </div>

            <div className="hero-banner-trust">
              <span>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="m5 13 4 4L19 7" />
                </svg>
                Easy to use
              </span>
              <span>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="5" y="11" width="14" height="9" rx="2" />
                  <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                </svg>
                Secure &amp; Private
              </span>
              <span>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="9" cy="8" r="3" />
                  <path d="M2 20c0-3.3 3-6 7-6s7 2.7 7 6" />
                  <path d="M16 4.2a3 3 0 0 1 0 5.6M22 20c0-2.8-2-5.1-5-5.8" />
                </svg>
                Built for Everyone
              </span>
            </div>
          </div>

          <div className="hero-banner-right">
            <HeroMock />
          </div>
        </div>
      </div>

      <div className="home-feature-section">
        <div className="home-feature-image">
          <img src={featureImg} alt="WorkTrack task board preview" />
        </div>

        <div className="home-feature-copy">
          <span className="hero-pill">Why WorkTrack</span>

          <h2>
            A task management
            <br />
            solution that <span>works.</span>
          </h2>

          <p>
            WorkTrack keeps your tasks, deadlines, and progress in one clear
            workspace so you can focus on what matters next.
          </p>
          <p>
            Create tasks, update their status, and <strong>track completed and
            pending work</strong> from a simple dashboard built for everyday
            productivity.
          </p>

          <ul className="home-feature-points">
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 13 4 4L19 7" /></svg>
              Organize tasks in seconds
            </li>
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 13 4 4L19 7" /></svg>
              Never miss a deadline
            </li>
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 13 4 4L19 7" /></svg>
              See your progress at a glance
            </li>
          </ul>
        </div>
      </div>

      <div className="home-benefits-section">
        <span className="hero-pill">What You Get</span>
        <h2>WorkTrack and its benefits</h2>

        <div className="benefits-grid">
          <article className="benefit-item">
            <span className="benefit-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M8 11h8" />
                <path d="M8 15h5" />
                <path d="M6 3h12a2 2 0 0 1 2 2v14l-4-3H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
              </svg>
            </span>
            <h3>Clear task planning</h3>
            <p>
              Keep every task, note, and deadline organized so your next action
              is always easy to find.
            </p>
          </article>

          <article className="benefit-item">
            <span className="benefit-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M12 21a8 8 0 1 0-8-8" />
                <path d="M3 13h4v4" />
                <path d="M12 7v6l4 2" />
              </svg>
            </span>
            <h3>Better consistency</h3>
            <p>
              Build momentum with small focused sessions and turn large goals
              into manageable daily progress.
            </p>
          </article>

          <article className="benefit-item">
            <span className="benefit-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M13 2 4 14h7l-1 8 10-13h-7l1-7Z" />
              </svg>
            </span>
            <h3>Fast workflow</h3>
            <p>
              Add, edit, complete, and review tasks quickly without wasting time
              on repeated manual tracking.
            </p>
          </article>

          <article className="benefit-item">
            <span className="benefit-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="m4 7 2 2 4-4" />
                <path d="M13 7h7" />
                <path d="m4 14 2 2 4-4" />
                <path d="M13 14h7" />
                <path d="M5 21h15" />
              </svg>
            </span>
            <h3>Progress control</h3>
            <p>
              See completed and pending work clearly, helping you make better
              decisions about your day.
            </p>
          </article>
        </div>
      </div>

      {!isLoggedIn && (
        <div className="about-cta home-cta">
          <span className="about-cta-icon">
            <svg viewBox="0 0 24 24">
              <path d="m12 2 2.9 6.6 7.1.6-5.4 4.7 1.6 6.9L12 17.3 5.8 20.8l1.6-6.9L2 9.2l7.1-.6Z" />
            </svg>
          </span>

          <div className="about-cta-text">
            <h3>Ready to get started?</h3>
            <p>Join WorkTrack and start planning smarter today — it's free.</p>
          </div>

          <button className="hero-banner-cta" onClick={() => navigate("/signup")}>
            Get Started
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      )}

      {/* WELCOME MESSAGE AFTER LOGIN */}
      {isLoggedIn && (
        <div className="welcome-banner">
          <span className="welcome-icon">👋</span>
          <span>Welcome back. Let’s continue your progress.</span>
        </div>
      )}
    </section>
  );
};

export default Hero;
