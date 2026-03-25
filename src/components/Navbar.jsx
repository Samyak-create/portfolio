import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar glass">
      <div className="container">
        <div className="logo" style={{ fontFamily: 'Outfit', fontWeight: 'bold', fontSize: '1.5rem', color: 'var(--text-primary)'}}>
          SB<span style={{ color: 'var(--accent-primary)' }}>.</span>
        </div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
