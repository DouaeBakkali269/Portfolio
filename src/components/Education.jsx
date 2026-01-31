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
                                        <motion.article
                                                key={index}
                                                initial={{ opacity: 0, y: 18 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true, amount: 0.4 }}
                                                transition={{ duration: 0.45, delay: index * 0.05 }}
                                                className="edu-entry"
                                        >
                                                <div className="edu-meta">
                                                        <span className="edu-dot" aria-hidden="true" />
                                                        <span className="edu-date">{item.date}</span>
                                                        {item.location && (
                                                                <span className="edu-location">{item.location}</span>
                                                        )}
                                                </div>

                                                <div className="edu-card glass-card">
                                                        <div className="edu-header">
                                                                <h3 className="edu-degree">{item.degree}</h3>
                                                                {item.track && (
                                                                        <span className="edu-track">{item.track}</span>
                                                                )}
                                                        </div>
                                                        <p className="edu-school">{item.school}</p>
                                                        <p className="edu-description">{item.description}</p>
                                                        {item.highlights?.length ? (
                                                                <ul className="edu-highlights">
                                                                        {item.highlights.map((highlight, idx) => (
                                                                                <li key={idx}>{highlight}</li>
                                                                        ))}
                                                                </ul>
                                                        ) : null}
                                                </div>
                                        </motion.article>
                                ))}
                        </div>

            <style jsx>{`
                .section-padding { padding: 100px 0; }
                .edu-timeline {
                    display: flex;
                    flex-direction: column;
                    gap: 26px;
                }
                .edu-entry {
                    display: grid;
                    grid-template-columns: minmax(140px, 200px) 1fr;
                    gap: 26px;
                    align-items: stretch;
                }
                .edu-meta {
                    position: relative;
                    padding-left: 26px;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    color: var(--text-dim);
                }
                .edu-meta::before {
                    content: "";
                    position: absolute;
                    left: 10px;
                    top: 0;
                    bottom: 0;
                    width: 2px;
                    background: linear-gradient(180deg, rgba(0, 255, 65, 0.9), rgba(0, 255, 65, 0.1));
                }
                .edu-dot {
                    position: absolute;
                    left: 4px;
                    top: 4px;
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background: var(--accent-primary);
                    box-shadow: 0 0 12px rgba(0, 255, 65, 0.7);
                }
                .edu-date {
                    font-size: 12px;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    color: var(--accent-primary);
                    font-weight: 700;
                }
                .edu-location {
                    font-size: 12px;
                    color: var(--text-dim);
                }
                .edu-card {
                    padding: 24px 28px;
                    position: relative;
                    overflow: hidden;
                }
                .edu-card::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(circle at 15% 0%, rgba(0, 255, 65, 0.12), transparent 60%);
                    opacity: 0.7;
                    pointer-events: none;
                }
                .edu-header {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: baseline;
                    gap: 12px;
                    margin-bottom: 6px;
                }
                .edu-degree {
                    font-size: 1.35rem;
                    color: #fff;
                }
                .edu-track {
                    font-size: 12px;
                    color: var(--text-dim);
                    border: 1px solid rgba(0, 255, 65, 0.25);
                    padding: 4px 8px;
                    border-radius: 999px;
                }
                .edu-school {
                    font-size: 0.95rem;
                    color: var(--accent-secondary);
                    margin-bottom: 10px;
                }
                .edu-description {
                    font-size: 0.95rem;
                    line-height: 1.7;
                    color: var(--text-dim);
                }
                .edu-highlights {
                    margin-top: 12px;
                    padding-left: 18px;
                    display: grid;
                    gap: 6px;
                    color: var(--text-dim);
                }
                .edu-highlights li::marker {
                    color: var(--accent-primary);
                }
                @media (max-width: 900px) {
                    .edu-entry {
                        grid-template-columns: 1fr;
                        gap: 16px;
                    }
                    .edu-meta {
                        padding-left: 28px;
                    }
                    .edu-meta::before {
                        left: 12px;
                    }
                    .edu-dot {
                        left: 6px;
                    }
                }
                @media (max-width: 600px) {
                    .edu-card {
                        padding: 20px;
                    }
                    .edu-degree {
                        font-size: 1.15rem;
                    }
                }
      `}</style>
        </section>
    );
};

export default Education;
