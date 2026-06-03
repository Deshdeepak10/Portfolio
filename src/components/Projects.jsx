import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    title: 'Digital Bus Intelligence',
    description: 'Real-time transit telemetry, predictive ETA logic, and live routing built with WebSockets and mapping APIs.',
    tags: ['React', 'Node.js', 'WebSockets', 'Maps API'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Event Management 2.0',
    description: 'College event backend with QR onboarding, automated registrations, and reliable attendee workflows.',
    tags: ['Python', 'Django', 'PostgreSQL', 'SMTP'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Cinematic Cinema Engine',
    description: 'ML-powered recommendation pipeline that scores films and serves personalized watchlists at scale.',
    tags: ['Python', 'Flask', 'Pandas', 'Scikit-learn'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Visionary UI Kit',
    description: 'A production-ready component library with accessible patterns, modular styling, and developer-first documentation.',
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
            Code <br/> Projects
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
                  Open Demo <FiArrowRight size={20} />
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
