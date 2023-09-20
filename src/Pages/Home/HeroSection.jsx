export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I`m Oana.</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">FrontEnd </span> <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            <br />
            Possimus cupiditate rerum, culpa dolores saepe repudiandae! Iste
            itaque natus officia quod.
          </p>
        </div>
        <button className="btn btn-primary">Get in Touch!</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/cardOana.png" width="" height="" alt="Hero Section" />
      </div>
    </section>
  );
}
