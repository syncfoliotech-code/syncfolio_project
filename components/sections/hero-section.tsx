"use client";
import React from "react";
import Image from "next/image"; 
import { motion } from "framer-motion";
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
            src="/sync.png" 
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
          Innovate. Integrate. <span className={styles.highlight}>Inspire.</span>
        </motion.h1>
        
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          We deliver cutting-edge technology solutions that bring your vision to life.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;