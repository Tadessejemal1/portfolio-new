import React from 'react'
import "./About.css";
import Header from "./../Header/Header.jsx"
import Footer from "./../Footer/Footer.jsx"
import aboutVector from "./../../assets/about_vector.png";
import aboutAnime from "./../../assets/about_anime.gif";

function About() {
  return (
    <div className='section-container'>
      <Header 
        heading="About Me"
        subHeading="Full Stack Web Developer">
      </Header>
      <div className='about-main'>
        <div className='about-main-left'>
            <h3 className='about-sub-heading'>Web Developer</h3>
            <p className='about-sub-heading-details'>
            Experienced full stack developer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versed in technology and writing code to create reliable and user-friendly systems. Ability to learn new things quickly, collaboration, communication, pair programming, and remote work.
            </p>
            <a
              rel="noopener noreferrer"
              href="https://docs.google.com/document/d/1K58XXOFPM1CpbkpztFzX6brdLp76gLAyyDr_npjsZMw/edit"
              target="_blank"
              className="btn highlighted-btn"
              ><p>Get My Resume</p></a
            >
        </div>
        <div className='about-main-right'>
            <img 
                src={aboutAnime}
                alt="about-anime"
                className="about-anime"
                loading="lazy"
            />
        </div>
      </div>
      <Footer 
        phrase="Check out my "
        link="projects!"
        toAddress="/projects">
      </Footer>
      <div className='vector-frame'>
        <img src={aboutVector}
          alt="about"
          className='about-vector'
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default About