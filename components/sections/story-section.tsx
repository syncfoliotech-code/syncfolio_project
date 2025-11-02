"use client";
import React from 'react';
import Image from 'next/image';
import styles from './story.module.css';
import { motion } from 'framer-motion';

const StorySection = () => {
    return (
        <div className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    <motion.div 
                        className={styles.logoContainer}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Image src="/sync.png" alt="Company Logo" width={300} height={75} />
                    </motion.div>
                    <motion.div 
                        className={styles.textContainer}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className={styles.title}>Our Story</h2>
                        <p className={styles.paragraph}>
                            Founded on the principles of innovation and integrity, Syncfolio Tech began its journey to revolutionize the digital landscape. We are a passionate team of developers, designers, and strategists dedicated to crafting exceptional digital experiences. Our mission is to empower businesses by transforming their ideas into powerful, scalable, and user-centric technology solutions. We believe in building strong partnerships with our clients, ensuring every project we undertake is a collaborative success story that drives growth and inspires excellence in the ever-evolving world of IT.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
export default StorySection;