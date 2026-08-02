import type { ReactNode } from "react";

type LegalLayoutProps = {
  pill: string;
  title: string;
  updated: string;
  children: ReactNode;
};

const LegalLayout = ({ pill, title, updated, children }: LegalLayoutProps) => (
  <section className="legal-page">
    <div className="hero-banner legal-hero">
      <div className="hero-banner-bg" aria-hidden="true" />

      <div className="legal-hero-container">
        <div className="hero-banner-left">
          <span className="hero-pill">{pill}</span>

          <h1 className="hero-banner-title">{title}</h1>

          <p className="hero-banner-desc">Last updated: {updated}</p>
        </div>
      </div>
    </div>

    <div className="legal-content">{children}</div>
  </section>
);

export default LegalLayout;
