import React, { useState, useEffect } from "react";
import "./navbar.css";
import { ReactComponent as Logo } from "./images/portfolio-logov4.svg";
import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";

function NavBar() {
  const [sticky, setSticky] = useState(false);
  const [scrollColor, setScrollColor] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollColor(window.scrollY >= 250);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <nav
      className={` ${sticky ? "sticky nav" : "nav"} ${
        scrollColor ? "scroll" : ""
      }`}
      ref={ref}
    >
      <div className={`logo ${inView ? "shownav" : "hidenav"}`}>
        <a href="../../public/index.html" title="Home">
          <Logo className="logo-svg" aria-label="Logo"/>
        </a>
      </div>
      <div className="brackets nav-links">
        <div className={`nav-link ${inView ? "shownav" : "hidenav"}`} ref={ref}>
          <Link
            title="About"
            to="about"
            tabIndex={0}
            spy={true}
            smooth={true}
            offset={-150}
            duration={600}
          >
            About
          </Link>
        </div>
        <div className={`nav-link ${inView ? "shownav" : "hidenav"}`} ref={ref}>
          <Link
            title="Skills"
            to="skills"
            tabIndex={0}
            spy={true}
            smooth={true}
            offset={-65}
            duration={600}
          >
            Skills
          </Link>
        </div>
        <div className={`nav-link ${inView ? "shownav" : "hidenav"}`} ref={ref}>
          <Link
            title="Projects"
            to="projects"
            tabIndex={0}
            spy={true}
            smooth={true}
            offset={-100}
            duration={600}
          >
            Projects
          </Link>
        </div>
        <div className={`nav-link ${inView ? "shownav" : "hidenav"}`} ref={ref}>
          <Link
            title="Contact"
            to="contact"
            tabIndex={0}
            spy={true}
            smooth={true}
            offset={-100}
            duration={600}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
