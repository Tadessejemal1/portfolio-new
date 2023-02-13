import React, { useRef, useState } from 'react';
import "./Contact.css";
import Header from "./../Header/Header.jsx"
import Footer from "./../Footer/Footer.jsx"
import contactVector from "./../../assets/contact_anime.png";
import gitHub from "./../../assets/gh.png";
import instaGram from "./../../assets/in.png";
import linkedIn from "./../../assets/li.png";
import medium from "./../../assets/me.png";
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [done, setDone] = useState(false);

  const Done = () => (
    <p>Your message has been successfully sent. I will contact soon</p>
  );
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4g2k6jy', 'template_tqj835v', form.current, 'acwXwUXIBkVFYGc5f')
      .then((result) => {
        // eslint-disable-next-line no-console
        console.log(result.text);
      }, (error) => {
        // eslint-disable-next-line no-console
        console.log(error.text);
      });
    e.target.reset();
    setDone(true);
  };
  return (
    <div className='section-container'>
      <Header
        heading="Get in touch."
        subHeading="Interested to collaborate? Feel free to drop me an email.">
      </Header>
      <div className='contact-form-container'>
        <form ref={form} className='contact-form' onSubmit={sendEmail} id='contact-form'>
          <input type="name" className='input-box email-input'
            placeholder='YourName' name='name' required/>
          <input type="email" className='input-box email-input'
            placeholder='Your Email Id' name='email' required/>
          <textarea type="text" placeholder='Your Message' name='message'
            className='input-box body-input' required></textarea>
          <button type="submit" className="contact-btn"
          disabled={done.submitting}>
            Send Email
          </button>
          {done ? <Done /> : null}
        </form>
      </div>
      <div className='social-icons-container'>
        <a href="https://github.com/Tadessejemal1"
          className='social-icon'
          target="_blank" rel="noreferrer">
          <img src={gitHub} alt='github' loading="lazy"/>
        </a>
        <a href="https://linkedin.com/in/tadesse-jemal"
          className='social-icon'
          target="_blank" rel="noreferrer">
          <img src={linkedIn} alt='linkedin' loading="lazy"/>
        </a>
        <a href="https://medium.com/@tadessejemal63"
          className='social-icon'
          target="_blank" rel="noreferrer">
          <img src={medium} alt='medium' loading="lazy"/>
        </a>
        <a href="https://www.instagram.com/tadessejemal32/"
          className='social-icon'
          target="_blank" rel="noreferrer">
          <img src={instaGram} alt='instagram' loading="lazy"/>
        </a>
      </div>
      <Footer
        phrase="Read more "
        link="about me."
        toAddress="/about">
      </Footer>
      <div className='vector-frame'>
        <img src={contactVector}
          alt="contact"
          loading="lazy"
          className='about-vector'
        />
      </div>
    </div>
  )
}

export default Contact