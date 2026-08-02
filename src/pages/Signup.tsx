import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../components/Logo";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (loading) return;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (username.trim().length < 3) {
      setError("Username must be at least 3 characters");
      return;
    }

    if (password.length < 4) {
      setError("Password must be at least 4 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");

    try {
      setLoading(true);
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Signup failed");
        setLoading(false);
        return;
      }

      alert("Signup successful ✅");
      navigate("/login");
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError("Server error");
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSignup();
  };

  return (
    <section className="auth-page">
      <div className="auth-shell">
        <div className="auth-visual">
          <div className="auth-visual-glow" aria-hidden="true" />
          <Logo className="auth-visual-logo" />
          <h2>
            Join WorkTrack
            <br />
            in seconds.
          </h2>
          <p>
            Break down goals into tasks, stay on top of deadlines, and get
            more done — every day.
          </p>

          <ul className="auth-visual-points">
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m5 13 4 4L19 7" />
              </svg>
              Free to get started
            </li>
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m5 13 4 4L19 7" />
              </svg>
              Your data stays private
            </li>
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m5 13 4 4L19 7" />
              </svg>
              Set up in under a minute
            </li>
          </ul>
        </div>

        <div className="auth-form-panel">
          <span className="hero-pill">Join WorkTrack</span>
          <h1 className="auth-form-title">Create your account</h1>
          <p className="auth-form-sub">Start working smarter today.</p>

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
            <span>Username</span>
            <input
              type="text"
              placeholder="Your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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

          <label className="auth-field">
            <span>Confirm Password</span>
            <input
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </label>

          <button className="auth-submit" onClick={handleSignup} disabled={loading}>
            {loading ? (
              <>
                <span className="btn-spinner" aria-hidden="true" /> Signing up...
              </>
            ) : (
              <>
                Sign Up
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </>
            )}
          </button>

          <p className="auth-footer">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
