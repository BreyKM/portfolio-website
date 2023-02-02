import React from "react";
import './hero.css'

function Hero() {
    return (
        <div className="main-container" id="hero">
        <div className="hero-container ">
            <p className=" big_heading focus-in-expand-fwd">Hi i'm <span className="name-color">Bredan</span></p>
            <p className="hero-padding small_heading focus-in-expand-fwd">A Computer Science Student</p>
            <button className=" resume-btn focus-in-expand-fwd .shadow-drop-br">Resume</button>
        </div>
        </div>
    )
};

export default Hero;