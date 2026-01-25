import React from 'react';
import { motion } from 'framer-motion';
import { FaAws } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { SiHuggingface, SiLangchain } from "react-icons/si";

const iconMap = {
    // Languages
    "Java": "devicon-java-plain colored",
    "Python": "devicon-python-plain colored",
    "JavaScript": "devicon-javascript-plain colored",

    // Frameworks
    "Spring Boot": "devicon-spring-original colored",
    "React": "devicon-react-original colored",
    "Next.js": "devicon-nextjs-plain",
    "FastAPI": "devicon-fastapi-plain colored",

    // DevOps & Tools
    "Docker": "devicon-docker-plain colored",
    "Kubernetes": "devicon-kubernetes-plain colored",
    "GitLab CI/CD": "devicon-gitlab-plain colored",
    "Terraform": "devicon-terraform-plain colored",
    "Ansible": "devicon-ansible-plain colored",
    "AWS": { icon: FaAws, class: "FaAws" },

    // Databases
    "Oracle": "devicon-oracle-original colored",
    "MySQL": "devicon-mysql-plain colored",
    "PostgreSQL": "devicon-postgresql-plain colored",

    // AI & LLM Tooling
    "LangChain": { icon: SiLangchain, class: "SiLangchain" },
    "ChromaDB": { icon: FaDatabase, class: "FaDatabase" },
    "Hugging Face": { icon: SiHuggingface, class: "SiHuggingface" }
};

const Skills = ({ skills, certifications }) => {
    const getIcon = (skill) => {
        const entry = iconMap[skill];
        if (!entry) return <i className="devicon-github-original skill-icon-font"></i>;

        if (typeof entry === 'string') {
            if (entry.startsWith('http')) {
                return <img src={entry} alt={skill} className="skill-icon-img" />;
            }
            return <i className={`${entry} skill-icon-font`}></i>;
        }

        // Handle React Component from react-icons
        const { icon: Icon, class: className } = entry;
        return <Icon className={`skill-icon-react ${className}`} />;
    };

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
                            <h4 className="category-title">{category.replace('_', ' ')}</h4>
                            <div className="skill-tags">
                                {list.map((skill, i) => (
                                    <div key={i} className="skill-tag-with-icon">
                                        <div className="icon-wrapper">
                                            {getIcon(skill)}
                                        </div>
                                        <span className="skill-name">{skill}</span>
                                    </div>
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
        .skill-group { 
          padding: 25px; 
          border-radius: 0px; 
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .skill-group:hover {
          border-color: var(--accent-primary);
        }
        .category-title { 
          text-transform: uppercase; 
          font-size: 13px; 
          color: var(--accent-primary); 
          margin-bottom: 20px; 
          letter-spacing: 2px;
          font-weight: 800;
        }
        .skill-tags { display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 10px; }
        .skill-tag-with-icon {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: 0.3s;
        }
        .skill-tag-with-icon:hover {
          background: rgba(0, 255, 65, 0.05);
          border-color: var(--accent-primary);
        }
        .icon-wrapper { 
            width: 24px; 
            height: 24px; 
            display: flex; 
            align-items: center; 
            justify-content: center;
        }
        .skill-icon-font { font-size: 20px; }
        .skill-icon-img { width: 100%; height: 100%; object-fit: contain; filter: grayscale(1) brightness(2); }
        .skill-tag-with-icon:hover .skill-icon-img { filter: grayscale(0) brightness(1); }
        
        /* React Icons Styling */
        :global(.skill-icon-react) { 
            font-size: 22px; 
            color: #777; 
            transition: 0.3s; 
        }
        .skill-tag-with-icon:hover :global(.skill-icon-react) { 
            color: var(--accent-primary); 
        }
        
        /* Brand Specific Colors on Hover (Optional/High-End) */
        .skill-tag-with-icon:hover :global(.FaAws) { color: #FF9900; }
        .skill-tag-with-icon:hover :global(.SiHuggingface) { color: #FFD21E; }
        .skill-tag-with-icon:hover :global(.SiLangchain) { color: #00A67E; }
        
        .skill-name { font-size: 13px; color: #fff; }

        .cert-item { 
          display: flex; gap: 15px; align-items: center; margin-bottom: 20px; 
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 15px;
          border-radius: 0px; /* Boxy */
        }
        .cert-dot { width: 6px; height: 6px; background: var(--accent-secondary); border-radius: 0%; /* Boxy */ }
        .cert-info { display: flex; flex-direction: column; }
        .cert-name { font-size: 14px; color: #fff; }
        .cert-date { font-size: 12px; color: var(--text-dim); }

        @media (max-width: 768px) {
            .skills-layout { grid-template-columns: 1fr; }
            .skills-grid-main { grid-template-columns: 1fr; }
        }
      `}</style>
        </section>
    );
};

export default Skills;
