import React, { useEffect, useState } from 'react';
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

  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const targets = ['hero', 'experience', 'projects', 'skills'];
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: [0.25, 0.6] }
    );

    targets.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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
          <a href="#hero" className={activeSection === 'hero' ? 'active' : ''}>~/home</a>
          <a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>~/experience</a>
          <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>~/projects</a>
          <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>~/skills</a>
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
          background: rgba(10, 10, 10, 0.78);
          backdrop-filter: blur(12px);
          padding: 8px 22px;
          border-radius: 99px;
          border: 1px solid rgba(0, 255, 65, 0.28);
          box-shadow: 0 0 18px rgba(0, 255, 65, 0.28), 0 10px 30px rgba(0, 0, 0, 0.45);
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
          transition: color 0.25s ease, transform 0.25s ease;
          position: relative;
          padding: 6px 0;
        }
        .nav-container a::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -6px;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--accent-primary), transparent);
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.25s ease;
        }
        .nav-container a:hover {
          color: var(--accent-primary);
          transform: translateY(-1px);
        }
        .nav-container a:hover::after,
        .nav-container a.active::after {
          transform: scaleX(1);
        }
        .nav-container a.active {
          color: #fff;
          text-shadow: 0 0 8px rgba(0, 255, 65, 0.45);
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
