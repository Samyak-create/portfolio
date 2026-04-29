import React from 'react';
import { FaCode } from 'react-icons/fa';

const Skills = () => {
  const skills = {
    languages: ['Java', 'C++', 'C#', 'JavaScript'],
    frontend: ['HTML5', 'CSS3', 'React.js', 'JavaScript'],
    backend: ['Spring Boot', 'Spring', 'JPA', 'Hibernate', 'Spring Security', 'ASP.NET Core', 'RESTful API', 'Microservices'],
    database: ['MySQL', 'MongoDB'],
    tools: ['Git', 'GitHub', 'Docker', 'Swagger', 'Postman']
  };

  return (
    <section id="skills" className="section-padding container">
      <h2 className="section-title observe-me">Technical Arsenal</h2>
      <div className="skills-grid">
        
        <div className="skill-category glass-card observe-me delay-100">
          <h3><FaCode className="skill-icons" /> Languages</h3>
          <div className="skill-list">
            {skills.languages.map(skill => <span key={skill} className="skill-tag">{skill}</span>)}
          </div>
        </div>

        <div className="skill-category glass-card observe-me delay-200">
          <h3><FaCode className="skill-icons" /> Backend</h3>
          <div className="skill-list">
            {skills.backend.map(skill => <span key={skill} className="skill-tag">{skill}</span>)}
          </div>
        </div>

        <div className="skill-category glass-card observe-me delay-300">
          <h3><FaCode className="skill-icons" /> Frontend</h3>
          <div className="skill-list">
            {skills.frontend.map(skill => <span key={skill} className="skill-tag">{skill}</span>)}
          </div>
        </div>

        <div className="skill-category glass-card observe-me delay-400">
          <h3><FaCode className="skill-icons" /> Database & Tools</h3>
          <div className="skill-list">
            {[...skills.database, ...skills.tools].map(skill => <span key={skill} className="skill-tag">{skill}</span>)}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Skills;
