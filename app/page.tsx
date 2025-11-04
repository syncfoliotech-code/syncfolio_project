import HeroSection from "@/components/sections/hero-section";
import ProductSection from "@/components/sections/product-section";
import WhyUsSection from "@/components/sections/why-us-section";
import ReviewsSection from "@/components/sections/reviews-section";
import SkillsSection from "@/components/skills";
import FaqSection from "@/components/sections/faq-section";
import PageViewsSection from "@/components/sections/page-views-section";

export default function Home() {
  return (
    <div>
      <section id="home">
        <HeroSection />
      </section>
      <section id="product">
        <ProductSection />
      </section>
      <section id="skills">
        <SkillsSection />
      </section>
      <section id="why-us">
        <WhyUsSection />
      </section>
      <section id="reviews">
        <ReviewsSection />
      </section>
      <section id="faq">
        <FaqSection />
      </section>
      <section id="stats">
        <PageViewsSection />
      </section>
    </div>
  );
}