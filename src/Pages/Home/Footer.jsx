import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import React from "react";

import "@fortawesome/fontawesome-free/css/all.css";
function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div>
          <RouterLink to="heroSection" className="logo-link">
            <img src="./img/logo.png" alt="oana`s logo" />
          </RouterLink>
        </div>
        <div className="footer--items">
          <ul>
            <li>
              <RouterLink
                activeClass="navbar--active-content"
                smooth="true"
                offset={-70}
                duration={500}
                to="AboutMe"
                className="text-md"
              >
                About Me
              </RouterLink>
            </li>
            <li>
              <RouterLink
                activeClass="navbar--active-content"
                smooth="true"
                offset={-70}
                duration={500}
                to="MySkills"
                className="text-md"
              >
                Services
              </RouterLink>
            </li>
            <li>
              <RouterLink
                activeClass="navbar--active-content"
                smooth="true"
                offset={-70}
                duration={500}
                to="MyPortfolio"
                className="text-md"
              >
                Portfolio
              </RouterLink>
            </li>
            <li>
              <RouterLink
                activeClass="navbar--active-content"
                smooth="true"
                offset={-70}
                duration={500}
                to="/Contact"
                className="text-md"
              >
                Contact Me
              </RouterLink>
            </li>
            <li>
              <RouterLink
                activeClass="navbar--active-content"
                smooth="true"
                offset={-70}
                duration={500}
                to="/Resume"
                className="text-md"
              >
                Resume
              </RouterLink>
            </li>
          </ul>
        </div>
        <div className="footer--social--icon">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/oanagrecu/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/oanagrecu"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=0740182897"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-whatsapp" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                href="mailto:oana.alexandra.grecu@gmail.com"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-envelope" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer--content--container">
        <p className="footer--content">
          Oana`s Portfolio &copy; 2023 All Rights Reserved
        </p>

        <div className="footer--social--icon">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                smooth="true"
                offset={-70}
                duration={500}
                to="Privacy_Policy"
                className="text-sm"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                smooth="true"
                offset={-70}
                duration={500}
                to="Terms_of_Service"
                className="text-sm"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                smooth="true"
                offset={-70}
                duration={500}
                to="Cookies_Settings"
                className="text-sm"
              >
                Cookies Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
