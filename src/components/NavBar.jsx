import React, { useState, useEffect } from "react";
import './Navbar.css';
import { ReactComponent as Logo } from "./images/portfolio-logov4.svg";
import {Link} from 'react-scroll';

function NavBar() {
    const [sticky, setSticky] = useState(false);
    const [scrollColor, setScrollColor] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY >= 0) 
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })

    useEffect(() => {
        const handleScroll = () => {
            setScrollColor(window.scrollY >= 250) 
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })
    

    return (
        <nav className={`sticky ${sticky ? 'sticky nav': "nav"} ${scrollColor ? 'nav scroll': "nav"} ` }>
            <div className="logo">
                <a href="../../public/index.html" title="Home"><Logo className="logo-svg" /></a>
            </div>
            <div className="brackets nav-links">
                <div className="nav-name"><Link title="About" to="about" spy={true} smooth={true} offset={-250} duration={300}>About</Link></div> 
                <Link title="Skills" to="skills" spy={true} smooth={true} offset={-200} duration={300}>Skills</Link>   
                <Link title="Projects" to="projects" spy={true} smooth={true} offset={-200} duration={300}>Projects</Link> 
                <Link title="Contact" to="contact" spy={true} smooth={true} offset={-200} duration={300}>Contact</Link>  
            </div>
        </nav>
        
)}

export default NavBar;




