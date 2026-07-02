import React from "react";
import "./Experience.css";
import Header from "./../Header/Header.jsx";
import Footer from "./../Footer/Footer.jsx";
import ExperienceCard from "./ExperienceCard.jsx";
import { experienceData, educationData } from "./../../assets/experienceData";

function Experience() {
  return (
    <div className="section-container">
      <Header
        heading="Experience."
        subHeading="Professional roles and education from my resume — building full-stack and AI-powered products."
      />
      <div className="experience-cards-container">
        {experienceData.map((item, index) => (
          <ExperienceCard key={index} {...item} />
        ))}
      </div>
      <h2 className="experience-section-title">Education</h2>
      <div className="education-cards-container">
        {educationData.map(({ degree, institution, location, period, details }, index) => (
          <div className="education-card" key={index}>
            <h2 className="education-degree">{degree}</h2>
            <p className="education-institution">{institution}</p>
            <p className="education-meta">
              {location} · {period}
            </p>
            <ul className="education-details">
              {details.map((item, detailIndex) => (
                <li key={detailIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Footer phrase="Explore my " link="skills." toAddress="/skills" />
    </div>
  );
}

export default Experience;
