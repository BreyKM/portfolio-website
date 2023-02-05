import React, { useState, useEffect } from "react";
import "./Navbar.css";
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
      className={`sticky ${sticky ? "sticky nav" : "nav"} ${
        scrollColor ? "nav scroll" : "nav"
      }`}
      ref={ref}
    >
      <div className={`logo ${inView ? "shownav" : "hidenav"}`}>
        <a href="../../public/index.html" title="Home">
          <Logo className="logo-svg" />
        </a>
      </div>
      <div className="brackets nav-links">
        <div className={`nav-link ${inView ? "shownav" : "hidenav"}`} ref={ref}>
          <Link
            title="About"
            to="about"
            spy={true}
            smooth={true}
            offset={-250}
            duration={600}
          >
            About
          </Link>
        </div>
        <div className={`nav-link ${inView ? "shownav" : "hidenav"}`} ref={ref}>
          <Link
            title="Skills"
            to="skills"
            spy={true}
            smooth={true}
            offset={-200}
            duration={600}
          >
            Skills
          </Link>
        </div>
        <div className={`nav-link ${inView ? "shownav" : "hidenav"}`} ref={ref}>
          <Link
            title="Projects"
            to="projects"
            spy={true}
            smooth={true}
            offset={-200}
            duration={600}
          >
            Projects
          </Link>
        </div>
        <div className={`nav-link ${inView ? "shownav" : "hidenav"}`} ref={ref}>
          <Link
            title="Contact"
            to="contact"
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
