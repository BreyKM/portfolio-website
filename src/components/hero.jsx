import React from "react";
import './hero.css'
import { useInView } from "react-intersection-observer";

function Hero() {
    const { ref, inView } = useInView({
        triggerOnce: true,
      });

    return (
        <div className="main-container" id="hero">
        <div className="hero-container focus-in-expand-fwd">
            <p className={`big_heading heroView ${inView ? "showhero" : "hidehero"}`} ref={ref}>Hi i'm <span className="name-color bounce-in-right">Bredan</span></p>
            <p className={`hero-padding small_heading heroView ${inView ? "showhero" : "hidehero"}`} ref={ref}>A Computer Science Student</p>
            <div className={` heroView ${inView ? "showhero" : "hidehero"}`} ref={ref}><button className="resume-btn">Resume</button></div>
        </div>
        </div>
    )
};

export default Hero;