"use client";
import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, Briefcase, MessageSquare, Check, AlertTriangle } from 'lucide-react';
import VantaBackground from '@/components/vanta-background';
import styles from './contact.module.css';

const ContactPage = () => {
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      service: formData.get('service') as string,
      comments: formData.get('comments') as string,
    };

    try {
      const emailResponse = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!emailResponse.ok) {
        throw new Error("Failed to send email");
      }

      setStatus('success');
      (event.target as HTMLFormElement).reset();

    } catch (error) {
      console.error("Error:", error);
      setStatus('error');
    } finally {
        setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <VantaBackground />
      <div className={`container ${styles.mainContent}`}>
        <motion.div
          className={styles.formContainer}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.subtitle}>Have a project in mind? We&apos;d love to hear from you.</p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <User className={styles.icon} />
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className={styles.inputGroup}>
              <Mail className={styles.icon} />
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>
            <div className={styles.inputGroup}>
              <Phone className={styles.icon} />
              <input type="tel" id="phone" name="phone" placeholder="Contact Number" required/>
            </div>
            <div className={styles.inputGroup}>
              <Briefcase className={styles.icon} />
              <select id="service" name="service">
                <option>Web Development</option>
                <option>Mobile App Development</option>
                <option>Digital Marketing</option>
                <option>Cloud Support</option>
                <option>Other</option>
              </select>
            </div>
            <div className={styles.inputGroup}>
              <MessageSquare className={styles.icon} />
              <textarea id="comments" name="comments" rows={5} placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className={styles.submitButton} disabled={status === 'loading'}>
              <AnimatePresence mode="wait">
                {status === 'loading' && <motion.div key="loading" className={styles.buttonContent}><div className={styles.spinner}></div><span>Sending...</span></motion.div>}
                {status === 'success' && <motion.div key="success" className={styles.buttonContent}><Check /><span>Message Sent!</span></motion.div>}
                {status === 'error' && <motion.div key="error" className={`${styles.buttonContent} ${styles.error}`}><AlertTriangle /><span>Failed! Try Again.</span></motion.div>}
                {status === 'idle' && <motion.span key="idle">Send Message</motion.span>}
              </AnimatePresence>
            </button>
          </form>
        </motion.div>
        <motion.div 
            className={styles.logoContainer}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
            <Image 
                src="/sync.png" 
                alt="Syncfolio Tech Logo" 
                width={500} 
                height={125} 
                priority
            />
        </motion.div>
      </div>
    </div>
  );
};
export default ContactPage;