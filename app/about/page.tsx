"use client";
import React from 'react';
import StorySection from '@/components/sections/story-section'; 
import VantaBackground from '@/components/vanta-background';
import styles from './about.module.css'; 
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className={styles.pageContainer}>
      <VantaBackground />
      <div className="container">
        <motion.div
          className={styles.contentContainer}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <StorySection />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;