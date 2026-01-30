import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Terminal, Cpu, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';
import CyberCard from '../components/CyberCard';

const Home: React.FC = () => {
    return (
        <div className="min-h-[80vh] flex flex-col md:flex-row items-center justify-center gap-4 relative pt-32 pb-10">

            {/* Background Data Decoration */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute top-20 right-0 font-tech text-cyber-cyan/10 text-9xl select-none pointer-events-none z-0"
            >
                01
            </motion.div>

            {/* Left: Text Content */}
            <div className="w-full md:w-1/2 text-left order-1 z-10 pl-4 md:pl-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-2 flex items-center gap-2 text-cyber-cyan/60 font-mono text-xs"
                >
                    <Terminal size={14} />
                    <span>SYSTEM_IDENTITY_VERIFIED</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-white relative inline-block"
                >
                    Rohan
                    <div className="absolute -top-4 -right-4 text-xs font-mono text-cyber-cyan border border-cyber-cyan px-1 rounded animate-pulse">
                        V.2.0
                    </div>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-2xl md:text-3xl text-cyber-cyan font-tech font-medium mb-6 tracking-wide flex items-center gap-3"
                >
                    <span className="w-8 h-px bg-cyber-cyan/50"></span>
                    SOFTWARE ENGINEER
                    <span className="w-8 h-px bg-cyber-cyan/50"></span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <CyberCard className="mb-10 backdrop-blur-md bg-cyber-gray/50 max-w-xl">
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-mono">
                            <span className="text-cyber-cyan mr-2">{`>`}</span>
                            Building reliable backend systems and clean full-stack Web, Web Application, React Native Application, and System Architectures.
                            <br className="mb-4" />
                            <span className="text-cyber-cyan mr-2">{`>`}</span>
                            Specializing in <span className="text-white font-bold">Java</span>, <span className="text-white font-bold">Spring Boot</span>, <span className="text-white font-bold">React</span>, <span className="text-white font-bold">React Native</span>, and distributed systems.
                        </p>
                    </CyberCard>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="flex flex-col sm:flex-row gap-6"
                >
                    <NavLink
                        to="/projects"
                        className="cyber-btn group flex items-center justify-center gap-2"
                    >
                        Initialize Projects
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className="cyber-btn group flex items-center justify-center gap-2 border-white/30 text-white/70 hover:border-white hover:text-white"
                    >
                        Contact Me
                        <Mail className="w-5 h-5" />
                    </NavLink>
                </motion.div>
            </div>

            {/* Right: Photo Section with HUD Effect */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-full md:w-1/2 flex justify-center md:justify-start order-2 z-10 relative pl-0 md:pl-8"
            >
                <div className="relative w-64 h-80 md:w-80 md:h-96">
                    {/* Rotating Data Rings */}
                    <div className="absolute -inset-12 border border-cyber-cyan/20 rounded-full animate-spin-slow w-[140%] h-[140%] -left-[20%] -top-[20%] border-t-transparent border-l-transparent" />
                    <div className="absolute -inset-8 border border-dashed border-cyber-cyan/30 rounded-full animate-spin-slow w-[120%] h-[120%] -left-[10%] -top-[10%] direction-reverse duration-[15s]" />
                    <div className="absolute -inset-2 border-2 border-cyber-cyan/10 rounded-full w-[105%] h-[105%] -left-[2.5%] -top-[2.5%] animate-pulse" />

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative w-full h-full overflow-hidden clip-path-polygon border-2 border-cyber-cyan/50 group bg-black"
                    >
                        {/* Image Layer */}
                        <div className="absolute inset-0 z-10">
                            <img
                                src={profileImg}
                                alt="Rohan"
                                className="w-full h-full object-cover grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-500"
                            />
                        </div>

                        {/* Cyber Overlays */}
                        <div className="absolute inset-0 bg-cyber-cyan/10 mix-blend-overlay z-20 group-hover:bg-transparent transition-all duration-500" />

                        {/* Scanning Line Effect */}
                        <div className="absolute top-0 left-0 w-full h-[20%] bg-gradient-to-b from-transparent via-cyber-cyan/30 to-transparent z-30 animate-scanline pointer-events-none opacity-50" />

                        {/* Grid Overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] z-20 pointer-events-none" />

                        {/* Technical Overlays */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 z-40 bg-gradient-to-t from-black/80 to-transparent">
                            <div className="font-tech text-cyber-cyan text-xs flex justify-between items-end">
                                <div>
                                    <div className="flex items-center gap-1 mb-1 animate-pulse">
                                        <Cpu size={12} />
                                        <span>NEURAL_LINK: ACTIVE</span>
                                    </div>
                                    <div>ID: R0-H4N-V2</div>
                                </div>
                                <div className="text-right opacity-70">
                                    <div>COORD: 12.34.56</div>
                                    <div className="text-[10px]">ENCRYPTION: AES-256</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Corner Markers */}
                    <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-cyber-cyan group-hover:w-12 group-hover:h-12 transition-all duration-300" />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-cyber-cyan group-hover:w-12 group-hover:h-12 transition-all duration-300" />

                    {/* Decorative Tags */}
                    <div className="absolute -right-8 top-10 font-mono text-[10px] text-cyber-cyan/50 rotate-90 tracking-widest">
                        SYSTEM_OVERRIDE
                    </div>
                </div>
            </motion.div>

        </div>
    );
};

export default Home;
