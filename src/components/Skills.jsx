import React from 'react';
import { FaCode } from 'react-icons/fa';

const Skills = () => {
  const skills = {
    frontend: ['HTML', 'CSS', 'React.js', 'JavaScript'],
    backend: ['Java', 'Spring', 'Spring Boot', 'C#', 'Asp.Net', 'Node.js', 'Express.js'],
    database: ['MySQL', 'MongoDB'],
    tools: ['Git', 'GitHub', 'RESTful APIs', 'Microservices Architecture']
  };

  return (
    <section id="skills" className="section-padding container">
      <h2 className="section-title observe-me">Technical Arsenal</h2>
      <div className="skills-grid">
        
        <div className="skill-category glass-card observe-me delay-100">
          <h3><FaCode className="skill-icons" /> Backend</h3>
          <div className="skill-list">
            {skills.backend.map(skill => <span key={skill} className="skill-tag">{skill}</span>)}
          </div>
        </div>

        <div className="skill-category glass-card observe-me delay-200">
          <h3><FaCode className="skill-icons" /> Frontend</h3>
          <div className="skill-list">
            {skills.frontend.map(skill => <span key={skill} className="skill-tag">{skill}</span>)}
          </div>
        </div>

        <div className="skill-category glass-card observe-me delay-300">
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
