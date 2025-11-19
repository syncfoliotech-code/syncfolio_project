/* eslint-disable @next/next/no-img-element */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// సరిచేసిన మరియు మెరుగుపరిచిన CSS స్టైల్స్
const swiperCustomStyles = `
  .image-only-carousel .swiper-button-prev,
  .image-only-carousel .swiper-button-next {
    color: white;
    // background-color: rgba(0, 0, 0, 0.3);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transition: background-color 0.3s ease;
  }
  .image-only-carousel .swiper-button-prev:hover,
  .image-only-carousel .swiper-button-next:hover {
    // background-color: rgba(0, 0, 0, 0.6);
  }
  .image-only-carousel .swiper-button-prev:after,
  .image-only-carousel .swiper-button-next:after {
    font-size: 16px;
    font-weight: bold;
  }
  .image-only-carousel .swiper-pagination-bullet {
    background-color: rgba(255, 255, 255, 0.7);
    width: 10px;
    height: 10px;
    opacity: 1;
  }
  .image-only-carousel .swiper-pagination-bullet-active {
    background-color: white;
  }


  /* టాబ్లెట్ స్క్రీన్‌ల కోసం */
  @media (min-width: 768px) {
    .image-only-carousel {
      height: 60vh;
    }
  }

  /* పెద్ద డెస్క్‌టాప్ స్క్రీన్‌ల కోసం ఎత్తు తగ్గించబడింది */
  @media (min-width: 1024px) {
    .image-only-carousel {
      height: 80vh; /* <-- ఇక్కడ ఎత్తు 75vh నుండి 55vh కి తగ్గించబడింది */
    }
  }
`;

const ImageOnlyCarousel = () => {
  const images = [
    "/images/logo3.png",
    "/images/thumb9.png",
    "/images/thumb6.png",
    // "/images/thumb7.png",
    "/images/thumb8.png",
    "/images/thumb5.png",
  ];

  return (
    <div className="w-full" style={{ marginTop: 100 }}>
      <style>{swiperCustomStyles}</style>
      <div className="w-full">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={true} /* మీరు నావిగేషన్ బటన్‌లు కావాలనుకుంటే దీన్ని true గా మార్చండి */
          pagination={{ clickable: true }}
          className="image-only-carousel w-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={`${src}-${index}`}>
              <img
                src={src}
                alt={`Carousel image ${index + 1}`}
                className="object-cover w-full h-full"
                style={{ objectPosition: 'center' }}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageOnlyCarousel;