import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center animate-fade-in relative z-20">
            <h1 className="text-9xl font-bold mb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-cyber-cyan to-transparent animate-glitch font-tech">404</h1>
            <h2 className="text-2xl font-medium text-cyber-cyan mb-8 uppercase tracking-[0.5em] animate-pulse">System Failure</h2>
            <p className="text-gray-400 max-w-md mb-12 font-mono border border-red-500/30 p-4 bg-red-900/10">
                <span className="text-red-500 mr-2">[CRITICAL_ERROR]</span>
                DATA_NOT_FOUND. The requested sector is corrupted or does not exist in the current memory bank.
            </p>

            <NavLink
                to="/"
                className="cyber-btn"
            >
                <div className="flex items-center gap-2">
                    <Home size={20} />
                    <span>REBOOT_SYSTEM</span>
                </div>
            </NavLink>
        </div>
    );
};

export default NotFound;
