"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, ShieldCheck, Globe, BrainCircuit, Code } from 'lucide-react';
import styles from './why-us.module.css';

const data = [
    { icon: <Sparkles />, title: 'User-Centric Design', desc: 'Every tap is intuitive and designed for a seamless experience.' },
    { icon: <Zap />, title: 'Lightning-Fast Performance', desc: 'Our apps are optimized for speed, accuracy, and efficiency.' },
    { icon: <ShieldCheck />, title: 'Enterprise-Grade Security', desc: 'Your documents and data always stay private and protected.' },
    { icon: <Globe />, title: 'Cross-Platform Sync', desc: 'Access your files anywhere, anytime, on any device.' },
    { icon: <BrainCircuit />, title: 'AI-Powered Tools', desc: 'Benefit from smart suggestions and quick, automated edits.' },
    { icon: <Code />, title: 'Continuous Innovation', desc: 'We constantly update our apps with new features and improvements.' },
];

const WhyUsSection = () => {
    return (
        <div className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Why Choose SyncFolioTech</h2>
                </div>
                <div className={styles.grid}>
                    {data.map((item, index) => (
                        <motion.div 
                            key={index} 
                            className={styles.card}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className={styles.icon}>{item.icon}</div>
                            <div className={styles.textContainer}>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.cardDesc}>{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default WhyUsSection;