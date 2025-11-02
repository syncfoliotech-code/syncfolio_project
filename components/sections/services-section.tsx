"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './services.module.css';

const servicesData = [
    { num: '01', title: 'Clean Code', desc: 'We focus on clean, maintainable code to ensure your website runs smoothly and efficiently.' },
    { num: '02', title: 'Object Oriented', desc: 'Our solutions are designed with scalability and flexibility, adapting to your business needs.' },
    { num: '03', title: '24h Service', desc: 'We’re available around the clock to help you with any website issues or updates.' },
    { num: '04', title: 'Value for Money', desc: 'Affordable, high-quality solutions that deliver more value to your business.' },
    { num: '05', title: 'Faster Response', desc: 'Quick responses and rapid development so your projects stay on track.' },
    { num: '06', title: 'Cloud Support', desc: 'Seamless integration with cloud services to keep your website fast and secure.' },
    { num: '07', title: 'Android Development', desc: 'End-to-end Android app development to turn your ideas into mobile experiences.' },
    { num: '08', title: 'iOS Development', desc: 'Crafting sleek and powerful iOS applications for seamless user experiences.' },
];

const ServicesSection = () => {
    return (
        <div className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Our Unique Services</h2>
                    <p className={styles.subtitle}>Our team is dedicated to delivering exceptional IT solutions tailored to meet the unique needs of each client.</p>
                </div>
                <div className={styles.grid}>
                    {servicesData.map((service, index) => (
                        <motion.div 
                            key={index} 
                            className={styles.card}
                            initial={{ opacity: 0, y: 50, rotateX: -20 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className={styles.cardNumber}>{service.num}</div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDesc}>{service.desc}</p>
                            <Link href="/contact" className={styles.readMore}>Read More</Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default ServicesSection;