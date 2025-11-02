"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";
import styles from './header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/reviews", label: "Reviews" },
  ];

  return (
    <motion.header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className={styles.navWrapper}>
          <Link href="/#home">
            <Image 
              src="/sync.png" 
              alt="Logo" 
              width={180} 
              height={45} 
              priority 
              className={!isScrolled ? styles.logoTransparent : ''}
            />
          </Link>
          <nav className={styles.navLinks}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={styles.link}>
                {link.label}
              </a>
            ))}
            <Link href="/contact" className={styles.link}>Contact Us</Link>
          </nav>
          <div className={styles.controls}>
            <ThemeToggle />
            <div className={styles.menuButton}>
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div className={styles.mobileMenu} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <nav>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={styles.mobileLink} onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            ))}
            <Link href="/contact" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Contact Us</Link>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};
export default Header;