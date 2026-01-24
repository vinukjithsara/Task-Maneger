import heroImg from "../assets/hero.png";

type HeroProps = {
  isLoggedIn: boolean;
};

const Hero = ({ isLoggedIn }: HeroProps) => {
  return (
    <section className="hero">

      {/* TOP STRIP */}
      <div className="home-strip">
        <h1>Home</h1>
      </div>

      {/* HERO LAYOUT */}
      <div className="hero-container">

        {/* LEFT */}
        <div className="hero-left">
          <h2 className="hero-title">
            Why use <span>Worktrack</span>?
          </h2>

          <p className="hero-desc">
            Beat procrastination with short, focused sessions.
            Turn big goals into small actions and track your progress
            consistently.
          </p>

          {!isLoggedIn && (
            <button className="hero-cta">
              Get Started
              
            </button>
          )}
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <img
            src={heroImg}



            alt="Work illustration"
            className="hero-img"
          />
        </div>

      </div>

      {/* AFTER LOGIN */}
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
