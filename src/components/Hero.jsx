import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import profileImg from '../assets/Confident man in a smart suit.png';
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
            <span className="badge">Digital Craftsman & Architect</span>
          </motion.div>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            I am <span className="italic">Shiva</span>, crafting <br/>
            soulful digital experiences.
          </motion.h1>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Developing meaningful solutions through minimalist design and 
            elegant code. Focusing on the intersection of craft, code, and 
            human-centered design.
          </motion.p>
          
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <a href="#projects" className="btn-primary">
              Explore Works
            </a>
            <a href="#contact" className="btn-outline">
              Say Hello
            </a>
          </motion.div>

          <motion.div 
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a href="https://github.com/Shivasingh8860" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub size={22} /></a>
            <a href="https://www.linkedin.com/in/shiva-singh-47590b371?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin size={22} /></a>
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
          <img src={profileImg} alt="Shiva Portrait" className="split-hero-image" />
          <div className="image-overlay-vignette"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
