import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../components/Logo";

type LoginProps = {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

const Login = ({ setIsLoggedIn }: LoginProps) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (loading) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        setLoading(false);
        return;
      }

      localStorage.setItem("userId", data.user.id);
      if (data.user.name) {
        localStorage.setItem("userName", data.user.name);
      }
      setIsLoggedIn(true);
      navigate("/dashboard");
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError("Server error");
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <section className="auth-page">
      <div className="auth-shell">
        <div className="auth-visual">
          <div className="auth-visual-glow" aria-hidden="true" />
          <Logo className="auth-visual-logo" />
          <h2>
            Plan smarter.
            <br />
            Work better.
          </h2>
          <p>
            WorkTrack keeps your tasks, deadlines, and progress in one
            focused workspace — pick up right where you left off.
          </p>

          <ul className="auth-visual-points">
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m5 13 4 4L19 7" />
              </svg>
              Simple task tracking
            </li>
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m5 13 4 4L19 7" />
              </svg>
              Deadline reminders
            </li>
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m5 13 4 4L19 7" />
              </svg>
              Built-in AI assistant
            </li>
          </ul>
        </div>

        <div className="auth-form-panel">
          <span className="hero-pill">Welcome back</span>
          <h1 className="auth-form-title">Log in to your account</h1>
          <p className="auth-form-sub">Enter your details to continue.</p>

          {error && <p className="auth-error">{error}</p>}

          <label className="auth-field">
            <span>Email</span>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </label>

          <label className="auth-field">
            <span>Password</span>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </label>

          <button className="auth-submit" onClick={handleLogin} disabled={loading}>
            {loading ? (
              <>
                <span className="btn-spinner" aria-hidden="true" /> Logging in...
              </>
            ) : (
              <>
                Login
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </>
            )}
          </button>

          <p className="auth-footer">
            Don’t have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
