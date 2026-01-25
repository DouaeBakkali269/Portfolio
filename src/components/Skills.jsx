import React from 'react';
import { motion } from 'framer-motion';

const Skills = ({ skills, certifications }) => {
    return (
        <section id="skills" className="section-padding">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="section-title"
            >
                <span className="accent-text">03.</span> Technical Toolkit
            </motion.h2>

            <div className="skills-layout">
                <div className="skills-grid-main">
                    {Object.entries(skills).map(([category, list], index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="skill-group glass-card"
                        >
                            <h4 className="category-title">{category}</h4>
                            <div className="skill-tags">
                                {list.map((skill, i) => (
                                    <span key={i} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="certs-list">
                    <h4 className="category-title">Certifications</h4>
                    {certifications.map((cert, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="cert-item"
                        >
                            <span className="cert-dot"></span>
                            <div className="cert-info">
                                <span className="cert-name">{cert.name}</span>
                                <span className="cert-date">{cert.date}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .section-padding { padding: 100px 0; }
        .skills-layout { display: grid; grid-template-columns: 2fr 1fr; gap: 40px; }
        .skills-grid-main { display: grid; grid-template-columns: 1fr 1fr; gap: 25px; }
        .skill-group { padding: 25px; }
        .category-title { 
          text-transform: uppercase; 
          font-size: 13px; 
          color: var(--accent-primary); 
          margin-bottom: 20px; 
          letter-spacing: 2px;
        }
        .skill-tags { display: flex; gap: 10px; flex-wrap: wrap; }
        .skill-tag {
          padding: 6px 14px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          font-size: 13px;
          color: #fff;
        }
        .cert-item { display: flex; gap: 15px; align-items: center; margin-bottom: 20px; }
        .cert-dot { width: 6px; height: 6px; background: var(--accent-secondary); border-radius: 50%; }
        .cert-info { display: flex; flex-direction: column; }
        .cert-name { font-size: 14px; color: #fff; }
        .cert-date { font-size: 12px; color: var(--text-dim); }
      `}</style>
        </section>
    );
};

export default Skills;
