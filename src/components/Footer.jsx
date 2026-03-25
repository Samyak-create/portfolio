import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>Designed and Built with React & Vite.</p>
      <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>&copy; {new Date().getFullYear()} Samyak Bageshwar.</p>
    </footer>
  );
};

export default Footer;
