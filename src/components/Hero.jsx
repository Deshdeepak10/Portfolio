import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import profileImg from '../assets/ChatGPT Image Apr 13, 2026, 07_05_26 PM.png';
import './Hero.css';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="hero-section"
    >
      <div className="bg-glow hero-glow"></div>
      
      <div className="hero-split-container">
        <div className="hero-content-side">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hero-subtitle"
          >
            <span className="badge">Code Craftsman & System Builder</span>
          </motion.div>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            I am <span className="italic">Desh Deepak</span>, engineering <br/>
            scalable software systems.
          </motion.h1>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Building reliable products with clean architecture, robust code, and 
            pragmatic engineering. Focused on shipping fast, maintaining quality, 
            and optimizing real-world solutions.
          </motion.p>
          
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="/resume.pdf" download="Desh_Deepak_Resume.pdf" className="btn-outline">
              <FiDownload size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} /> Download CV
            </a>
            <a href="#contact" className="btn-outline">
              Talk Code
            </a>
          </motion.div>

          <motion.div 
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a href="https://github.com/Deshdeepak10" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub size={22} /></a>
            <a href="https://www.linkedin.com/in/desh-deepak-696338311/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin size={22} /></a>
            <a href="#contact" aria-label="Email"><FiMail size={22} /></a>
          </motion.div>
        </div>

        <motion.div 
          className="hero-image-side"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        >
          <div className="image-aura-bg"></div>
          <img src={profileImg} alt="Desh Deepak Portrait" className="split-hero-image" />
          <div className="image-overlay-vignette"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
