"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import styles from './hero.module.css';
import VantaBackground from "../vanta-background";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <VantaBackground />
      <div className={styles.content}>
        <motion.div
          className={styles.logoContainer}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image 
            src="/sync2.png" 
            alt="Syncfolio Tech Logo" 
            width={400} 
            height={100} 
            priority
            style={{ filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.4))' }}
          />
        </motion.div>
        
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Empower Your Productivity with Smart Mobile Tools
        </motion.h1>
        
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          hidden
        >
          At SyncFolioTech, we create powerful, intuitive mobile apps that simplify everyday tasks — from editing PDFs to managing your digital workflow.
        </motion.p>

        <motion.div 
            className={styles.buttonContainer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
        >
            <a href="#download" className={styles.buttonPrimary} hidden>Download App</a>
            <a href="#product" className={styles.buttonSecondary}>Learn More</a>
        </motion.div>
      </div>
      <div className={styles.scrollIndicator}>
        <ChevronDown size={24} />
      </div>
    </section>
  );
};

export default HeroSection;