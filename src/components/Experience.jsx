import React from 'react';
import { motion } from 'framer-motion';

const Experience = ({ items }) => {
    return (
        <section id="experience" className="section-padding">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="section-title"
            >
                <span className="accent-text">01.</span> Professional Experience
            </motion.h2>

            <div className="experience-list">
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="experience-card glass-card"
                    >
                        <div className="card-header">
                            <div className="role-info">
                                <h3>{item.role}</h3>
                                <span className="company-name">@ {item.company}</span>
                            </div>
                            <span className="job-date">{item.date}</span>
                        </div>

                        <ul className="responsibility-list">
                            {item.responsibilities.map((resp, i) => (
                                <li key={i}>{resp}</li>
                            ))}
                        </ul>

                        <div className="tech-tags-mini">
                            {item.tech.map((t, i) => (
                                <span key={i} className="tech-tag-mini">{t}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            <style jsx>{`
        .section-padding { padding: 100px 0; }
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 50px;
          color: var(--text-main);
        }
        .accent-text { color: var(--accent-primary); margin-right: 15px; }
        .experience-list { display: flex; flex-direction: column; gap: 30px; }
        .experience-card { padding: 40px; }
        .card-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 25px; }
        .role-info h3 { font-size: 1.5rem; color: #fff; }
        .company-name { color: var(--accent-primary); font-size: 1.1rem; }
        .job-date { color: var(--text-dim); font-size: 0.9rem; }
        .responsibility-list { list-style: none; margin-bottom: 25px; }
        .responsibility-list li {
          position: relative;
          padding-left: 20px;
          margin-bottom: 12px;
          color: var(--text-dim);
          line-height: 1.6;
        }
        .responsibility-list li::before {
          content: "▹";
          position: absolute;
          left: 0;
          color: var(--accent-primary);
        }
        .tech-tags-mini { display: flex; gap: 10px; flex-wrap: wrap; }
        .tech-tag-mini {
                    font-size: 11px;
                    font-weight: 700;
                    color: #e8fbff;
                    padding: 5px 12px;
                    border-radius: 999px;
                    border: 1px solid rgba(0, 243, 255, 0.35);
                    background: linear-gradient(145deg, rgba(255,255,255,0.06), rgba(0,243,255,0.08));
                    box-shadow: inset 0 1px 6px rgba(255,255,255,0.08), 0 8px 18px rgba(0,243,255,0.12);
        }
      `}</style>
        </section>
    );
};

export default Experience;
