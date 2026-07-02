import React from 'react'
import "./About.css";
import Header from "./../Header/Header.jsx"
import Footer from "./../Footer/Footer.jsx"
import aboutVector from "./../../assets/about_vector.png";
import aboutAnime from "./../../assets/about_anime.gif";

function About() {
  const resumeUrl = `${process.env.PUBLIC_URL}/Resume_New.pdf`;

  return (
    <div className='section-container'>
      <Header 
        heading="About Me"
        subHeading="AI Engineer & Full-Stack Developer · Agentic AI & LLM Integration">
      </Header>
      <div className='about-main'>
        <div className='about-main-left'>
            <h3 className='about-sub-heading'>Tadesse Jemal</h3>
            <p className='about-sub-heading-details'>
            Results-driven AI Engineer and Full-Stack Developer with 5+ years of experience designing, developing, and deploying high-performance web applications and AI-powered systems. Expert in JavaScript, Python, and Ruby, with advanced proficiency in React, Redux, Rails, Node.js, Next.js, and LLM-powered AI systems.
            </p>
            <p className='about-sub-heading-details'>
            I build agentic AI workflows and integrate AI automation, prompt engineering, RAG pipelines, and intelligent data-processing to improve product efficiency and user experience. Experienced with PostgreSQL, Supabase, MongoDB, FastAPI, OpenAI and Gemini APIs, and scalable deployments on Render, Netlify, Vercel, Railway, Heroku, and AWS. I thrive in collaborative Agile teams and remote environments.
            </p>
            <a
              rel="noopener noreferrer"
              href={resumeUrl}
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
        phrase="View my "
        link="experience."
        toAddress="/experience">
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
