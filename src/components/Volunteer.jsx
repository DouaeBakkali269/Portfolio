import React from 'react';
import { motion } from 'framer-motion';

const Volunteer = ({ items }) => {
    return (
        <section id="volunteer" className="section-padding">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="section-title"
            >
                <span className="accent-text">04.</span> Community & Leadership
            </motion.h2>

            <div className="volunteer-grid">
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="volunteer-card glass-card"
                    >
                        <h3 className="vol-name">{item.name}</h3>
                        <p className="vol-desc">{item.description}</p>
                        <div className="vol-skills">
                            {item.skills.map((s, i) => (
                                <span key={i} className="vol-skill">{s}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            <style jsx>{`
        .section-padding { padding: 100px 0; }
        .volunteer-grid { display: grid; grid-template-columns: 1fr; gap: 30px; }
        .volunteer-card { padding: 30px; border-left: 3px solid var(--accent-secondary); }
        .vol-name { font-size: 1.4rem; color: #fff; margin-bottom: 10px; }
        .vol-desc { color: var(--text-dim); margin-bottom: 20px; line-height: 1.6; }
        .vol-skills { display: flex; gap: 10px; }
        .vol-skill { font-size: 11px; color: var(--accent-secondary); text-transform: uppercase; letter-spacing: 1px; }
      `}</style>
        </section>
    );
};

export default Volunteer;
