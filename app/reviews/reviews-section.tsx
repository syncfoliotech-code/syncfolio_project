"use client";
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Star } from 'lucide-react';
import styles from './reviews.module.css';
// import VantaBackground from '@/components/vanta-background';

const reviewsData = [
    { name: 'John Doe', rating: 5, text: 'Absolutely phenomenal service! They delivered beyond our expectations.' },
    { name: 'Jane Smith', rating: 5, text: 'The team is professional, responsive, and incredibly talented.' },
    { name: 'Sam Wilson', rating: 4, text: 'A great experience overall. Highly recommend their development services.' },
    { name: 'Emily Clark', rating: 5, text: 'Transformed our mobile presence completely. The new app is fantastic!' },
    { name: 'Michael Brown', rating: 5, text: 'Their cloud support is top-notch. Our systems have never been more reliable.' },
    { name: 'Sarah Lee', rating: 5, text: 'Clean code and fantastic support. What more could you ask for?' },
    { name: 'David Garcia', rating: 4, text: 'Good value for money and a very responsive team.' },
    { name: 'Laura Martinez', rating: 5, text: 'The best IT partner we have ever worked with.' },
    { name: 'John Doe', rating: 5, text: 'Absolutely phenomenal service! They delivered beyond our expectations.' },
    { name: 'Jane Smith', rating: 5, text: 'The team is professional, responsive, and incredibly talented.' },
    { name: 'Sam Wilson', rating: 4, text: 'A great experience overall. Highly recommend their development services.' },
    { name: 'Emily Clark', rating: 5, text: 'Transformed our mobile presence completely. The new app is fantastic!' },
    { name: 'Michael Brown', rating: 5, text: 'Their cloud support is top-notch. Our systems have never been more reliable.' },
    { name: 'Sarah Lee', rating: 5, text: 'Clean code and fantastic support. What more could you ask for?' },
    { name: 'David Garcia', rating: 4, text: 'Good value for money and a very responsive team.' },
    { name: 'Laura Martinez', rating: 5, text: 'The best IT partner we have ever worked with.' },
];

const getInitials = (name: string) => {
    const names = name.split(' ');
    if (names.length > 1) {
        return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
    }
    return name[0].toUpperCase();
};

const TiltCard = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const xSpring = useSpring(x, { stiffness: 300, damping: 40 });
    const ySpring = useSpring(y, { stiffness: 300, damping: 40 });
    const rotateX = useTransform(ySpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
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

const ReviewsSection = () => {
    return (
        <div className={styles.section}>
            {/* <VantaBackground /> */}
            <div className="container">
                <h2 className={styles.title}>What Our Clients Say</h2>
                <div className={styles.grid}>
                    {reviewsData.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <TiltCard>
                                <div className={styles.card}>
                                    <div className={styles.profile}>
                                        <div className={styles.profileIcon}>
                                            {getInitials(review.name)}
                                        </div>
                                        <span className={styles.reviewerName}>{review.name}</span>
                                    </div>
                                    <p className={styles.reviewText}>&quot;{review.text}&quot;</p>
                                    <div className={styles.rating}>
                                        {Array.from({ length: review.rating }).map((_, i) => (
                                            <Star key={i} size={16} fill="gold" stroke="gold" />
                                        ))}
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReviewsSection;