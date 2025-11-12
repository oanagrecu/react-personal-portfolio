import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Oana</p>
          <h2 className="hero--section--title">
            <span className="hero--section-title--color">Front-End</span> <br />
            Developer
          </h2>
          <p className="hero--section-description">
            I am a responsible and organized person with a strong business
            orientation. After a fulfilling teaching career, I've successfully
            transitioned to front-end web development. Proficient in HTML5, CSS,
            JavaScript, Bootstrap, React, JSON, GitHub, NoSQL, MariaDB, Node.js,
            Express.js and more.
            <br />I am eager to embark on a successful journey as a
            Web Developer, soon to be Full-stack.
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
