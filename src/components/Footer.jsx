import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="logo">
              Desh Deepak
            </a>
            <p className="footer-desc">
              Pragmatic software engineer building <br/> production-ready systems.
            </p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Stack</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h4>Presence</h4>
            <div className="social-icons">
              <a href="https://github.com/Deshdeepak10" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub size={20} /></a>
              <a href="https://www.linkedin.com/in/desh-deepak-696338311/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Desh Deepak. All rights reserved.</p>
          <p className="made-with">
            Built with <FiHeart size={14} className="heart-icon" /> by Desh Deepak
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
