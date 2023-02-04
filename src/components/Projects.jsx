import React from "react";
import "./Projects.css";
import EAS from "./images/Etch-A-Sketch2.png";
import HBO from "./images/HBOMAX-clone.jpg";
import GH from "./images/icons8-github-30.png";
import EXTL from "./images/icons8-external-link-30.png";

function Projects() {
  return (
    <div class="project-container" id="projects">
      <div className="project-header">Projects</div>
      <div class="project">
        <div class="project-content">
          <a href="https://breykm.github.io/Etch-A-Sketch/" target="_blank"><h4 class="project-title">Etch-A-Sketch</h4></a>
          <div className="project-details-container">
          <div class="project-description">
            <p>
              This etch-a-sketch website is a fun and interactive digital
              version of the classic toy. Built with JavaScript, it allows users
              to create simple sketches by moving a cursor on a virtual canvas.
            </p>
            </div>
            <div className="project-tools">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            </div>
            <div className="project-links-svg">
            <ul>
              <a href="https://github.com/BreyKM/Etch-A-Sketch" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#aaa"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-github"
                >
                  <title>GitHub</title>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="https://breykm.github.io/Etch-A-Sketch/" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#aaa"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-external-link"
                >
                  <title>External Link</title>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </ul>
            </div>
          
          </div>
        </div>

        <div class="project-img">
          <a
            href="https://breykm.github.io/Etch-A-Sketch/"
            target="_blank"
            className="live-site"
          >
            <img src={EAS} alt="" />
          </a>
        </div>
      </div>
      <div class="project">
        <div class="project-content2">
          <h4 class="project-title2"><a href="https://github.com/BreyKM/HBOMAX-clone" target="_blank">HBO MAX clone</a></h4>
          <div className="project-details-container2">
          <div class="project-description2">
            <p>
              This etch-a-sketch website is a fun and interactive digital
              version of the classic toy. Built with JavaScript, it allows users
              to create simple sketches by moving a cursor on a virtual canvas.
            </p>
            </div>
            <div className="project-tools2">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            </div>
            <div className="project-links-svg2">
            <ul className="project-links-right">
              <a href="https://github.com/BreyKM/HBOMAX-clone" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#aaa"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-github"
                >
                  <title>GitHub</title>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="https://breykm.github.io/HBOMAX-clone/" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#aaa"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-external-link"
                >
                  <title>External Link</title>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </ul>
            </div>
          </div>
        </div>

        <div class="project-img2">
          <a
            href="https://breykm.github.io/HBOMAX-clone/"
            target="_blank"
            className="live-site"
          >
            <img src={HBO} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
