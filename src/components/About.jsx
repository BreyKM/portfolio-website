import React from "react";
import "./about.css";
import Avatar from "./images/avatar.png";
import { useInView } from "react-intersection-observer";

function About() {
  const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: "-50px",
      });

  return (
    <div className="about-main-container" id="about">
      <p className={`about-heading text-color ${inView ? "showabout" : "hideabout"}`} ref={ref}>About me</p>
      <div className={`about-container ${inView ? "showabout" : "hideabout"}`} ref={ref}>
        <p className="info text-color">
          I am a computer science student with a passion for problem-solving and
          learning about the latest technologies. I have experience in
          programming languages such as JavaScript, Python, and C, and have
          completed coursework in data structures, algorithms, and software
          development. In my free time, I enjoy working on personal projects and
          experimenting with new technologies. I am also a quick learner and am
          always eager to expand my knowledge and skills in the field of
          computer science.
        </p>
         <div className="avatar-container">
        <img src={Avatar} alt="" />
      </div>
      </div>
     
    </div>
  );
}

export default About;
