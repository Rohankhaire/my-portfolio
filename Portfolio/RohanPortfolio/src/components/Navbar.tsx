import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Experience', path: '/experience' },
        { label: 'Education', path: '/education' },
        { label: 'Projects', path: '/projects' },
        { label: 'Contact', path: '/contact' },
    ];

    const socialLinks = [
        { icon: Github, href: 'https://github.com', label: 'GitHub' },
        { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:rohan@example.com', label: 'Email' },
    ];

    return (
        <>
            <nav className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-40 bg-cyber-black/80 backdrop-blur-md border border-cyber-cyan/30 rounded-full px-6 py-3 md:px-8 md:py-4 flex items-center justify-between gap-4 md:gap-12 shadow-[0_0_20px_rgba(0,255,255,0.15)] w-[90vw] md:w-auto md:min-w-[60vw] max-w-5xl">
                {/* Left: Identity Node */}
                <NavLink
                    to="/"
                    className="group flex items-center gap-2"
                    onClick={() => setIsOpen(false)}
                >
                    <div className="w-2 h-2 bg-cyber-cyan rounded-full animate-pulse" />
                    <span className="text-lg md:text-xl font-bold tracking-widest text-cyber-cyan group-hover:text-white transition-colors uppercase font-tech">
                        Rohan<span className="opacity-50 text-xs align-top">.sys</span>
                    </span>
                </NavLink>

                {/* Center: Navigation - Desktop */}
                <div className="hidden md:flex items-center space-x-1">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }: { isActive: boolean }) =>
                                `relative px-4 py-1 text-sm font-mono transition-all duration-300 ${isActive
                                    ? 'text-black bg-cyber-cyan shadow-[0_0_10px_rgba(0,255,255,0.6)] skew-x-[-10deg]'
                                    : 'text-cyber-cyan/70 hover:text-cyber-cyan hover:bg-cyber-cyan/10'
                                }`
                            }
                        >
                            <span className="block transform skew-x-[10deg]">{item.label}</span>
                        </NavLink>
                    ))}
                </div>

                {/* Right: Socials (Desktop) / Menu Toggle (Mobile) */}
                <div className="flex items-center">
                    {/* Desktop Socials */}
                    <div className="hidden md:flex items-center space-x-4 border-l border-cyber-cyan/20 pl-6">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-cyber-cyan/70 hover:text-cyber-cyan hover:drop-shadow-[0_0_5px_rgba(0,255,255,1)] transition-all"
                                aria-label={social.label}
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-cyber-cyan hover:text-white transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-30 pt-24 px-6 bg-cyber-black/95 backdrop-blur-xl md:hidden flex flex-col items-center gap-8"
                    >
                        {/* Mobile Navigation Items */}
                        <div className="flex flex-col items-center gap-6 w-full">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `text-2xl font-tech tracking-wider uppercase transition-all duration-300 ${isActive
                                            ? 'text-cyber-cyan drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]'
                                            : 'text-gray-400 hover:text-cyber-cyan'
                                        }`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </div>

                        {/* Mobile Separation Line */}
                        <div className="w-20 h-px bg-cyber-cyan/30" />

                        {/* Mobile Social Links */}
                        <div className="flex items-center gap-8">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cyber-cyan/70 hover:text-cyber-cyan hover:drop-shadow-[0_0_5px_rgba(0,255,255,1)] transition-all p-2 bg-cyber-cyan/5 rounded-full border border-cyber-cyan/20"
                                    aria-label={social.label}
                                >
                                    <social.icon size={28} />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
