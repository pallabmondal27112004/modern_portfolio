import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './scrollProgress.css';

const ScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.div
            className="scroll-progress-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: scrollProgress > 5 ? 1 : 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="scroll-progress-bar">
                <motion.div
                    className="scroll-progress-fill"
                    style={{ width: `${scrollProgress}%` }}
                    transition={{ duration: 0.1 }}
                />
            </div>

            <motion.div
                className="scroll-percentage"
                initial={{ scale: 0 }}
                animate={{ scale: scrollProgress > 5 ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            >
                {Math.round(scrollProgress)}%
            </motion.div>
        </motion.div>
    );
};

export default ScrollProgress;