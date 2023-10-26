import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import HeroSection from "./HeroSection";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <RouterLink to="/" className="logo-link">
          <img src="./img/logo.png" alt="oana`s logo" />
        </RouterLink>
      </div>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <RouterLink
              onClick={closeMenu}
              activeClass="navbar--active-content"
              smooth={true}
              offset={-70}
              duration={500}
              to="/AboutMe"
              className="navbar--content"
            >
              About Me
            </RouterLink>
          </li>
          <li>
            <RouterLink
              onClick={closeMenu}
              activeClass="navbar--active-content"
              smooth={true}
              offset={-70}
              duration={500}
              to="/MySkills"
              className="navbar--content"
            >
              Services
            </RouterLink>
          </li>
          <li>
            <RouterLink
              onClick={closeMenu}
              activeClass="navbar--active-content"
              smooth={true}
              offset={-70}
              duration={500}
              to="/MyPortfolio"
              className="navbar--content"
            >
              Portfolio
            </RouterLink>
          </li>

          <li>
            <RouterLink
              onClick={closeMenu}
              to="/resume"
              className="navbar--content"
              activeClassName="active-link"
            >
              Resume
            </RouterLink>
          </li>
        </ul>
      </div>
      <RouterLink
        onClick={closeMenu}
        smooth={true}
        activeClass="navbar--active-content"
        offset={-70}
        duration={500}
        to="/Contact"
        className="btn btn-outline-primary"
      >
        Contact Me
      </RouterLink>
    </nav>
  );
}

export default Navbar;
