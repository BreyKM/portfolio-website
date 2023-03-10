import React from "react";
import "./Projects.css";
import EAS from "./images/Etch-A-Sketch2.png";
import HBO from "./images/HBOMAX-clone.jpg";
import { useInView } from "react-intersection-observer";

function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "75px",
  });

  return (
    <div className="project-container" id="projects">
      <div className="project-header">Projects</div>
      <div className={`project ${inView ? "showproject" : "hideproject"}`} ref={ref}>
        <div className="project-content">
        <h4 className="project-title"><a href="https://github.com/BreyKM/HBOMAX-clone" target="_blank" rel="noreferrer" aria-label="H-B-O Max clone link ">Etch-A-Sketch</a></h4>
          <div className="project-details-container">
          <div className="project-description">
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
              <a href="https://github.com/BreyKM/Etch-A-Sketch" target="_blank" rel="noreferrer" aria-label="Etch-A-Sketch git hub link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#aaa"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-github"
                >
                  <title>GitHub</title>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="https://breykm.github.io/Etch-A-Sketch/" target="_blank" rel="noreferrer" aria-label="Etch-A-Sketch Site link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#aaa"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-external-link"
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

        <div className="project-img">
          <a
            href="https://breykm.github.io/Etch-A-Sketch/"
            target="_blank" rel="noreferrer"
            className="live-site"
            aria-label="Etch-A-Sketch site link image"
          >
            <img src={EAS} alt="" />
          </a>
        </div>
      </div>
      <div className={`project project-flipped ${inView ? "showproject2" : "hideproject2"}`} ref={ref}>
        <div className="project-content project-content-flipped">
          <h4 className="project-title"><a href="https://github.com/BreyKM/HBOMAX-clone" target="_blank" rel="noreferrer" aria-label="H-B-O Max clone link ">HBO MAX clone</a></h4>
          <div className="project-details-container-flipped">
          <div className="project-description">
            <p>
              This etch-a-sketch website is a fun and interactive digital
              version of the classic toy. Built with JavaScript, it allows users
              to create simple sketches by moving a cursor on a virtual canvas.
            </p>
            </div>
            <div className="project-tools project-tools2">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            </div>
            <div className="project-links-svg project-links-svg2">
            <ul className="project-links-right">
              <a href="https://github.com/BreyKM/HBOMAX-clone" target="_blank" rel="noreferrer" aria-label="H-B-0 max git hub link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#aaa"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-github"
                >
                  <title>GitHub</title>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="https://breykm.github.io/HBOMAX-clone/" target="_blank" rel="noreferrer" aria-label="H-B-0 max live site link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#aaa"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-external-link"
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

        <div className="project-img project-img2">
          <a
            href="https://breykm.github.io/HBOMAX-clone/"
            target="_blank" rel="noreferrer"
            className="live-site"
            aria-label="H-B-0 max live site link image"
          >
            <img src={HBO} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
