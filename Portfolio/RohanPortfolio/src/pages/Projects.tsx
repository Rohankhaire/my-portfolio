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
            title: 'ATM Simulator System',
            description: 'Desktop-based Java application simulating real banking workflows. Implemented account lifecycle, transaction processing, and rigorous input validation. Focused on core logic, thread safety, and data handling.',
            techStack: ['Java', 'Swing', 'MySQL', 'JDBC'],
            githubUrl: 'https://github.com'
        },
        {
            title: 'Employee Management System',
            description: 'Full-stack backend system enabling structured CRUD operations. Designed RESTful APIs using Spring Boot and Hibernate with PostgreSQL persistence. Emphasized clean architecture, DTO pattern usage, and data consistency.',
            techStack: ['Java', 'Spring Boot', 'Hibernate', 'PostgreSQL', 'REST API'],
            githubUrl: 'https://github.com'
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
