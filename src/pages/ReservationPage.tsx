
import React from 'react';
import Navbar from '@/components/Navbar';
import Reservation from '@/components/Reservation';
import Footer from '@/components/Footer';

const ReservationPage = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <div className="pt-16 md:pt-24">
        <Reservation />
      </div>
      <Footer />
    </div>
  );
};

export default ReservationPage;
