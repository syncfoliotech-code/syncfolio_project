/* eslint-disable @next/next/no-img-element */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import styles from './image-carousel.module.css';
import VantaBackground from "../vanta-background";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ImageCarousel = () => {
  const images = [
    "/images/thumb9.png",
    "/images/thumb6.png",
    // "/images/thumb7.png",
    "/images/thumb8.png",
    "/images/thumb5.png",
  ];

  return (
    <div>
      <VantaBackground />
        <div className={styles.carouselContainer}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.swiperInstance}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        spaceBetween={30}
        centeredSlides={true}
      >
        {images.map((src, index) => (
          <SwiperSlide key={`${src}-${index}`} className={styles.slide}>
            <div className={styles.slideImageContainer}>
              <img
                src={src}
                alt={`PDF Tool Feature ${index + 1}`}
                className={styles.slideImage}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
};

export default ImageCarousel;