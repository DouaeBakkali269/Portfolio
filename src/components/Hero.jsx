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
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="hero-actions"
        >
          <a href={`mailto:${data.email}`} className="cyber-btn" title="Email">
            <Mail size={20} />
          </a>
          <a href={data.linkedin} target="_blank" className="cyber-btn" title="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href={data.github} target="_blank" className="cyber-btn" title="GitHub">
            <Github size={20} />
          </a>
          <a href="CV_BAKKALI_DOUAE_PFE__DEV_Netopia.pdf" download className="cyber-btn primary">
            <Download size={20} /> <span>Resume.exe</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="hero-text"
        >
          <span className="terminal-prompt">$ whoami</span>
          <h1 className="hero-name name-shimmer" data-text={data.name}>{data.name}</h1>
          <p className="hero-subtitle uppercase tracking-[0.3em] font-bold">{data.title}</p>
          <p className="hero-summary">
            Final-year Software Engineering student at <span className="text-white">ENSIAS</span>,
            specializing in <span className="text-white">full-stack development</span> and
            passionate about <span className="text-white">DevOps automation</span>.
          </p>
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
          mask-image: radial-gradient(circle at center, black 65%, transparent 100%);
          -webkit-mask-image: radial-gradient(circle at center, black 65%, transparent 100%);
        }
        .aura-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
          height: 80%;
          background: var(--accent-primary);
          filter: blur(120px);
          opacity: 0.15;
          z-index: 1;
        }
        .hero-name {
          font-size: 5rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -2px;
          margin: 10px 0;
          background: linear-gradient(90deg, #fff, var(--accent-primary), #fff);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
        @keyframes shimmer {
          to { background-position: 200% center; }
        }
        .terminal-prompt {
          color: var(--accent-primary);
          font-weight: bold;
          font-size: 1.2rem;
          display: block;
          margin-bottom: 0.5rem;
        }
        .hero-subtitle {
          font-size: 1.2rem;
          color: var(--accent-secondary);
          opacity: 0.7;
          margin-bottom: 2rem;
        }
        .hero-summary {
          max-width: 600px;
          margin: 0 auto;
          color: #999;
          font-size: 14px;
          line-height: 1.6;
          font-weight: 300;
        }
        .hero-actions {
          margin: 40px 0;
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .cyber-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          text-decoration: none;
          font-size: 12px;
          font-weight: 600;
          transition: 0.3s;
          border-radius: 0px; /* Boxy */
        }
        .cyber-btn:hover {
          background: rgba(0, 255, 65, 0.05);
          border-color: var(--accent-primary);
          transform: scale(1.05);
        }
        .cyber-btn.primary {
          background: var(--accent-primary);
          color: #000;
          border-color: var(--accent-primary);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .cyber-btn.primary:hover {
          background: #00cc33;
          box-shadow: 0 0 20px rgba(0, 255, 65, 0.2);
        }
      `}</style>
    </section>
  );
};

export default Hero;
