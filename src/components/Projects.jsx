import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = ({ items }) => {
    return (
        <section id="projects" className="section-padding">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="section-title"
            >
                <span className="accent-text">02.</span> Projects
            </motion.h2>

            <div className="project-list">
                {items.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="project-card-wide glass-card"
                    >
                        <div className="project-info">
                            <div className="project-header">
                                <h3>{project.name}</h3>
                                <span className="project-date">{project.date}</span>
                            </div>
                            <p className="project-desc">{project.description}</p>

                            <div className="project-tech-stack">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="tech-pill">{t}</span>
                                ))}
                            </div>

                            <div className="project-links">
                                <a href="#"><Github size={20} /></a>
                                <a href="#"><ExternalLink size={20} /></a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <style jsx>{`
        .section-padding { padding: 100px 0; }
        @media (max-width: 768px) {
          .section-padding { padding: 60px 0; }
        }
        @media (max-width: 480px) {
          .section-padding { padding: 40px 0; }
        }
        .section-title { font-size: 2.5rem; margin-bottom: 50px; }
        @media (max-width: 768px) {
          .section-title { font-size: 1.8rem; margin-bottom: 30px; }
        }
        @media (max-width: 768px) {
          .project-card-wide { padding: 24px; }
        }
        @media (max-width: 480px) {
          .project-card-wide { padding: 16px; }
        }
        @media (max-width: 480px) {
          .section-title { font-size: 1.5rem; margin-bottom: 2
        @media (max-width: 768px) {
          .project-header h3 { font-size: 1.3rem; }
        }
        @media (max-width: 480px) {
          .project-header h3 { font-size: 1.1rem; }
        }0px; }
        }
        .accent-text { color: var(--accent-primary); }
        .project-list { display: flex; flex-direction: column; gap: 40px; }
        .project-card-wide { padding: 40px; display: flex; flex-direction: column; }
        .project-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; }
        .project-header h3 { font-size: 1.8rem; color: #fff; }
        .project-date { color: var(--text-dim); font-size: 0.9rem; }
        .project-desc { color: var(--text-dim); margin-bottom: 25px; line-height: 1.6; max-width: 800px; }
        .project-tech-stack { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 25px; }
        .tech-pill {
                    font-size: 12px;
                    font-weight: 700;
                    color: #e8ffe8;
                    padding: 6px 12px;
                    border-radius: 999px;
                    background: linear-gradient(145deg, rgba(255,255,255,0.08), rgba(0,255,65,0.08));
                    border: 1px solid rgba(0, 255, 65, 0.35);
                    box-shadow: inset 0 1px 6px rgba(255,255,255,0.08), 0 8px 18px rgba(0,255,65,0.12);
        }
        .project-links { display: flex; gap: 20px; }
        .project-links a { color: var(--text-dim); transition: 0.3s; }
        .project-links a:hover { color: var(--accent-primary); }
      `}</style>
        </section>
    );
};

export default Projects;
