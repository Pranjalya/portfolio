import React from 'react';
import Social from './Social';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div>© 2025 Pranjalya Tiwari</div>
      <div>
        Cover Image : Hubble Ultra Deep Field, courtesy of Hubble Telescope
      </div>
      <Social />
    </footer>
  );
};

export default Footer;