import { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

type ContactProps = {
  isLoggedIn: boolean;
};

const infoItems = [
  {
    title: "Email Us",
    lines: ["hello@worktrack.app", "We usually reply within 24 hours"],
    icon: <Mail size={26} />,
  },
  {
    title: "Call Us",
    lines: ["+94 77 123 4567", "Mon - Fri, 9AM - 6PM"],
    icon: <Phone size={26} />,
  },
  {
    title: "Visit Us",
    lines: ["123 Productivity Lane", "Colombo 07, Sri Lanka"],
    icon: <MapPin size={26} />,
  },
  {
    title: "Business Hours",
    lines: ["Monday - Friday", "9AM - 6PM"],
    icon: <Clock size={26} />,
  },
];

const Contact = ({ isLoggedIn }: ContactProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const handleSend = () => {
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSent(true);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <section className="contact-page">
      <div className="hero-banner contact-hero">
        <div className="hero-banner-bg" aria-hidden="true" />

        <div className="hero-banner-container contact-hero-container">
          <div className="hero-banner-left">
            <span className="hero-pill">Get In Touch</span>

            <h1 className="hero-banner-title">
              We'd love to
              <br />
              hear from <span>you.</span>
            </h1>

            <p className="hero-banner-desc">
              Have a question, suggestion, or just want to say hello? We're
              here to help.
              {isLoggedIn
                ? " As a WorkTrack member, our support team can help with tasks, dashboards, or account questions."
                : " Send us a message and we'll get back to you as soon as possible."}
            </p>

            <div className="contact-info-list">
              {infoItems.map((item) => (
                <div className="contact-info-item" key={item.title}>
                  <div className="contact-info-icon">
                    {item.icon}
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.lines[0]}</p>
                    <span>{item.lines[1]}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form-card">
            <div className="contact-form-header">
              <span className="contact-form-icon">
                <svg viewBox="0 0 24 24">
                  <path d="m3 3 18 9-18 9 4-9Z" />
                </svg>
              </span>
              <div>
                <h2>Send us a message</h2>
                <p>Fill out the form below and we'll get back to you.</p>
              </div>
            </div>

            {sent && (
              <p className="contact-sent-note">
                Thanks! Your message has been noted - we'll get back to you soon.
              </p>
            )}

            <div className="contact-form-row">
              <label className="auth-field">
                <span>Your Name</span>
                <div className="contact-input-wrap">
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="3.5" />
                    <path d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </label>

              <label className="auth-field">
                <span>Your Email</span>
                <div className="contact-input-wrap">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 6h16v12H4z" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </label>
            </div>

            <label className="auth-field">
              <span>Subject</span>
              <div className="contact-input-wrap">
                <svg viewBox="0 0 24 24">
                  <path d="M7 3h8l4 4v14H7z" />
                  <path d="M15 3v4h4" />
                </svg>
                <input
                  type="text"
                  placeholder="What is this regarding?"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
            </label>

            <label className="auth-field">
              <span>Message</span>
              <div className="contact-input-wrap contact-textarea-wrap">
                <svg viewBox="0 0 24 24">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                </svg>
                <textarea
                  placeholder="Type your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                />
              </div>
            </label>

            <div className="contact-form-footer">
              <button className="hero-banner-cta" onClick={handleSend}>
                Send Message
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="m3 3 18 9-18 9 4-9Z" />
                </svg>
              </button>

              <span className="contact-secure-note">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="5" y="11" width="14" height="9" rx="2" />
                  <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                </svg>
                Your information is 100% secure and will never be shared.
              </span>
            </div>
          </div>
        </div>

        <div className="contact-help-bar">
          <div className="contact-help-text">
            <h3>Need help?</h3>
            <p>
              Check out our <a href="#">Help Center</a> or browse FAQs for
              quick answers.
            </p>
          </div>

          <div className="contact-help-links">
            <a className="contact-help-link" href="#">
              <span className="contact-help-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
                </svg>
              </span>
              <span className="contact-help-link-text">
                <strong>Help Center</strong>
                <small>Find answers to common questions and issues.</small>
              </span>
              <svg className="contact-help-arrow" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>

            <a className="contact-help-link" href="#">
              <span className="contact-help-icon">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.8.4-1 .9-1 1.7" />
                  <path d="M12 17h.01" />
                </svg>
              </span>
              <span className="contact-help-link-text">
                <strong>FAQ</strong>
                <small>Browse frequently asked questions.</small>
              </span>
              <svg className="contact-help-arrow" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
