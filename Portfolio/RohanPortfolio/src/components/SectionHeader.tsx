import React from 'react';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, className = '' }) => {
    return (
        <div className={`mb-12 ${className}`}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-cyber-cyan font-tech uppercase">{title}</h2>
            {subtitle && <p className="text-gray-400 text-lg max-w-2xl font-mono border-l-2 border-cyber-cyan pl-4">{subtitle}</p>}
            <div className="h-px w-full bg-cyber-cyan/30 mt-8 shadow-[0_0_10px_rgba(0,255,255,0.5)]" />
        </div>
    );
};

export default SectionHeader;
