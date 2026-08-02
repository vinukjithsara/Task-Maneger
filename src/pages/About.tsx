import { useNavigate } from "react-router-dom";

type AboutProps = {
  isLoggedIn: boolean;
};

const values = [
  {
    title: "Focus",
    desc: "We help you focus on what truly matters.",
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
        <path d="m19 5-2.5 2.5" />
      </svg>
    ),
  },
  {
    title: "Simplicity",
    desc: "Simple tools for a better workflow.",
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="9" cy="8" r="3" />
        <path d="M2 20c0-3.3 3-6 7-6s7 2.7 7 6" />
        <path d="M16 4.2a3 3 0 0 1 0 5.6M22 20c0-2.8-2-5.1-5-5.8" />
      </svg>
    ),
  },
  {
    title: "Trust",
    desc: "We protect your data and your time.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 3 4 6v6c0 5 3.4 8.5 8 9 4.6-.5 8-4 8-9V6l-8-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Growth",
    desc: "We grow with you, every step of the way.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M5 19 11 13 15 17 21 9" />
        <path d="M15 9h6v6" />
      </svg>
    ),
  },
];

const stats = [
  {
    num: "10K+",
    label: "Happy Users",
    sub: "growing every day",
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="9" cy="8" r="3" />
        <path d="M2 20c0-3.3 3-6 7-6s7 2.7 7 6" />
        <path d="M16 4.2a3 3 0 0 1 0 5.6M22 20c0-2.8-2-5.1-5-5.8" />
      </svg>
    ),
  },
  {
    num: "25M+",
    label: "Tasks Completed",
    sub: "and counting",
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="m8 12 2.5 2.5L16 9" />
      </svg>
    ),
  },
  {
    num: "99.9%",
    label: "Uptime",
    sub: "you can rely on",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 17 9 11 13 15 21 6" />
        <path d="M15 6h6v6" />
      </svg>
    ),
  },
  {
    num: "100%",
    label: "Secure & Private",
    sub: "your data is safe",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 3 4 6v6c0 5 3.4 8.5 8 9 4.6-.5 8-4 8-9V6l-8-3Z" />
      </svg>
    ),
  },
];

const AboutMock = () => (
  <div className="about-mock-wrap" aria-hidden="true">
    <div className="about-mock">
      <div className="about-mock-topbar">
        <span className="about-mock-dot" />
        <span className="about-mock-dot" />
        <span className="about-mock-dot" />
      </div>

      <div className="about-mock-body">
        <aside className="about-mock-sidebar">
          <span className="active">
            <svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></svg>
          </span>
          <span><svg viewBox="0 0 24 24"><path d="m5 13 4 4L19 7" /></svg></span>
          <span><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></svg></span>
          <span><svg viewBox="0 0 24 24"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" /></svg></span>
          <span><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3" /><path d="M2 20c0-3.3 3-6 7-6s7 2.7 7 6" /></svg></span>
          <span><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21a2 2 0 1 1-4 0v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H3a2 2 0 1 1 0-4h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.6V3a2 2 0 1 1 4 0v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.6 1H21a2 2 0 1 1 0 4h-.2a1.7 1.7 0 0 0-1.6 1Z" /></svg></span>
        </aside>

        <div className="about-mock-main">
          <div className="about-mock-tasks-row">
            <div className="about-mock-task-card">
              <span className="about-mock-check">
                <svg viewBox="0 0 24 24"><path d="m5 13 4 4L19 7" /></svg>
              </span>
              <span className="about-mock-bar" />
            </div>
            <div className="about-mock-task-card">
              <span className="about-mock-check">
                <svg viewBox="0 0 24 24"><path d="m5 13 4 4L19 7" /></svg>
              </span>
              <span className="about-mock-bar" />
            </div>
          </div>

          <div className="about-mock-charts-row">
            <div className="about-mock-chart-card">
              <svg viewBox="0 0 120 50" preserveAspectRatio="none" className="about-mock-line">
                <polyline points="0,40 20,32 40,36 60,20 80,24 100,8 120,12" />
              </svg>
            </div>
            <div className="about-mock-donut-card">
              <div className="about-mock-donut" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="about-mock-notif">
      <span className="about-mock-notif-check">
        <svg viewBox="0 0 24 24"><path d="m5 13 4 4L19 7" /></svg>
      </span>
      <span className="about-mock-bar" />
      <span className="about-mock-bar short" />
    </div>

    <svg className="about-mock-plant" viewBox="0 0 80 100" aria-hidden="true">
      <rect x="20" y="70" width="40" height="26" rx="4" />
      <path d="M40 70C40 50 20 45 15 25C32 30 40 45 40 70Z" />
      <path d="M40 70C40 45 60 40 65 20C48 25 40 45 40 70Z" />
      <path d="M40 70C40 55 40 40 40 15C50 30 44 55 40 70Z" />
    </svg>
  </div>
);

const About = ({ isLoggedIn }: AboutProps) => {
  const navigate = useNavigate();

  return (
    <section className="about-page">
      <div className="hero-banner about-hero">
        <div className="hero-banner-bg" aria-hidden="true" />

        <div className="hero-banner-container">
          <div className="hero-banner-left">
            <span className="hero-pill">About Worktrack</span>

            <h1 className="hero-banner-title about-hero-title">
              Built to help you <span>focus</span>, stay <span>consistent</span>, and <span>grow</span>.
            </h1>

            <p className="hero-banner-desc">
              WorkTrack is a productivity and task management platform
              designed to help individuals and teams plan, track, and
              complete work with clarity and purpose.
            </p>

            <span className="about-divider-bar" />
          </div>

          <div className="hero-banner-right">
            <AboutMock />
          </div>
        </div>

        <div className="about-stats">
          {stats.map((s) => (
            <div className="about-stat" key={s.label}>
              <span className="about-stat-icon">{s.icon}</span>
              <div className="about-stat-text">
                <span className="about-stat-num">{s.num}</span>
                <span className="about-stat-label">{s.label}</span>
                <span className="about-stat-sub">{s.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="about-split">
        <div className="about-mission">
          <h2>Our Mission</h2>
          <span className="about-divider-bar" />
          <p>
            To empower people and teams to take control of their work,
            eliminate distractions, and achieve meaningful progress every
            day.
          </p>
        </div>

        <div className="about-values">
          <h2>Our Values</h2>
          <span className="about-divider-bar" />

          <div className="about-values-grid">
            {values.map((v) => (
              <div className="about-value" key={v.title}>
                <span className="about-value-icon">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="about-cta">
        <span className="about-cta-icon">
          <svg viewBox="0 0 24 24">
            <path d="m12 2 2.9 6.6 7.1.6-5.4 4.7 1.6 6.9L12 17.3 5.8 20.8l1.6-6.9L2 9.2l7.1-.6Z" />
          </svg>
        </span>

        <div className="about-cta-text">
          <h3>Ready to Achieve More?</h3>
          <p>Join thousands of users who are already getting things done with Worktrack.</p>
        </div>

        <button
          className="hero-banner-cta"
          onClick={() => navigate(isLoggedIn ? "/task" : "/signup")}
        >
          Get Started
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default About;
