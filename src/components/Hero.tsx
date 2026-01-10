import heroImg from "../assets/herophoto.png";

const Hero = () => {
  return (
    <section className="hero">

      {/* PAGE TITLE */}
      <div className="page-title-box">
        <h1>Home</h1>
      </div>

      {/* HERO IMAGE */}
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
