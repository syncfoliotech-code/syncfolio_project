"use client";
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Edit3, PenTool, FilePlus, Cloud, Lock, ScanText, Sparkles, Zap, ShieldCheck, Globe, BrainCircuit, Code } from 'lucide-react';
import VantaBackground from '@/components/vanta-background';
import styles from './why-us.module.css';

const productFeatures = [
    { icon: <Edit3 size={32} />, title: "Edit PDFs" },
    { icon: <PenTool size={32} />, title: "E-Sign Documents" },
    { icon: <FilePlus size={32} />, title: "Manage Files" },
    { icon: <Cloud size={32} />, title: "Cloud Sync" },
    { icon: <Lock size={32} />, title: "Secure Sharing" },
    { icon: <ScanText size={32} />, title: "OCR Recognition" },
];

const whyUsFeatures = [
    { icon: <Sparkles size={24} />, title: 'User-Centric Design', desc: 'Every tap is intuitive and designed for a seamless experience.' },
    { icon: <Zap size={24} />, title: 'Lightning-Fast Performance', desc: 'Our apps are optimized for speed, accuracy, and efficiency.' },
    { icon: <ShieldCheck size={24} />, title: 'Enterprise-Grade Security', desc: 'Your documents and data always stay private and protected.' },
    { icon: <Globe size={24} />, title: 'Cross-Platform Sync', desc: 'Access your files anywhere, anytime, on any device.' },
    { icon: <BrainCircuit size={24} />, title: 'AI-Powered Tools', desc: 'Benefit from smart suggestions and quick, automated edits.' },
    { icon: <Code size={24} />, title: 'Continuous Innovation', desc: 'We constantly update our apps with new features and improvements.' },
];

const TiltCard = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const ySpring = useSpring(y, { stiffness: 300, damping: 30 });
    const rotateX = useTransform(ySpring, [-0.5, 0.5], ["12deg", "-12deg"]);
    const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        x.set(mouseX / rect.width - 0.5);
        y.set(mouseY / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        >
            {children}
        </motion.div>
    );
};

const FeaturesPage = () => {
    return (
        <div className={styles.pageContainer}>
            {/* <VantaBackground /> */}
            <div className={` ${styles.contentWrapper}`}>

                <motion.div
                    className={styles.section}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className={styles.mainTitle}>
                        Our Product: <span className={styles.highlight}>SyncFolio PDF Editor</span>
                    </h1>
                    <p className={styles.subtitle}>Smart. Fast. Powerful.</p>
                    <p className={styles.description}>
                        SyncFolio PDF Editor is your all-in-one mobile document toolkit — designed to handle everything from annotation to collaboration.
                    </p>

                    <div className={styles.productGrid}>
                        {productFeatures.map((feature, index) => (
                            <TiltCard key={index}>
                                <div className={styles.productCard}>
                                    <div className={styles.productIcon}>{feature.icon}</div>
                                    <h3 className={styles.productTitle}>{feature.title}</h3>
                                </div>
                            </TiltCard>
                        ))}
                    </div>
                    <p className={styles.tagline}>“Edit. Sign. Share. Done — with SyncFolio.”</p>
                </motion.div>

                <div className={styles.divider}></div>

                <motion.div
                    className={styles.section}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <h2 className={styles.mainTitle}>Why Choose SyncFolioTech</h2>
                    <div className={styles.whyUsGrid}>
                        {whyUsFeatures.map((item, index) => (
                             <TiltCard key={index}>
                                <div className={styles.whyUsCard}>
                                    <div className={styles.whyUsIcon}>{item.icon}</div>
                                    <div className={styles.whyUsText}>
                                        <h3 className={styles.whyUsTitle}>{item.title}</h3>
                                        <p className={styles.whyUsDesc}>{item.desc}</p>
                                    </div>
                                </div>
                             </TiltCard>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default FeaturesPage;