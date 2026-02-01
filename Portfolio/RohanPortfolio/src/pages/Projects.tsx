import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
    const projects = [
        {
            title: 'Personal Portfolio',
            description: 'A high-performance, responsive portfolio website built with modern web technologies. Features a futuristic cyberpunk aesthetic, fluid Framer Motion animations, and a fully mobile-optimized interface.',
            techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
            githubUrl: 'https://github.com/Rohankhaire/my-portfolio'
        },
        {
            title: 'StudentHub',
            description: 'Architected a RESTful backend API using Spring Boot and Hibernate ORM to manage complex course and user data. Integrated Spring Security with BCrypt hashing and JWT to protect administrative actions from unauthorized access. Built a high-interactivity frontend with Framer Motion and React Context API for seamless state management and role-based UI rendering.',
            techStack: ['Java', 'JavaScript', 'Spring Boot', 'Hibernate', 'React', 'PostgreSQL'],
            githubUrl: 'https://github.com/Rohankhaire/StudentHub'
        },
        {
            title: 'Employee Management System',
            description: 'Full-stack enterprise application with RESTful backend API using Spring Boot and Hibernate ORM. Implemented Spring Security with BCrypt hashing and JWT authentication for secure access control. Developed interactive React frontend with seamless state management and role-based UI rendering for efficient employee data management.',
            techStack: ['Java', 'JavaScript', 'Spring Boot', 'Hibernate', 'React', 'PostgreSQL'],
            githubUrl: 'https://github.com'
        },
        {
            title: 'BankSimulator',
            description: 'Developed a Bank Simulator System (Desktop-based Application) using Core Java (Swing/AWT) and PostgreSQL for backend data management. Implemented key banking operations such as account creation, deposit, withdrawal, mini statement, and PIN change. Designed an intuitive GUI interface to simulate real ATM user interactions and transaction flows. Ensured data validation, error handling, and secure database connectivity for reliable performance.',
            techStack: ['Core Java', 'Swing', 'AWT', 'PostgreSQL', 'JDBC'],
            githubUrl: 'https://github.com/Rohankhaire/BankSimulator'
        },
        {
            title: 'Share My Ride',
            description: 'Collaborative team project focused on secure carpooling. Engineered the authentication and user management modules using Firebase. Implemented role-based access control and integrated real-time data handling.',
            techStack: ['Core Java', 'JavaFX', 'Firebase', 'API Binding'],
            githubUrl: 'https://github.com'
        }
    ];

    return (
        <div className="animate-fade-in">
            <SectionHeader title="Projects" subtitle="Engineering experience and technical implementations." />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    visible: { transition: { staggerChildren: 0.15 } }
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                        }}
                        whileHover={{ scale: 1.02 }}
                        className="h-full"
                    >
                        <ProjectCard {...project} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Projects;
