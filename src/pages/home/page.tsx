import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import HeroSlider from "./components/HeroSlider";
import StatsSection from "./components/StatsSection";
import CompanySection from "./components/CompanySection";
import SolutionsGrid from "./components/SolutionsGrid";
import WhyWorkWithUsSection from "./components/WhyWorkWithUsSection";
import ProjectsSection from "./components/ProjectsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ClientsSection from "./components/ClientsSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSlider />
      <StatsSection />
      <CompanySection />
      <SolutionsGrid />
      <WhyWorkWithUsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ClientsSection />
      <FAQSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
}