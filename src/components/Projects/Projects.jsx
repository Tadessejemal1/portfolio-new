import React from 'react'
import "./Projects.css";
import Header from "./../Header/Header.jsx"
import {projectsData} from "./../../assets/projectsData";
import ProjectCard from "./ProjectCard.jsx";
import Footer from "./../Footer/Footer.jsx";

function Projects() {
  return (
    <div className='section-container'>
    <Header 
        heading="My Projects."
        subHeading="Highlighted personal and professional projects — from SpaceX booking apps to AI-powered enterprise platforms.">
      </Header>
      <div className='project-cards-container'>
      {
        projectsData.map((project, index) => <ProjectCard key={index} {...project} />)
      }
      </div>
      <Footer
        phrase="See my "
        link="experience."
        toAddress="/experience">
      </Footer>
    </div>
  )
}

export default Projects