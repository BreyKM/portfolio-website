import React from "react";
import "./skills.css";
import hcj from "./images/HTML_CSS_JS.png";
import rxt from "./images/React-icon.svg.png";
import nodejs from "./images/nodeJS-logov2.png";
import python from "./images/python-logo.png";
import { useInView } from "react-intersection-observer";

function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    rootMargin: "250px",
  });

  return (
    <div className="main-skills-container" id="skills">
      <div className="skills-container">
        <p className="skills-heading text-color">Skills</p>
        <div id="cards">
          <div className={`card ${inView ? "show" : "hidden"}`} ref={ref}>
            <div className="card-content">
              <div className="card-image">
                <img className="skills-img" src={hcj} alt="html css and javascript logos" />
              </div>
              <div className="card-info-wrapper">
                <div className="card-info">
                  <div className="card-info-title">Html / CSS / JavaScript</div>
                </div>
              </div>
            </div>
          </div>
          <div className={`card ${inView ? "show" : "hidden"}`} ref={ref}>
            <div className="card-content">
              <div className="card-image">
                <img className="skills-img" src={rxt} alt="" />
              </div>
              <div className="card-info-wrapper">
                <div className="card-info">
                  <div className="card-info-title">React</div>
                </div>
              </div>
            </div>
          </div>
          <div className={`card ${inView ? "show" : "hidden"}`} ref={ref}>
            <div className="card-content">
              <div className="card-image">
                <img className="skills-img" src={python} alt="" />
              </div>
              <div className="card-info-wrapper">
                <div className="card-info">
                  <div className="card-info-title">Python</div>
                </div>
              </div>
            </div>
          </div>
          <div className={`card ${inView ? "show" : "hidden"}`} ref={ref}>
            <div className="card-content">
              <div className="card-image">
                <img className="node-img" src={nodejs} alt="" />
              </div>
              <div className="card-info-wrapper">
                <div className="card-info">
                  <div className="card-info-title">node.js</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
