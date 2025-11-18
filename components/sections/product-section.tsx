"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Edit3, PenTool, FilePlus, Cloud, Lock, ScanText } from 'lucide-react';
import styles from './product-section.module.css';

const featuresData = [
    { icon: <Edit3 />, title: "Custom Library", description: "Organize and manage your documents with ease." },
    { icon: <PenTool />, title: "Annotation & Markup", description: "Add text, images, and annotations to your documents." },
    { icon: <FilePlus />, title: "Search & Accessibility", description: "Quickly find and access your documents." },
    { icon: <Cloud />, title: "Performance & Platform Support", description: "Instant access to your documents across all devices." },
    { icon: <Lock />, title: "Comprehensive PDF Customization", description: "Tailor your documents to your specific needs." },
    { icon: <ScanText />, title: "OCR Recognition", description: "Recognize text from scanned files for easy editing." },
    { icon: <Cloud />, title: "Data Encryption for Security", description: "Protect your data with end-to-end encryption." },
    { icon: <Lock />, title: "Security Features", description: "Protect your documents with encryption and password protection." },
    { icon: <ScanText />, title: "Collaboration Tools", description: "Share and collaborate on documents in real-time." },
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
                        SyncFolio Library is a comprehensive mobile toolkit designed to manage everything from annotation to effortless collaboration.
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