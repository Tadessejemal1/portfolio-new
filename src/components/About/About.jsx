import React from 'react'
import "./About.css";
import Header from "./../Header/Header.jsx"
import Footer from "./../Footer/Footer.jsx"
import aboutVector from "./../../assets/about_vector.png";
import aboutAnime from "./../../assets/about_anime.gif";
import Resume from '../../assets/Resume.pdf';

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
              Hello I'm a Web developer! I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don't hesitate to contact me.
            </p>
            <a href={Resume} download>
                {' '}
                <button className="btn highlighted-btn"><p>Get Resume</p></button>
            </a>
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