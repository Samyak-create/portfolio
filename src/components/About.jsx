import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding container">
      <h2 className="section-title observe-me">Experience & Education</h2>
      
      <div className="glass-card observe-me delay-100" style={{ maxWidth: '800px', margin: '0 auto', marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem', color: 'var(--accent-primary)'}}>Internship Experience</h3>
        <div>
          <h4 style={{ fontSize: '1.25rem' }}>Web Development Intern</h4>
          <p style={{ color: 'var(--text-secondary)' }}>Exposys Data Labs, Bengaluru (Remote) | Dec 2024 – Jan 2025</p>
          <ul style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', marginLeft: '1.5rem', fontSize: '0.95rem' }}>
            <li>Implemented improved event handling for multipage websites — replaced multiple redundant document click listeners with a single centralized listener, boosting performance and maintainability.</li>
            <li>Produced a formal technical report covering problem analysis, proposed architecture, methodology, and full JavaScript implementation.</li>
          </ul>
        </div>
      </div>

      <div className="glass-card observe-me delay-200" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h3 style={{ marginBottom: '1rem', color: 'var(--accent-primary)'}}>Education & Certifications</h3>
        <div style={{ marginBottom: '1.5rem'}}>
          <h4 style={{ fontSize: '1.25rem' }}>PG Diploma in Advanced Computing (CDAC)</h4>
          <p style={{ color: 'var(--text-secondary)' }}>Centre for Development of Advanced Computing (C-DAC), Hyderabad | Aug 2025 – Feb 2026</p>
          <p style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem' }}>Grade: A | 70.63%</p>
        </div>
        <div style={{ marginBottom: '1.5rem'}}>
          <h4 style={{ fontSize: '1.25rem' }}>BE in Electronics and Telecommunication</h4>
          <p style={{ color: 'var(--text-secondary)' }}>Sipna College Of Engineering and Technology | 2021 – 2025</p>
          <p style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem' }}>Percentage: 70.6%</p>
        </div>
        <div style={{ marginBottom: '1.5rem'}}>
          <h4 style={{ fontSize: '1.25rem' }}>Higher Secondary (Science)</h4>
          <p style={{ color: 'var(--text-secondary)' }}>Vidya Bharti Mahavidyalaya | 2020 – 2021</p>
          <p style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem' }}>Percentage: 86.83%</p>
        </div>
        <div style={{ marginTop: '1.5rem' }}>
          <h4 style={{ fontSize: '1.25rem' }}>Secondary School Certificate (10th)</h4>
          <p style={{ color: 'var(--text-secondary)' }}>Veddhariny Madhyamik Vidyalaya, Yavatmal | 2018 – 2019</p>
          <p style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem' }}>Percentage: 89.00%</p>
        </div>
      </div>
    </section>
  );
};

export default About;
