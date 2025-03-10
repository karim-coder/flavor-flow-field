
import React from 'react';
import FadeIn from './animations/FadeIn';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black text-white">
      <div className="section-container pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <FadeIn direction="up" delay={0.1}>
            <div>
              <h3 className="text-2xl font-serif mb-6">GALVIN</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Experience exceptional cuisine in an atmosphere of understated luxury, 
                where every detail is crafted to perfection.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold/10 transition-colors"
                >
                  <Instagram size={18} className="text-gold" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold/10 transition-colors"
                >
                  <Facebook size={18} className="text-gold" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold/10 transition-colors"
                >
                  <Twitter size={18} className="text-gold" />
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div>
              <h3 className="text-xl font-serif mb-6 uppercase">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin size={18} className="text-gold mt-1 mr-3 shrink-0" />
                  <span className="text-white/70">
                    35 Spital Square, London E1 6DY, United Kingdom
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone size={18} className="text-gold mr-3 shrink-0" />
                  <span className="text-white/70">+44 20 7299 0400</span>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="text-gold mr-3 shrink-0" />
                  <span className="text-white/70">reservations@galvin.com</span>
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div>
              <h3 className="text-xl font-serif mb-6 uppercase">Opening Hours</h3>
              <ul className="space-y-2">
                <li className="flex justify-between text-white/70">
                  <span>Monday - Thursday</span>
                  <span>12pm - 10pm</span>
                </li>
                <li className="flex justify-between text-white/70">
                  <span>Friday - Saturday</span>
                  <span>12pm - 11pm</span>
                </li>
                <li className="flex justify-between text-white/70">
                  <span>Sunday</span>
                  <span>12pm - 9pm</span>
                </li>
              </ul>
              <div className="mt-6 flex items-center">
                <Clock size={18} className="text-gold mr-3" />
                <span className="text-white/70">Last orders 30 minutes before closing</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div>
              <h3 className="text-xl font-serif mb-6 uppercase">Newsletter</h3>
              <p className="text-white/70 mb-4">
                Subscribe to our newsletter to receive the latest updates and offers.
              </p>
              <form className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-white/10 border border-white/20 rounded-sm px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:border-gold"
                />
                <button 
                  type="submit" 
                  className="w-full bg-gold hover:bg-gold-dark text-white py-2 rounded-sm transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </FadeIn>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Galvin Restaurant. All rights reserved.
          </p>
          <div className="flex space-x-4 text-white/50 text-sm">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms of Service</a>
            <a href="#" className="hover:text-gold">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
