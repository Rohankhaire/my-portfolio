import React from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
    children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
    // Number of vertical bars for the shutter effect
    const bars = 5;

    // Cyber scanline/wipe effect
    // We use a fixed overlay that animates IN on exit, and OUT on enter.

    // Cyber scanline/wipe effect
    // We use a fixed overlay that animates IN on exit, and OUT on enter.

    const contentVariants = {
        initial: { opacity: 0, y: 20 },
        animate: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.5, duration: 0.4 }
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: { duration: 0.3 }
        }
    };

    return (
        <>
            {/* The Shutter Overlay */}
            <motion.div
                className="fixed inset-0 z-[100] grid grid-cols-5 pointer-events-none"
                initial="initial"
                animate="animate"
                exit="exit"
            >
                {[...Array(bars)].map((_, i) => (
                    <motion.div
                        key={i}
                        variants={{
                            initial: { scaleY: 1, originY: 1 }, // Start closed (full height)
                            animate: { scaleY: 0, originY: 0 }, // Open up (scale down to top)
                            exit: { scaleY: 1, originY: 1 }    // Close down (scale up from bottom)
                        }}
                        transition={{
                            duration: 0.6,
                            ease: [0.22, 1, 0.36, 1],
                            delay: i * 0.05
                        }}
                        className="h-full bg-cyber-black border-r border-cyber-cyan/20 relative overflow-hidden"
                    >
                        {/* Inner Glitch Decoration */}
                        <div className="absolute bottom-0 w-full h-2 bg-cyber-cyan/50" />
                        <motion.div
                            className="absolute top-0 w-full h-full bg-cyber-cyan/10"
                            animate={{ opacity: [0, 0.2, 0] }}
                            transition={{ duration: 0.2, repeat: Infinity, repeatDelay: Math.random() * 2 }}
                        />
                    </motion.div>
                ))}
            </motion.div>

            {/* Page Content */}
            <motion.div
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full h-full"
            >
                {children}
            </motion.div>
        </>
    );
};

export default PageTransition;
