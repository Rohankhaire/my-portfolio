import React from 'react';
import SectionHeader from '../components/SectionHeader';
import TimelineItem from '../components/TimelineItem';
import { motion } from 'framer-motion';


const Experience: React.FC = () => {
    const skills = {
        "Languages": ["Java", "SQL", "JavaScript", "TypeScript"],
        "Backend": ["Spring Boot", "Spring Security", "Hibernate", "REST APIs"],
        "Frontend & Mobile": ["React", "React Native", "Tailwind CSS"],
        "Databases & Cloud": ["PostgreSQL", "MySQL", "Firebase"],
        "Core Concepts": ["Data Structures", "OOP", "System Design", "Microservices"],
        "Tools": ["Git", "Docker", "Maven", "IntelliJ IDEA"]
    };

    const certifications = [
        "MongoDB for Developers - MongoDB University (June 2025)",
        "Full Stack Web Development - Edukera (Jan 2024)",
        "Python Programming Fundamentals - IIT Kharagpur (June 2023)"
    ];

    return (
        <div className="animate-fade-in space-y-16">
            {/* Experience Section */}
            <div>
                <SectionHeader title="Experience" subtitle="Professional engineering trajectory." />
                <div className="mt-8">
                    <TimelineItem
                        year="2026"
                        title="Software Development Intern"
                        organization="Equationworks"
                        description={[
                            "Built mobile app features using React Native (Expo) with modular, reusable components.",
                            "Integrated Firebase (Auth, Firestore) for real-time data handling.",
                            "Used GitHub for version control, branch management, and collaborative development."
                        ]}
                    />
                </div>
            </div>

            {/* Skills Section */}
            <div>
                <SectionHeader title="Technical Skills" subtitle="Core competencies and technologies." />

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
                >
                    {Object.entries(skills).map(([category, items]) => (
                        <motion.div
                            key={category}
                            variants={{
                                hidden: { opacity: 0, y: 30, scale: 0.95 },
                                visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } }
                            }}
                            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                            className="bg-cyber-dark/30 border border-cyber-cyan/10 p-6 relative group overflow-hidden hover:border-cyber-cyan/40 transition-colors"
                        >
                            <div className="absolute top-0 right-0 w-2 h-2 bg-cyber-cyan opacity-20 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute -inset-full bg-gradient-to-r from-transparent via-cyber-cyan/5 to-transparent group-hover:animate-shine" />

                            <h4 className="text-sm font-bold uppercase tracking-wider text-cyber-cyan mb-3 font-mono flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-cyber-cyan rounded-full animate-pulse" />
                                {category}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill) => (
                                    <motion.span
                                        key={skill}
                                        whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 255, 255, 0.15)" }}
                                        className="px-2 py-1 text-xs font-mono border border-cyber-cyan/20 text-gray-300 rounded bg-cyber-cyan/5 cursor-default relative overflow-hidden"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Certifications Section */}
            <div>
                <h3 className="text-2xl font-bold mb-6 font-tech text-cyber-cyan uppercase">Certifications</h3>
                <ul className="space-y-3">
                    {certifications.map((cert, index) => (
                        <li key={index} className="flex items-center text-gray-400 font-medium font-mono">
                            <span className="w-1.5 h-1.5 bg-cyber-cyan rounded-full mr-3 shadow-[0_0_5px_rgba(0,255,255,0.8)]"></span>
                            {cert}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Experience;
