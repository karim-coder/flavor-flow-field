
import React from 'react';
import Navbar from '@/components/Navbar';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';

const MenuPage = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <div className="pt-16 md:pt-24">
        <Menu />
      </div>
      <Footer />
    </div>
  );
};

export default MenuPage;
