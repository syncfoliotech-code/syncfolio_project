import HeroSection from "@/components/sections/hero-section";
import StorySection from "@/components/sections/story-section";
import ServicesSection from "@/components/sections/services-section";
import CoreServicesSection from "@/components/sections/core-services-section";
import ReviewsSection from "@/components/sections/reviews-section";

export default function Home() {
  return (
    <div>
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <StorySection />
      </section>
      <section id="services">
        <CoreServicesSection />
      </section>
      <section id="features">
        <ServicesSection />
      </section>
      <section id="reviews">
        <ReviewsSection />
      </section>
    </div>
  );
}