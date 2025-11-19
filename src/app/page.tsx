import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";
import PhotoCarousel from "@/components/PhotoCarousel";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

export default function SparkFixElectricals() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <PhotoCarousel />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
