import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Ray from '@/imports/Ray'; // Adjust import based on your project structure

export const RayThinking = () => {
    const [textIndex, setTextIndex] = useState(0);
    const phrases = [
        "Working on this...",
        "Gathering information...",
        "Putting it all together..."
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % phrases.length);
        }, 1200);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3 p-3 px-4 w-fit mb-4"
        >
            <motion.div
                animate={{ 
                    opacity: [0.8, 1, 0.8],
                    scale: [0.95, 1.05, 0.95]
                }}
                transition={{ 
                    duration: 2, // Slower pulse
                    repeat: Infinity,
                    ease: "easeInOut" 
                }}
                className="relative size-[24px] flex items-center justify-center"
            >
                {/* Assuming Ray component fits in 24x24 or scales responsibly. 
                    If Ray is an SVG, we might need to constrain it. 
                    Checking Ray usage in dashboard, it's usually in a container.
                */}
                <div className="w-full h-full">
                     <Ray /> 
                </div>
            </motion.div>
            
            <div className="h-[26px] relative min-w-[200px]">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={phrases[textIndex]}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.3 }}
                        className="text-[16px] leading-[26px] tracking-[0.16px] text-[#40566d] absolute left-0 top-0 whitespace-nowrap"
                    >
                        {phrases[textIndex]}
                    </motion.span>
                </AnimatePresence>
            </div>
        </motion.div>
    );
};
