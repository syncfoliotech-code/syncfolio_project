import React from "react";
import Image from "next/image";
import { Mail, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import styles from './footer.module.css';
import PageViews from "./page-views";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.topSection}>
          <div className={styles.logo}>
            <Image src="/sync.png" alt="Logo" width={180} height={45} />
          </div>
          <div className={styles.socials}>
            <a href="mailto:contact@syncfoliotech.com" aria-label="Email" className={styles.icon}><Mail /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={styles.icon}><Facebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.icon}><Instagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className={styles.icon}><Twitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.icon}><Linkedin /></a>
          </div>
          <div className={styles.pageViewsContainer}>
            <PageViews />
          </div>
        </div>
        <div className={styles.bottomSection}>
          <p className={styles.text}>
            &copy; {new Date().getFullYear()} Syncfolio Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;