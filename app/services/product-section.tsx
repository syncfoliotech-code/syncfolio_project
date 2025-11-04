"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Edit3, PenTool, FilePlus, Cloud, Lock, ScanText } from 'lucide-react';
import styles from './product-section.module.css';

const featuresData = [
    { icon: <Edit3 />, title: "Edit PDFs", description: "Edit text, images, and annotations in your documents." },
    { icon: <PenTool />, title: "E-Sign Documents", description: "Sign documents and add custom stamps with ease." },
    { icon: <FilePlus />, title: "Manage Files", description: "Merge, split, and compress your PDF files." },
    { icon: <Cloud />, title: "Cloud Sync", description: "Instant access to your documents across all devices." },
    { icon: <Lock />, title: "Secure Sharing", description: "Share safely with encryption and user permissions." },
    { icon: <ScanText />, title: "OCR Recognition", description: "Recognize text from scanned files for easy editing." },
];

const ProductSection = () => {
    return (
        <div className={styles.section}>
            <div className="container">
                <motion.div 
                    className={styles.header}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className={styles.title}>Our Product: <span className={styles.highlight}>SyncFolio PDF Editor</span></h2>
                    <p className={styles.subtitle}>Smart. Fast. Powerful.</p>
                    <p className={styles.description}>
                        SyncFolio PDF Editor is your all-in-one mobile document toolkit — designed to handle everything from annotation to collaboration.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {featuresData.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className={styles.iconContainer}>{feature.icon}</div>
                            <h3 className={styles.cardTitle}>{feature.title}</h3>
                            <p className={styles.cardDescription}>{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
                <motion.p 
                    className={styles.tagline}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    “Edit. Sign. Share. Done — with SyncFolio.”
                </motion.p>
            </div>
        </div>
    );
};
export default ProductSection;