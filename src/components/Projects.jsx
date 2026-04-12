import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    title: 'Digital Bus Intelligence',
    description: 'Transforming urban mobility with real-time tracking, predictive ETAs, and a sophisticated mapping interface for modern commuters.',
    tags: ['React', 'Node.js', 'WebSockets', 'Maps API'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Event Management 2.0',
    description: 'A curated platform for college ecosystems. Automating check-ins and registration with elegant QR integration and seamless waitlists.',
    tags: ['Python', 'Django', 'PostgreSQL', 'SMTP'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Cinematic Cinema Engine',
    description: 'A machine-learning recommendation system that discovers cinematic gems specifically tailored to your unique palette.',
    tags: ['Python', 'Flask', 'Pandas', 'Scikit-learn'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Visionary UI Kit',
    description: 'A collection of refined, accessible components designed for the modern web. Focused on minimalism and ease of use.',
    tags: ['React', 'CSS Modules', 'Storybook'],
    github: '#',
    demo: '#'
  }
];

const Projects = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    <section id="projects" ref={targetRef} className="projects-section">
      <div className="sticky-wrapper">
        <div className="projects-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Curated <br/> Works
          </motion.h2>
        </div>
        
        <motion.div style={{ x }} className="projects-horizontal">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-content">
                <div className="project-header">
                  <span className="project-number">0{index + 1}</span>
                  <div className="project-links">
                    <a href={project.github} aria-label="GitHub Repository"><FiGithub size={22} /></a>
                    <a href={project.demo} aria-label="Live Demo"><FiExternalLink size={22} /></a>
                  </div>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-footer">
                <a href={project.demo} className="project-btn">
                  Explore Case Study <FiArrowRight size={20} />
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
