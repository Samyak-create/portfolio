import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section-padding container">
      <div className="contact-section observe-me">
        <h2 className="section-title" style={{ marginBottom: '1rem' }}>Get In Touch</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a href="mailto:Samyakbageshwar26@gmail.com" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1.125rem' }}>
          Say Hello
        </a>
        
        <div className="contact-links observe-me delay-200">
          <a href="https://github.com/Samyak-create" target="_blank" rel="noreferrer" className="contact-icon">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/samyak26/" target="_blank" rel="noreferrer" className="contact-icon">
            <FaLinkedin />
          </a>
          <a href="mailto:Samyakbageshwar26@gmail.com" className="contact-icon">
            <FaEnvelope />
          </a>
          <a href="tel:+918766412690" className="contact-icon">
            <FaPhoneAlt />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
