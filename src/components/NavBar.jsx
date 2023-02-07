import React, { useState, useEffect } from "react";
import "./navbar.css";
import { ReactComponent as Logo } from "./images/portfolio-logov4.svg";
import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

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

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <>
      <nav className="navBar">
        <button onClick={handleToggle}>
        {navbarOpen ? (
    <MdClose style={{ color: "#fff", width: "40px", height: "40px", }} />
  ) : (
    <FiMenu style={{ color: "#fff", width: "40px", height: "40px" }} />
  )}</button>
        <div className={`menuNav ${navbarOpen ? "showMenu" : ""}`}>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => closeMenu()}
            className="mobile-link first"
          >
            About
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => closeMenu()}
            className="mobile-link"
          >
            Skills
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => closeMenu()}
            className="mobile-link"
          >
            Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => closeMenu()}
            className="mobile-link"
          >
            Contact
          </Link>
        </div>
      </nav>
      <nav
        className={`${sticky ? "sticky nav" : "nav"} ${
          scrollColor ? "scroll" : ""
        }`}
        ref={ref}
      >
        <div className={`logo ${inView ? "shownav" : "hidenav"}`}>
          <a href="../../public/index.html" title="Home">
            <Logo className="logo-svg" aria-label="Logo" />
          </a>
        </div>
        <div className="brackets nav-links">
          <div
            className={` ${inView ? "nav-link shownav" : " nav-link hidenav"}`}
            ref={ref}
          >
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
          <div
            className={`nav-link ${inView ? "shownav" : "hidenav"}`}
            ref={ref}
          >
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
          <div
            className={`nav-link ${inView ? "shownav" : "hidenav"}`}
            ref={ref}
          >
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
          <div
            className={`nav-link ${inView ? "shownav" : "hidenav"}`}
            ref={ref}
          >
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
    </>
  );
}

export default NavBar;
