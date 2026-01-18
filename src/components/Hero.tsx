import heroImg from "../assets/herophoto.png";

const Hero = () => {
  return (
    <section className="hero">

      <div className="home-strip">
        <h1>Home</h1>
        <div className="home-divider"></div>
      </div>

      <div className="hero-image-wrapper">
        <img
          src={heroImg}
          alt="Work illustration"
          className="hero-img"
        />
      </div>

    </section>
  );
};

export default Hero;
