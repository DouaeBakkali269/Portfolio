import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Download } from 'lucide-react';

const Hero = ({ data }) => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="profile-outer"
                >
                    <div className="profile-image-container">
                        <img src="/profile.png" alt={data.name} className="hero-profile-img" />
                        <div className="aura-glow"></div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="hero-text"
                >
                    <span className="terminal-prompt">$ whoami</span>
                    <h1 className="hero-name">{data.name}</h1>
                    <p className="hero-subtitle">{data.title}</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="hero-actions"
                >
                    <a href={`mailto:${data.email}`} className="cyber-btn">
                        <Mail size={18} /> <span>Email</span>
                    </a>
                    <a href={data.linkedin} target="_blank" className="cyber-btn">
                        <Linkedin size={18} /> <span>LinkedIn</span>
                    </a>
                    <a href={data.github} target="_blank" className="cyber-btn">
                        <Github size={18} /> <span>GitHub</span>
                    </a>
                    <a href="CV_BAKKALI_DOUAE_PFE__DEV_Netopia.pdf" download className="cyber-btn primary">
                        <Download size={18} /> <span>Resume.exe</span>
                    </a>
                </motion.div>
            </div>

            <style jsx>{`
        .hero-section {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .profile-image-container {
          position: relative;
          width: 320px;
          height: 320px;
          margin: 0 auto 40px;
        }
        .hero-profile-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          position: relative;
          z-index: 2;
          mask-image: linear-gradient(to bottom, black 85%, transparent 100%);
        }
        .aura-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
          height: 80%;
          background: var(--accent-primary);
          filter: blur(100px);
          opacity: 0.2;
          z-index: 1;
        }
        .hero-name {
          font-size: 5rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -2px;
          margin: 10px 0;
          background: linear-gradient(to right, #fff, #888);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .terminal-prompt {
          color: var(--accent-primary);
          font-weight: bold;
          font-size: 1.2rem;
        }
        .hero-subtitle {
          font-size: 1.5rem;
          color: var(--accent-secondary);
          opacity: 0.8;
          font-weight: 300;
        }
        .hero-actions {
          margin-top: 40px;
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .cyber-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 25px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          transition: 0.3s;
        }
        .cyber-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--accent-primary);
          transform: translateY(-3px);
        }
        .cyber-btn.primary {
          background: var(--accent-primary);
          color: #000;
          border-color: var(--accent-primary);
        }
        .cyber-btn.primary:hover {
          background: #00cc33;
        }
      `}</style>
        </section>
    );
};

export default Hero;
