export const resumeData = {
    name: "Douae Bakkali",
    title: "Software Engineer",
    email: "bakkalidouae75@gmail.com",
    linkedin: "https://www.linkedin.com/in/douae-bakkali/",
    github: "https://github.com/DouaeBakkali269/",
    education: [
        {
            school: "ENSIAS, Rabat",
            degree: "Engineering Student (Final-Year), Software Engineering",
            date: "2023-2026"
        },
        {
            school: "Lycée Moulay Hassan, Tangier",
            degree: "Preparatory Classes (MP)",
            date: "2021-2023"
        }
    ],
    experience: [
        {
            company: "Zen Networks Solutions Inc.",
            role: "DevOps Intern",
            date: "Jun – Aug 2025",
            responsibilities: [
                "Implemented a complete DevOps workflow for a web application",
                "Containerized a full web app (SpringBoot Backend + React/Next.js Frontend)",
                "Built robust CI/CD pipelines on GitLab for build, test, and deployment",
                "Provisioned AWS architectures using Terraform"
            ],
            tech: ["Docker", "GitLab CI/CD", "Terraform", "AWS"]
        },
        {
            company: "Regional Administration of Tanger-Tétouan-Al Hoceima",
            role: "Web Development Intern",
            date: "Jul 2024",
            responsibilities: [
                "Developed an inventory management system for equipment requests",
                "Java Spring Boot Backend + ReactJS Frontend",
                "Designed MySQL schema and implemented secure REST APIs with Spring Security"
            ],
            tech: ["Java", "Spring Boot", "React", "MySQL"]
        }
    ],
    projects: [
        {
            name: "SmartTransit",
            description: "Microservices-based urban transport management application.",
            features: [
                "Microservices architecture with Spring Cloud & Kafka",
                "Inter-service communication via REST and asynchronous events",
                "Independent services for user management and ticketing"
            ],
            tech: ["Spring Cloud", "Kafka", "PostgreSQL", "Next.js", "Docker"],
            date: "Ongoing"
        },
        {
            name: "AstroLearn",
            description: "Collaborative space exploration platform.",
            features: [
                "Automated testing with JUnit and Mockito",
                "Moderation powered by LLMs",
                "Provisioned via Terraform on AWS"
            ],
            tech: ["Spring Boot", "PostgreSQL", "Next.js", "Terraform", "AWS"],
            date: "Mar 2025"
        },
        {
            name: "Internship Management System",
            description: "Web platform to streamline internship processes.",
            features: [
                "Centralized management dashboard",
                "REST APIs and database integration with JPA",
                "Secured with Spring Security"
            ],
            tech: ["Java", "Spring Boot", "ReactJS", "Oracle DB", "Git"],
            date: "2024 - 2025"
        }
    ],
    volunteering: [
        {
            name: "IEEE ENSIAS Events Lead",
            description: "Organized major tech events and conferences, moderated panel discussions.",
            skills: ["Project Management", "Public Speaking"]
        }
    ],
    skills: {
        languages: ["Java", "Python", "JavaScript"],
        frameworks: ["Spring Boot", "React", "Next.js"],
        tools: ["Docker", "Kubernetes", "GitLab CI/CD", "Terraform", "Ansible"],
        databases: ["Oracle", "MySQL", "PostgreSQL"]
    },
    certifications: [
        { name: "IBM AI Analyst", date: "2025" },
        { name: "Spring Specialization", date: "2025" }
    ]
};
