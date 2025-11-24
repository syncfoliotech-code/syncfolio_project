/* eslint-disable @next/next/no-img-element */
"use client";
import React from 'react';
import styles from './story.module.css';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const coreValues = [
    { title: 'Innovation', text: 'We build with purpose and creativity.' },
    { title: 'Simplicity', text: 'We make complex tools easy to use.' },
    { title: 'Reliability', text: 'We deliver quality, secure, and stable performance.' },
    { title: 'User Focus', text: 'Every feature is designed around real user needs.' },
  ];

  return (
    <div className={styles.pageContainer}>
      <div className="container">
        <motion.div
          className={styles.contentContainer}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          
          <div className={styles.section}>
            <div className={styles.textContent}>
              <h2 className={styles.title}>Who We Are</h2>
              <p className={styles.paragraph}>
                At SyncFolioTech, we’re passionate about building innovative mobile products that enhance efficiency and creativity. Our mission is to make professional-grade tools accessible to everyone — right from their smartphones.
              </p>
            </div>
            <div className={styles.imageContent}>
              <img 
                src="/images/thumb10.png" 
                alt="Who We Are" 
                className={styles.sectionImage} 
              />
            </div>
          </div>

          <div className={styles.sectionReverse}>
            <div className={styles.textContent}>
              <h2 className={styles.title}>Vision & Mission</h2>
              <p className={styles.paragraph}>
                To empower individuals and businesses worldwide by delivering innovative, high-quality products that simplify work, enhance creativity, and drive progress.
              </p>
            </div>
            <div className={styles.imageContent}>
              <img 
                src="/images/thumb11.png" 
                alt="Vision and Mission" 
                className={styles.sectionImage} 
              />
            </div>
          </div>

          <div className={styles.valuesSection}>
            <h2 className={styles.title} style={{textAlign: 'center', marginBottom: '2rem', width: '100%'}}>Our Core Values</h2>
            <div className={styles.valuesGrid}>
              {coreValues.map((value, index) => (
                <div key={index} className={styles.valueCard}>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;