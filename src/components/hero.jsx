import React from "react";
import './Hero.css'

function Hero() {
    return (
        <div className="main-container" id="hero">
        <div className="hero-container focus-in-expand-fwd">
            <p className=" big_heading ">Hi i'm <span className="name-color bounce-in-right">Bredan</span></p>
            <p className="hero-padding small_heading ">A Computer Science Student</p>
            <button className=" resume-btn  .shadow-drop-br">Resume</button>
        </div>
        </div>
    )
};

export default Hero;