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
        subHeading="Here are a few cool things I've worked on, do check them out!">
      </Header>
      <div className='project-cards-container'>
      {
        projectsData.map(({
          projectName,
          projectDescription,
          imageUrl,
          projectUrl,
          skills,
          sourceUrl
        }, index) => {
          return (<ProjectCard key={index}
          projectName={projectName}
          projectDescription={projectDescription}
          imageUrl={imageUrl}
          projectUrl={projectUrl}
          skills={skills}
          sourceUrl={sourceUrl}
        />);
        })
      }
      </div>
      <Footer 
        phrase="Check out "
        link="my skills!"
        toAddress="/skills">
      </Footer>
    </div>
  )
}

export default Projects