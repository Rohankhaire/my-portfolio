import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BootScreenProps {
    onComplete: () => void;
}

const BootScreen: React.FC<BootScreenProps> = ({ onComplete }) => {
    const [isBooting, setIsBooting] = useState(true);
    const [lines, setLines] = useState<string[]>([]);
    const scrollRef = useRef<HTMLDivElement>(null);

    const bootLines = [
        "INITIALIZING KERNEL...",
        "LOADING SYSTEM MODULES...",
        "VERIFYING INTEGRITY... [OK]",
        "MOUNTING FILE SYSTEM... [OK]",
        "CHECKING MEMORY BUS...",
        "ALLOCATING VIRTUAL HEAP... [OK]",
        "ESTABLISHING SECURE CONNECTION...",
        "LOADING UI RESOURCES...",
        "COMPILING NEURAL SHADERS... [OK]",
        "SYSTEM_IDENTITY: ROHAN.SYS",
        "ACCESS GRANTED."
    ];

    useEffect(() => {
        let lineIndex = 0;
        const interval = setInterval(() => {
            if (lineIndex < bootLines.length) {
                setLines(prev => [...prev, bootLines[lineIndex]]);
                lineIndex++;

                // Auto-scroll to bottom
                if (scrollRef.current) {
                    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
                }
            } else {
                clearInterval(interval);
                setTimeout(() => setIsBooting(false), 800); // Wait a bit after done
            }
        }, 150); // Speed of each line

        return () => clearInterval(interval);
    }, []);

    // Handlers
    const handleEnter = () => {
        // Optional: Play sound effect here
        onComplete();
    };

    return (
        <div className="fixed inset-0 bg-cyber-black flex flex-col items-center justify-center z-50 text-cyber-cyan font-mono overflow-hidden">

            <AnimatePresence mode='wait'>
                {isBooting ? (
                    <motion.div
                        key="terminal"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 flex items-end justify-start p-8 md:p-16 bg-cyber-black z-20"
                    >
                        <div
                            ref={scrollRef}
                            className="w-full max-w-3xl h-[60vh] overflow-y-auto font-mono text-sm md:text-base text-cyber-cyan/80 leading-relaxed scrollbar-hide"
                        >
                            {lines.map((line, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="mb-1"
                                >
                                    <span className="text-cyber-cyan mr-2">{'>'}</span>
                                    {line}
                                </motion.div>
                            ))}
                            <div className="animate-pulse text-cyber-cyan">_</div>
                        </div>

                        {/* Scanlines for Terminal */}
                        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))]" style={{ backgroundSize: "100% 2px, 3px 100%" }} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="enter-card"
                        className="relative w-full h-full flex items-center justify-center"
                    >
                        {/* Animated Background Grid - Slower & More Subtle */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-10" />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                            className="relative p-12 md:p-16 border border-cyber-cyan/20 bg-cyber-dark/95 shadow-[0_0_60px_rgba(0,255,255,0.05)] text-center backdrop-blur-md"
                        >
                            {/* Subtle Breathing Glow for Container */}
                            <motion.div
                                animate={{ opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-0 border border-cyber-cyan/10 rounded-lg pointer-events-none"
                                style={{ boxShadow: "inset 0 0 50px rgba(0, 255, 255, 0.05)" }}
                            />

                            {/* Title - Clean & Pulsing "Live" Feel */}
                            <div className="mb-12 relative z-10">
                                <motion.h1
                                    animate={{ textShadow: ["0 0 10px rgba(0,255,255,0.3)", "0 0 20px rgba(0,255,255,0.6)", "0 0 10px rgba(0,255,255,0.3)"] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="text-5xl md:text-7xl font-bold tracking-widest font-tech text-cyber-cyan"
                                >
                                    Ro Portfolio
                                </motion.h1>
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 1.5, delay: 0.5 }}
                                    className="h-[1px] bg-cyber-cyan/50 mt-4 mx-auto w-3/4"
                                />
                            </div>

                            {/* Explore Button - Professional & High-Tech */}
                            <motion.button
                                onClick={handleEnter}
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 255, 255, 0.1)" }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative px-12 py-4 bg-transparent border border-cyber-cyan/50 text-cyber-cyan font-bold tracking-[0.2em] uppercase transition-all duration-300"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    <span className="w-2 h-2 bg-cyber-cyan rounded-full animate-pulse" />
                                    SYSTEM ENTER
                                    <span className="w-2 h-2 bg-cyber-cyan rounded-full animate-pulse" />
                                </span>

                                {/* Corner Accents */}
                                <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-cyber-cyan transition-all group-hover:w-full group-hover:h-full group-hover:border-opacity-30" />
                                <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-cyber-cyan transition-all group-hover:w-full group-hover:h-full group-hover:border-opacity-30" />
                            </motion.button>
                        </motion.div>

                        {/* Background Minimal Rotation */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                            className="fixed top-[-10%] right-[-5%] w-[500px] h-[500px] border border-cyber-cyan/5 rounded-full pointer-events-none opacity-20 border-dashed"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                            className="fixed bottom-[-10%] left-[-5%] w-[400px] h-[400px] border border-cyber-cyan/5 rounded-full pointer-events-none opacity-20 border-dotted"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default BootScreen;
