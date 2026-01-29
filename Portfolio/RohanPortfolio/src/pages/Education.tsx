import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
    const education = [
        {
            degree: 'B.E. Computer Science',
            school: 'Savitribai Phule Pune University',
            year: '2022 - 2026',
            details: 'CGPA: 8.3'
        },
        {
            degree: 'HSC (12th Grade)',
            school: 'Maharashtra State Board - C T Bora College Shirur',
            year: '2020 - 2021',
            details: 'Pune, Maharashtra'
        },
        {
            degree: 'SSC (10th Grade)',
            school: 'Maharashtra State Board - New English School Dhamari',
            year: '2019 - 2020',
            details: 'Pune, Maharashtra'
        }
    ];

    return (
        <div className="animate-fade-in">
            <SectionHeader title="Education" subtitle="Academic background." />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    visible: { transition: { staggerChildren: 0.15 } }
                }}
                className="space-y-8"
            >
                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                        }}
                        whileHover={{
                            scale: 1.02,
                            backgroundColor: "rgba(255, 255, 255, 0.05)",
                            borderColor: "rgba(0, 255, 255, 0.3)"
                        }}
                        className="relative flex flex-col md:flex-row md:items-baseline gap-2 md:gap-12 border-b border-cyber-cyan/10 pb-8 last:border-0 last:pb-0 p-6 transition-all duration-300 group overflow-hidden border border-transparent rounded-lg"
                    >
                        {/* Shine Effect */}
                        <div className="absolute -inset-full bg-gradient-to-r from-transparent via-cyber-cyan/5 to-transparent group-hover:animate-shine z-0" />

                        <div className="w-full md:w-1/4 shrink-0 relative z-10">
                            <span className="inline-block font-mono text-sm text-cyber-cyan border border-cyber-cyan/30 px-3 py-1 bg-cyber-cyan/5 group-hover:bg-cyber-cyan/20 transition-colors shadow-[0_0_10px_rgba(0,255,255,0.1)]">
                                {edu.year}
                            </span>
                        </div>
                        <div className="w-full md:w-3/4 relative z-10">
                            <h3 className="text-xl font-bold mb-2 text-white font-tech tracking-wide group-hover:text-cyber-cyan transition-colors">
                                {edu.degree}
                            </h3>
                            <div className="text-cyber-teal font-medium mb-2 flex items-center gap-2">
                                <span className="w-5 h-px bg-cyber-teal/50"></span>
                                {edu.school}
                            </div>
                            <p className="text-gray-400 text-sm font-mono flex items-center gap-2 pl-7">
                                <span className="w-1.5 h-1.5 bg-cyber-cyan rounded-full animate-pulse shadow-[0_0_5px_rgba(0,255,255,0.8)]" />
                                {edu.details}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Education;
