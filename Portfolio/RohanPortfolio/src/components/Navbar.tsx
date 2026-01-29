import React from 'react';
import { NavLink } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Experience', path: '/experience' },
        { label: 'Education', path: '/education' },
        { label: 'Projects', path: '/projects' },
        { label: 'Contact', path: '/contact' },
    ];

    const socialLinks = [
        { icon: <Github size={20} />, href: 'https://github.com', label: 'GitHub' },
        { icon: <Linkedin size={20} />, href: 'https://linkedin.com', label: 'LinkedIn' },
        { icon: <Mail size={20} />, href: 'mailto:rohan@example.com', label: 'Email' },
    ];

    return (
        <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-40 bg-cyber-black/70 backdrop-blur-md border border-cyber-cyan/30 rounded-full px-8 py-4 flex items-center justify-between gap-12 shadow-[0_0_20px_rgba(0,255,255,0.15)] min-w-[60vw]">
            {/* Left: Identity Node */}
            <NavLink
                to="/"
                className="group flex items-center gap-2"
            >
                <div className="w-2 h-2 bg-cyber-cyan rounded-full animate-pulse" />
                <span className="text-xl font-bold tracking-widest text-cyber-cyan group-hover:text-white transition-colors uppercase font-tech">
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

            {/* Right: Socials */}
            <div className="flex items-center space-x-4 border-l border-cyber-cyan/20 pl-6">
                {socialLinks.map((social) => (
                    <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyber-cyan/70 hover:text-cyber-cyan hover:drop-shadow-[0_0_5px_rgba(0,255,255,1)] transition-all"
                        aria-label={social.label}
                    >
                        {social.icon}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
