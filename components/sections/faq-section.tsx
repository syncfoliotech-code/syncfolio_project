"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import styles from './faq-section.module.css';

const faqData = [
    {
        question: "What is SyncFolio PDF Editor?",
        answer: "SyncFolio PDF Editor is an all-in-one mobile application that allows you to create, edit, sign, and manage PDF documents directly from your smartphone. It's designed to be powerful, intuitive, and secure."
    },
    {
        question: "Is my data secure with SyncFolioTech apps?",
        answer: "Absolutely. We prioritize enterprise-grade security in all our products. Your documents are protected with robust encryption, and you have full control over sharing permissions."
    },
    {
        question: "Can I access my documents on multiple devices?",
        answer: "Yes! Our flagship app includes seamless cloud sync, allowing you to access and edit your files instantly across all your devices—whether it's a smartphone, tablet, or desktop."
    },
    {
        question: "What platforms is the app available on?",
        answer: "SyncFolio PDF Editor is available for both iOS and Android, ensuring a consistent and high-performance experience regardless of your device's operating system."
    },
    {
        question: "Do you offer customer support?",
        answer: "Yes, we offer dedicated customer support to help you with any issues or questions you may have. Our goal is to ensure you have a smooth and productive experience with our tools."
    }
];

const FaqItem = ({ item }: { item: typeof faqData[0] }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div 
            className={styles.faqItem}
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.02, zIndex: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <div className={styles.questionHeader}>
                <h3 className={styles.questionText}>{item.question}</h3>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown size={24} />
                </motion.div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: '1rem' }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <p className={styles.answerText}>{item.answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};


const FaqSection = () => {
    return (
        <div id="faq" className={styles.section}>
            <div className="container">
                <motion.h2 
                    className={styles.title}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Frequently Asked Questions
                </motion.h2>
                <div className={styles.faqContainer}>
                    {faqData.map((item, index) => (
                       <FaqItem key={index} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FaqSection;