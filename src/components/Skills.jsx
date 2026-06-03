import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiLayout, FiTerminal } from 'react-icons/fi';
import './Skills.css';

const skillCategories = [
  {
    title: 'Core Languages',
    icon: <FiTerminal className="skill-icon" />,
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Java', level: 85 },
      { name: 'C/C++', level: 75 }
    ]
  },
  {
    title: 'Web Development',
    icon: <FiLayout className="skill-icon" />,
    skills: [
      { name: 'HTML/CSS/JS', level: 95 },
      { name: 'React / Node.js', level: 80 },
      { name: 'Django / Flask', level: 85 },
      { name: 'Bootstrap / Tailwind', level: 90 }
    ]
  },
  {
    title: 'Computer Science',
    icon: <FiCode className="skill-icon" />,
    skills: [
      { name: 'Data Structures', level: 90 },
      { name: 'Algorithms', level: 85 },
      { name: 'Object-Oriented Design', level: 85 }
    ]
  },
  {
    title: 'Tools & Databases',
    icon: <FiDatabase className="skill-icon" />,
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'SQL / PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 70 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="container skills-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        Tech <br/> Stack
      </motion.h2>
      
      <div className="skills-grid">
        {skillCategories.map((category, idx) => (
          <motion.div 
            className="skill-card"
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
          >
            <div className="skill-card-header">
              <div className="icon-wrapper">
                {category.icon}
              </div>
              <h3 className="skill-category-title">{category.title}</h3>
            </div>
            
            <div className="skills-list">
              {category.skills.map((skill, sIdx) => (
                <div className="skill-item" key={sIdx}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <motion.div 
                      className="progress-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.2 + (sIdx * 0.1), ease: "circOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
