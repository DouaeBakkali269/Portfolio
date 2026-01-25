import React from 'react';
import { motion } from 'framer-motion';

const Education = ({ items }) => {
    return (
        <section id="education" className="section-padding">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="section-title"
            >
                <span className="accent-text">05.</span> Education
            </motion.h2>

            <div className="edu-timeline">
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="edu-item"
                    >
                        <div className="edu-dot"></div>
                        <div className="edu-content">
                            <span className="edu-date">{item.date}</span>
                            <h3 className="edu-school">{item.school}</h3>
                            <p className="edu-degree">{item.degree}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <style jsx>{`
        .section-padding { padding: 100px 0; }
        .edu-timeline { position: relative; padding-left: 30px; }
        .edu-timeline::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 2px;
          height: 100%;
          background: rgba(255, 255, 255, 0.05);
        }
        .edu-item { position: relative; margin-bottom: 50px; }
        .edu-dot {
          position: absolute;
          left: -34px;
          top: 6px;
          width: 10px;
          height: 10px;
          background: var(--bg-deep);
          border: 2px solid var(--accent-primary);
          border-radius: 50%;
        }
        .edu-date { font-size: 13px; color: var(--accent-primary); font-weight: bold; }
        .edu-school { font-size: 1.5rem; color: #fff; margin: 5px 0; }
        .edu-degree { color: var(--text-dim); }
      `}</style>
        </section>
    );
};

export default Education;
