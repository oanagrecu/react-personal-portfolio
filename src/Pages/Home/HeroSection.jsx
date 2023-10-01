import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Oana</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Front-End</span> <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br /> Dolorum, quas. Amet soluta assumenda cum?
          </p>
        </div>
        <RouterLink
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="/Contact"
          className="btn btn-primary"
        >
          Get In Touch
        </RouterLink>
      </div>
      <div className="hero--section--img">
        <img src="./img/cardOana.png" alt="Hero Section" />
      </div>
    </section>
  );
}
