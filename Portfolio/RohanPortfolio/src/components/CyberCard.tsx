import React from 'react';

interface CyberCardProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
}

const CyberCard: React.FC<CyberCardProps> = ({ children, className = '', title }) => {
    return (
        <div className={`relative group ${className}`}>
            {/* Glass Background */}
            <div className="absolute inset-0 bg-cyber-gray/30 backdrop-blur-sm border border-cyber-cyan/20 clip-path-polygon" />

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyber-cyan transition-all group-hover:w-full group-hover:h-full opacity-50" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-cyber-cyan transition-all group-hover:w-full group-hover:h-full opacity-50" />

            {/* Content */}
            <div className="relative p-6 z-10">
                {title && (
                    <div className="flex items-center gap-2 mb-4 border-b border-cyber-cyan/10 pb-2">
                        <div className="w-2 h-2 bg-cyber-cyan animate-pulse" />
                        <h3 className="text-xl font-tech text-cyber-cyan tracking-wider">{title}</h3>
                    </div>
                )}
                {children}
            </div>
        </div>
    );
};

export default CyberCard;
