"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './page-views-section.module.css';

const AnimatedDigit = ({ digit }: { digit: string }) => {
    return (
        <div className={styles.digitContainer}>
            <AnimatePresence>
                <motion.span
                    key={digit}
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    exit={{ y: '-100%', opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                    {digit}
                </motion.span>
            </AnimatePresence>
        </div>
    );
};

const PageViewsSection = () => {
    const getInitialCount = () => {
        if (typeof window !== 'undefined') {
            const savedCount = localStorage.getItem('pageViewCount');
            return savedCount ? parseInt(savedCount, 10) : 5201;
        }
        return 5201;
    };
    
    const [count, setCount] = useState(getInitialCount());

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => {
                const newCount = prevCount + Math.floor(Math.random() * 5) + 1;
                localStorage.setItem('pageViewCount', newCount.toString());
                return newCount;
            });
        }, 100000); 
        return () => clearInterval(interval);
    }, []);

    const formattedCount = count.toLocaleString('en-US').padStart(8, '0');

    return (
        <div id="stats" className={styles.section}>
            <div className="container">
                <h2 className={styles.title}>Global Engagements</h2>
                <div className={styles.counterWrapper}>
                    {formattedCount.split('').map((char, index) =>
                        isNaN(parseInt(char)) ? (
                            <span key={index} className={styles.comma}>{char}</span>
                        ) : (
                            <div key={index} className={styles.digitBox}>
                                <AnimatedDigit digit={char} />
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};
export default PageViewsSection;