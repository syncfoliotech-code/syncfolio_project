"use client";
import React from 'react';
import { Star } from 'lucide-react';
import styles from './reviews.module.css';

const reviewsData = [
    { name: 'John Doe', rating: 5, text: 'Absolutely phenomenal service! They delivered beyond our expectations.' },
    { name: 'Jane Smith', rating: 5, text: 'The team is professional, responsive, and incredibly talented.' },
    { name: 'Sam Wilson', rating: 4, text: 'A great experience overall. Highly recommend their development services.' },
    { name: 'Emily Clark', rating: 5, text: 'Transformed our mobile presence completely. The new app is fantastic!' },
    { name: 'Michael Brown', rating: 5, text: 'Their cloud support is top-notch. Our systems have never been more reliable.' },
    { name: 'Sarah Lee', rating: 5, text: 'Clean code and fantastic support. What more could you ask for?' },
    { name: 'David Garcia', rating: 4, text: 'Good value for money and a very responsive team.' },
    { name: 'Laura Martinez', rating: 5, text: 'The best IT partner we have ever worked with.' },
    { name: 'Chris Evans', rating: 5, text: 'Exceptional UI/UX design. Our users love the new interface.' },
    { name: 'Jessica Rodriguez', rating: 5, text: 'Fast, efficient, and always ready to help. 10/10 service.' },
    { name: 'Michael', rating: 5, text: 'Just one word: amazing!'},
];
const duplicatedReviews = [...reviewsData, ...reviewsData];

const getInitials = (name: string) => {
    const names = name.split(' ');
    if (names.length > 1) {
        return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
    }
    return name[0].toUpperCase();
};

const ReviewsSection = () => {
    return (
        <div className={styles.section}>
            <div className="container">
                <h2 className={styles.title}>What Our Clients Say</h2>
            </div>
            <div className={styles.scroller}>
                <div className={styles.scrollerInner}>
                    {duplicatedReviews.map((review, index) => (
                        <div key={index} className={styles.card}>
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
                    ))}
                </div>
            </div>
        </div>
    );
};
export default ReviewsSection;