
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Menu from '@/components/Menu';
import Reservation from '@/components/Reservation';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Reservation />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Index;
