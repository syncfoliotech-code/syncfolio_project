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
      const emailResponse = await fetch("/api/sendEmail", {
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
    { icon: <MapPin />, title: "Our Office Address:", details: ["Plot no141/A , Dwaraka nagar clny,road no 7, Hasthinapuram central", "HYDERABAD, TELANGANA, 500079"] },
    { icon: <Mail />, title: "Email Address:", details: ["syncfoliotech@gmail.com"] },
    { icon: <Phone />, title: "Mobile Number:", details: ["+13134828657"] },
    { icon: <Clock />, title: "Business Hours:", details: ["Monday - Friday: 9:00 AM – 6:00 PM"] },
  ];

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
            <div className={styles.inputGroup}><User className={styles.icon} /><input type="text" id="name" name="name" placeholder="Your Name" required /></div>
            <div className={styles.inputGroup}><Mail className={styles.icon} /><input type="email" id="email" name="email" placeholder="Your Email" required /></div>
            <div className={styles.inputGroup}><Phone className={styles.icon} /><input type="tel" id="phone" name="phone" placeholder="Contact Number" required /></div>
            <div className={styles.inputGroup}><Briefcase className={styles.icon} /><select id="service" name="service"><option>AI Tools</option><option>Full-Stack</option><option>Custom Library & Component Solutions</option><option>Other</option></select></div>
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
                src="/sync2.png" 
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
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7618.227191716389!2d78.55162971105568!3d17.310067431478885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPlot%20no141%2FA%20%2C%20Dwaraka%20nagar%20clny%2Croad%20no%207%2CHasthinapuram%20central%2C%20HYDERABAD%2C%20TELANGANA%2C%C2%A0500079!5e0!3m2!1sen!2sin!4v1762186374091!5m2!1sen!2sin"
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