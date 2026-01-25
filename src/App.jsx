import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Volunteer from './components/Volunteer';
import Education from './components/Education';
import { resumeData } from './data';

import { Analytics } from "@vercel/analytics/react";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="portfolio-app">
      <Analytics />
      <div className="mesh-gradient" />

      {/* Progress Bar */}
      <motion.div
        className="progress-bar"
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'var(--accent-primary)',
          transformOrigin: '0%',
          zIndex: 1000
        }}
      />

      <nav className="nav-dock">
        <div className="nav-container">
          <a href="#hero">~/home</a>
          <a href="#experience">~/experience</a>
          <a href="#projects">~/projects</a>
          <a href="#skills">~/skills</a>
        </div>
      </nav>

      <main>
        <Hero data={resumeData} />
        <div className="section-container">
          <Experience items={resumeData.experience} />
          <Projects items={resumeData.projects} />
          <Skills skills={resumeData.skills} certifications={resumeData.certifications} />
          <Volunteer items={resumeData.volunteering} />
          <Education items={resumeData.education} />
        </div>
      </main>

      <style jsx>{`
        .nav-dock {
          position: fixed;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(10, 10, 10, 0.8);
          backdrop-filter: blur(10px);
          padding: 10px 30px;
          border-radius: 99px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 100;
        }
        .nav-container {
          display: flex;
          gap: 25px;
        }
        .nav-container a {
          color: var(--text-dim);
          text-decoration: none;
          font-size: 13px;
          transition: 0.3s;
        }
        .nav-container a:hover {
          color: var(--accent-primary);
        }
        .section-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }
      `}</style>
    </div>
  );
}

export default App;
