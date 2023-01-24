import React, { useState, useEffect } from "react";
import './navbar.css';
import { ReactComponent as Logo } from "./images/portfolio-logo.svg";
import {Link} from 'react-scroll';

function NavBar() {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY >= 0)
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })


    return (
        <nav className={`${sticky ? 'sticky nav': "nav"}` }>
            <div className="logo">
                <Logo className="logo-svg" />
            </div>
            <div className="nav-links">
                <li><Link to="about" spy={true} smooth={true} offset={50} duration={300}>About</Link></li>
                <li><a href="">Skills</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contact</a></li>
            </div>
        </nav>
        
)}

export default NavBar;




