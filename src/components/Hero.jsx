import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero container">
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-greeting animate-fade-in">Hello, world! I am</span>
          <h1 className="hero-title animate-fade-in delay-100">Samyak Bageshwar</h1>
          <h2 className="hero-subtitle animate-fade-in delay-200">Full Stack Developer</h2>
          <p className="hero-desc animate-fade-in delay-300">
            Full Stack Developer with hands-on experience in Java (Spring Boot) and .NET (ASP.NET Core), building scalable RESTful APIs and microservices-based applications.
          </p>
          <div className="hero-buttons animate-fade-in delay-300">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
        
        <div className="hero-photo-wrapper animate-fade-in delay-200">
          <img src="https://avatars.githubusercontent.com/u/184143068?v=4" alt="Samyak Bageshwar" className="hero-photo" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
