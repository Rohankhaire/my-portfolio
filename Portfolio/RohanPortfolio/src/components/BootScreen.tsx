import React from 'react';

interface BootScreenProps {
    onComplete: () => void;
}

const BootScreen: React.FC<BootScreenProps> = ({ onComplete }) => {
    return (
        <div className="fixed inset-0 bg-cyber-black flex flex-col items-center justify-center z-50 text-cyber-cyan font-mono">
            <div className="relative p-12 border border-cyber-cyan/30 bg-cyber-dark/80 shadow-[0_0_50px_rgba(0,255,255,0.1)] text-center">

                {/* Title */}
                <h1 className="text-4xl md:text-6xl font-bold tracking-widest mb-12 font-tech text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-white animate-pulse">
                    Ro Portfolio
                </h1>

                {/* Explore Button */}
                <button
                    onClick={onComplete}
                    className="group relative px-12 py-4 bg-transparent border border-cyber-cyan text-cyber-cyan font-bold tracking-[0.2em] uppercase hover:bg-cyber-cyan hover:text-black transition-all duration-300 overflow-hidden"
                >
                    <span className="relative z-10">Explore</span>
                    <div className="absolute inset-0 bg-cyber-cyan/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />

                    {/* Button Corner Accents */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-cyber-cyan" />
                    <div className="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-cyber-cyan" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-cyber-cyan" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-cyber-cyan" />
                </button>

                {/* Container Corner Accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyber-cyan" />
                <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-cyber-cyan" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-cyber-cyan" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-cyber-cyan" />
            </div>

            {/* Background decorations */}
            <div className="fixed top-10 left-10 w-32 h-32 border-l border-t border-cyber-cyan/20 rounded-tl-3xl pointer-events-none" />
            <div className="fixed bottom-10 right-10 w-32 h-32 border-r border-b border-cyber-cyan/20 rounded-br-3xl pointer-events-none" />
        </div>
    );
};

export default BootScreen;
