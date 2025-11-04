import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Facebook, Instagram, Twitter, Linkedin, MapPin, Phone } from 'lucide-react';
import styles from './footer.module.css';
import PageViews from "./page-views";

const Footer = () => {
  const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/#product", label: "Product" },
    { href: "/#why-us", label: "Features" },
    { href: "/#reviews", label: "Reviews" },
    { href: "/#faq", label: "FAQs" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.grid}>
          
          <div className={styles.column}>
            <Image src="/sync2.png" alt="Logo" width={180} height={45} />
            <p className={styles.address}>
              <MapPin size={16} /> 
              <span>123 Innovation Drive, Tech City, 12345</span>
            </p>
            <p className={styles.address}>
              <Phone size={16} />
              <span>+1 (234) 567-890</span>
            </p>
          </div>

          <div className={styles.column}>
            <h3 className={styles.heading}>Quick Links</h3>
            <ul className={styles.navList}>
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.navLink}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.heading}>Follow Us</h3>
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