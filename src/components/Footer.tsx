import { Link } from "react-router-dom";
import Logo from "./Logo";

const socials = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1Z" />,
  },
  {
    label: "X",
    href: "https://x.com",
    icon: <path d="m5 5 14 14M19 5 5 19" />,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <circle cx="12" cy="12" r="3.2" />
        <path d="M16.2 7.8h.01" />
      </>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <path d="M8 10.5v6M8 7.8h.01M12 16.5v-3.5c0-1.4 1-2.5 2.3-2.5S16 11.6 16 13v3.5" />
      </>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-glow" aria-hidden="true" />

      <div className="footer-container">
        <section className="footer-brand" aria-label="WorkTrack">
          <Logo />
          <p>
            WorkTrack helps you break down tasks, stay focused, and get more
            done — every day.
          </p>

          <div className="footer-socials" aria-label="Social links">
            {socials.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  {s.icon}
                </svg>
              </a>
            ))}
          </div>
        </section>

        <section className="footer-col" aria-label="Product">
          <h2>Product</h2>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/task">Tasks</Link>
        </section>

        <section className="footer-col" aria-label="Company">
          <h2>Company</h2>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/signup">Get Started</Link>
        </section>

        <section className="footer-col footer-contact" aria-label="Contact">
          <h2>Contact</h2>
          <p>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16v12H4z" /><path d="m4 7 8 6 8-6" /></svg>
            hello@worktrack.com
          </p>
          <p>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 2.5a2 2 0 0 1-.5 1.8L8 9.1a16 16 0 0 0 6.9 6.9l1.1-1.1a2 2 0 0 1 1.8-.5l2.5.5a2 2 0 0 1 1.7 2Z" /></svg>
            +94 77 123 4567
          </p>
        </section>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 WorkTrack. All rights reserved.</p>
        <div className="footer-legal">
          <a href="/">Legal Notice</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
