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
        .section-title { font-size: 2.5rem; margin-bottom: 50px; }
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
          color: var(--accent-primary);
          opacity: 0.8;
          font-weight: bold;
        }
        .project-links { display: flex; gap: 20px; }
        .project-links a { color: var(--text-dim); transition: 0.3s; }
        .project-links a:hover { color: var(--accent-primary); }
      `}</style>
        </section>
    );
};

export default Projects;
