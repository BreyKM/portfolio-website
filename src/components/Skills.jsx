import React from "react";
import "./skills.css"
import hcj from "./images/HTML_CSS_JS.png";
import rxt from "./images/React-icon.svg.png";
import nodejs from "./images/1200px-Node.js_logo.svg.png";
import python from "./images/python-logo.png";

function skills() {
  return (
    <div className="main-skills-container" id="skills">
      <div className="skills-container">
        <p className="skills-heading text-color">Skills</p>
        <div id="cards">
          <div className="card">
            <div className="card-content">
              <div className="card-image">
                <img src={hcj} alt="html css and javascript logos" />
              </div>
              <div className="card-info-wrapper">
                <div className="card-info">
                  <div className="card-info-title">Html / CSS / JavaScript</div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="card-image">
                <img src={rxt} alt="" />
              </div>
              <div className="card-info-wrapper">
                <div className="card-info">
                  <div className="card-info-title">React</div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="card-image">
                <img src={python} alt="" />
              </div>
              <div className="card-info-wrapper">
                <div className="card-info">
                  <div className="card-info-title">Python</div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="card-image">
                <img src={nodejs} alt="" />
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

export default skills;
