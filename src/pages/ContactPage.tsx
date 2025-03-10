
import React from 'react';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <div className="pt-16 md:pt-24">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
