import React from "react";
import {Link} from 'react-scroll';
import './hero.css'

function Hero() {
    return (
        <div className="main-container">
        <div className="hero-container">
            <p className="hero-padding small_heading focus-in-expand-fwd">Hi i'm <span className="hero-padding name-color">Bredan</span></p>
            <p className="hero-padding big_heading focus-in-expand-fwd">I'm a Computer Science Student</p>
            <button className="hero-padding resume-btn focus-in-expand-fwd .shadow-drop-br">Resume</button>
        </div>
        </div>
    )
};

export default Hero;
