import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} FE Task
    </footer>
  );
};

export default Footer;
