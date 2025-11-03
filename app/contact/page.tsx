"use client";
import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, Briefcase, MessageSquare, Check, AlertTriangle, MapPin, Clock } from 'lucide-react';
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
      const emailResponse = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!emailResponse.ok) throw new Error("Failed to send email");
      setStatus('success');
      (event.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Error:", error);
      setStatus('error');
    } finally {
        setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const contactDetails = [
    { icon: <MapPin />, title: "Our Office Address:", details: ["123 Innovation Drive", "Tech City, 12345"] },
    { icon: <Mail />, title: "Email Address:", details: ["contact@syncfoliotech.com"] },
    { icon: <Phone />, title: "Mobile Number:", details: ["+1 (234) 567-890", "+1 (234) 567-891"] },
    { icon: <Clock />, title: "Business Hours:", details: ["Monday - Friday: 9:00 AM – 6:00 PM"] },
  ];

  return (
    <div className={styles.pageContainer}>
      <VantaBackground />
      
      {/* --- THIS IS THE PART YOU WANTED TO KEEP --- */}
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
            <div className={styles.inputGroup}><User className={styles.icon} /><input type="text" id="name" name="name" placeholder="Your Name" required /></div>
            <div className={styles.inputGroup}><Mail className={styles.icon} /><input type="email" id="email" name="email" placeholder="Your Email" required /></div>
            <div className={styles.inputGroup}><Phone className={styles.icon} /><input type="tel" id="phone" name="phone" placeholder="Contact Number" required /></div>
            <div className={styles.inputGroup}><Briefcase className={styles.icon} /><select id="service" name="service"><option>Web Development</option><option>Mobile App Development</option><option>Digital Marketing</option><option>Cloud Support</option><option>Other</option></select></div>
            <div className={styles.inputGroup}><MessageSquare className={styles.icon} /><textarea id="comments" name="comments" rows={5} placeholder="Your Message" required></textarea></div>
            <button type="submit" className={styles.submitButton} disabled={status === 'loading'}><AnimatePresence mode="wait">{status === 'loading' && <motion.div key="loading" className={styles.buttonContent}><div className={styles.spinner}></div><span>Sending...</span></motion.div>}{status === 'success' && <motion.div key="success" className={styles.buttonContent}><Check /><span>Message Sent!</span></motion.div>}{status === 'error' && <motion.div key="error" className={`${styles.buttonContent} ${styles.error}`}><AlertTriangle /><span>Failed!</span></motion.div>}{status === 'idle' && <motion.span key="idle">Send Message</motion.span>}</AnimatePresence></button>
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
      <VantaBackground />

      <motion.div 
        className={`container ${styles.infoSection}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className={styles.infoDetails}>
          {contactDetails.map((item, index) => (
            <div key={index} className={styles.detailItem}>
              <div className={styles.detailIcon}>{item.icon}</div>
              <div className={styles.detailText}>
                <h4>{item.title}</h4>
                {item.details.map((line, i) => <p key={i}>{line}</p>)}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15181.12781878593!2d83.4312675685521!3d18.01938501255554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3994762f0f878f%3A0x8d75cf5600d8f638!2sTagarapuvalasa%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1672834123456"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={styles.mapFrame}
          ></iframe>
        </div>
      </motion.div>

    </div>
  );
};
export default ContactPage;