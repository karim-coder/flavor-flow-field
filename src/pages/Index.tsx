import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";

import Footer from "@/components/Footer";
import Chef from "@/components/Chef";
import Celebrations from "@/components/Celebrations";
import PrivateDiningCarousel from "@/components/PrivateDiningCarousel";
import Weddings from "@/components/Weddings";
import OurStory from "@/components/OurStory";
import FooterAlt from "@/components/FooterAlt";

const Index = () => {
  const location = useLocation();

  // Scroll to anchor if present in URL
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 100,
            behavior: "smooth",
          });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <Chef />
      <About />
      <Celebrations />
      <PrivateDiningCarousel />
      <Weddings />
      <OurStory />
      <FooterAlt />

      <Footer />
    </div>
  );
};

export default Index;
