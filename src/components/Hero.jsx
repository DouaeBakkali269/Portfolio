import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Download } from 'lucide-react';
import TextType from './TextType';

const Hero = ({ data }) => {
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowSkeleton(false), 800);
    return () => clearTimeout(t);
  }, []);

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
          <a href={`mailto:${data.email}`} className="glass-icon" title="Email">
            <Mail size={20} />
          </a>
          <a href={data.linkedin} target="_blank" className="glass-icon" title="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href={data.github} target="_blank" className="glass-icon" title="GitHub">
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
          {showSkeleton && (
            <div className="skeleton-group">
              <div className="skeleton-line skeleton-title" />
              <div className="skeleton-line skeleton-subtitle" />
            </div>
          )}

          <TextType
            as="h1"
            className="hero-name"
            text={[
              'DOUAE BAKKALI',
              'Software Engineer | Full-Stack & DevOps'
            ]}
            typingSpeed={55}
            pauseDuration={1500}
            deletingSpeed={50}
            showCursor
            cursorCharacter="_"
            variableSpeed={{ min: 60, max: 120 }}
            cursorBlinkDuration={0.5}
            initialDelay={300}
          />

          <TextType
            as="div"
            className="hero-info-box"
            text={[
              'Final-year Software Engineering student specializing in full-stack development and passionate about DevOps automation. Currently seeking PFE opportunities to apply and further develop my skills.'
            ]}
            typingSpeed={35}
            pauseDuration={2000}
            deletingSpeed={30}
            loop={false}
            showCursor={false}
            initialDelay={600}
          />
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
        .skeleton-group { display: grid; gap: 10px; align-items: center; justify-items: center; margin-bottom: 10px; }
        .skeleton-line {
          position: relative;
          overflow: hidden;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
        }
        .skeleton-title { width: 70%; height: 56px; border-radius: 6px; }
        .skeleton-subtitle { width: 45%; height: 24px; border-radius: 6px; }
        .skeleton-line::before {
          content: '';
          position: absolute;
          inset: 0;
          transform: translateX(-100%);
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          animation: shimmer-load 1.2s infinite;
        }
        @keyframes shimmer-load { to { transform: translateX(100%); } }
        .terminal-prompt {
          color: var(--accent-primary);
          font-weight: bold;
          font-size: 1.2rem;
          display: block;
          margin-bottom: 0.5rem;
        }
        .hero-info-box {
          display: inline-block;
          max-width: 720px;
          margin: 20px auto 0;
          padding: 16px 20px;
          background: var(--glass);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          color: var(--text-dim);
          font-size: 14px;
          line-height: 1.5;
          text-align: center;
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

        /* Glass Icons - scoped to avoid bleed into devicon font icons */
        .glass-icon {
          width: 56px;
          height: 56px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.02));
          border: 1px solid rgba(255, 255, 255, 0.22);
          box-shadow: 0 10px 40px rgba(0, 255, 65, 0.16), inset 0 1px 8px rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(12px) saturate(140%);
          -webkit-backdrop-filter: blur(12px) saturate(140%);
          color: #fff;
          text-decoration: none;
          transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          position: relative;
          padding: 0;
          overflow: hidden;
          isolation: isolate;
        }
        .glass-icon::before {
          content: '';
          position: absolute;
          inset: 1px;
          border-radius: 14px;
          background: radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.24), transparent 40%);
          opacity: 0.6;
          pointer-events: none;
        }
        .glass-icon::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 16px;
          background: linear-gradient(145deg, rgba(0, 255, 65, 0.3), transparent 40%);
          opacity: 0;
          transition: opacity 0.28s ease;
          pointer-events: none;
        }
        .glass-icon:hover {
          transform: translateY(-4px) scale(1.02);
          border-color: rgba(0, 255, 65, 0.9);
          box-shadow: 0 16px 48px rgba(0, 255, 65, 0.28), inset 0 1px 10px rgba(255, 255, 255, 0.16);
        }
        .glass-icon:hover::after { opacity: 1; }
        .glass-icon svg {
          filter: drop-shadow(0 0 10px rgba(0, 255, 65, 0.4));
          transition: transform 0.28s ease, filter 0.28s ease;
        }
        .glass-icon:hover svg {
          filter: drop-shadow(0 0 16px rgba(0, 255, 65, 0.6));
          transform: translateY(-1px);
        }
      `}</style>
    </section>
  );
};

export default Hero;
