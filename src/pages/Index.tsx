
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Menu from '@/components/Menu';
import Chefs from '@/components/Chefs';
import Testimonials from '@/components/Testimonials';
import Reservation from '@/components/Reservation';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Chefs />
      <Testimonials />
      <Reservation />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
