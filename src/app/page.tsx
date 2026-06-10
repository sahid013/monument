import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AudienceSection from "./components/AudienceSection";
import AboutSection from "./components/AboutSection";
import FaqSection from "./components/FaqSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AudienceSection />
      <AboutSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
