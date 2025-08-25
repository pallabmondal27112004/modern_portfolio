import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './loader.css';

const Loader = ({ onLoadingComplete }) => {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        console.log('Loader useEffect started');

        // Fallback timeout to ensure loading completes
        const fallbackTimer = setTimeout(() => {
            console.log('Fallback timeout triggered');
            setLoading(false);
            if (onLoadingComplete) {
                onLoadingComplete();
            }
        }, 4000); // 4 seconds max

        const timer = setInterval(() => {
            setProgress(prev => {
                console.log('Progress:', prev);
                if (prev >= 100) {
                    clearInterval(timer);
                    clearTimeout(fallbackTimer);
                    console.log('Progress complete, setting timeout');
                    setTimeout(() => {
                        console.log('Timeout complete, calling onLoadingComplete');
                        setLoading(false);
                        if (onLoadingComplete) {
                            onLoadingComplete();
                        }
                    }, 500);
                    return 100;
                }
                return prev + 5; // Faster progress
            });
        }, 30); // Faster interval

        return () => {
            clearInterval(timer);
            clearTimeout(fallbackTimer);
        };
    }, [onLoadingComplete]);

    if (!loading) {
        return null;
    }

    return (
        <motion.div
            className="loader-container"
            initial={{ opacity: 1 }}
            animate={{ opacity: loading ? 1 : 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="loader-content">
                <motion.div
                    className="loader-logo"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="logo-text">PM</h1>
                </motion.div>

                <motion.h2
                    className="loader-title"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    Pallab Kumar Mondal
                </motion.h2>

                <motion.p
                    className="loader-subtitle"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    Full Stack Developer
                </motion.p>

                <motion.div
                    className="progress-container"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "300px", opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    <div className="progress-bar">
                        <motion.div
                            className="progress-fill"
                            style={{ width: `${progress}%` }}
                            transition={{ duration: 0.1 }}
                        />
                    </div>
                    <motion.span
                        className="progress-text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        {progress}%
                    </motion.span>
                </motion.div>

                <motion.div
                    className="loader-dots"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="dot"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 1, 0.5]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.2
                            }}
                        />
                    ))}
                </motion.div>

                {/* Skip button for testing */}
                <motion.button
                    onClick={() => {
                        setLoading(false);
                        if (onLoadingComplete) {
                            onLoadingComplete();
                        }
                    }}
                    style={{
                        marginTop: '2rem',
                        padding: '0.5rem 1rem',
                        background: 'rgba(255,255,255,0.2)',
                        color: 'white',
                        border: '1px solid white',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                    whileHover={{ scale: 1.05 }}
                >
                    Skip Loading
                </motion.button>
            </div>
        </motion.div>
    );
};

export default Loader;