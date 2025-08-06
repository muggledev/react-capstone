import React from "react";
import "../../styles/pages/about.scss";
import capstoneImage from "../../assets/capstone-2.webp";

function About() {
  return (
    <div>
      <div className="about-hero-image">
        <img src={capstoneImage} alt="Stone Arch" />
      </div>
      <div className="about-hero-text">
        <h1>About Rachelle's Front End Class Experiences</h1>
        <p>Rachelle's front-end journey: real experiences, real lessons</p>
      </div>
    </div>
  );
}

export default About;
