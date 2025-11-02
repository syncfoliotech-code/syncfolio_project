"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Megaphone } from 'lucide-react';
import styles from './core-services.module.css';

const coreServicesData = [
    {
        icon: <Code size={48} className={styles.icon} />,
        title: "Web Development",
        description: "We build modern, responsive, and high-performance websites tailored to your business goals. From e-commerce platforms to corporate sites, our solutions are built for success."
    },
    {
        icon: <Smartphone size={48} className={styles.icon} />,
        title: "Mobile App Development",
        description: "Engage your users on the go with custom iOS and Android applications. We craft intuitive and powerful mobile experiences that drive user retention and growth."
    },
    {
        icon: <Megaphone size={48} className={styles.icon} />,
        title: "Digital Marketing",
        description: "Amplify your brand's reach with our strategic digital marketing services. We leverage social media, influencers, and data-driven campaigns to connect you with your target audience."
    }
];

const CoreServicesSection = () => {
    return (
        <div className={styles.section}>
            <div className="container">
                <motion.h2 
                    className={styles.title}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Our Core Offerings
                </motion.h2>
                <div className={styles.grid}>
                    {coreServicesData.map((service, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 100, rotateX: -45 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                        >
                            <div className={styles.iconContainer}>{service.icon}</div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDescription}>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CoreServicesSection;