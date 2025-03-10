
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';
import FadeIn from '@/components/animations/FadeIn';

const MenuPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <div className="pt-16 md:pt-24">
        <div className="relative h-64 md:h-96 bg-black overflow-hidden">
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"
            style={{opacity: 0.6}}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/40" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
            <FadeIn delay={0.3} direction="up" duration={1}>
              <h1 className="text-4xl md:text-5xl text-white font-serif font-light">Our Menu</h1>
            </FadeIn>
            <FadeIn delay={0.5} direction="up" duration={1}>
              <p className="text-white/80 mt-4 text-center max-w-lg">
                Explore our seasonal offerings crafted with the finest ingredients
              </p>
            </FadeIn>
          </div>
        </div>
        <Menu />
      </div>
      <Footer />
    </div>
  );
};

export default MenuPage;
