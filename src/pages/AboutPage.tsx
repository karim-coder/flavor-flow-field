
import React from 'react';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Chefs from '@/components/Chefs';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <div className="pt-16 md:pt-24">
        <About />
        <Chefs />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
