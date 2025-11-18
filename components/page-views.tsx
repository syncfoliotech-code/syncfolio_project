"use client";
import React, { useState, useEffect } from 'react';
import styles from './page-views.module.css';

const PageViews = () => {
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
                const newCount = prevCount + 1;
                localStorage.setItem('pageViewCount', newCount.toString());
                return newCount;
            });
        }, 10000); 
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.counterWrapper}>
            <p className={styles.labels}>Global Engagements:</p>
            <span className={styles.counter}>{count.toLocaleString()}</span>
        </div>
    );
};
export default PageViews;