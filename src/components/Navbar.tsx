
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { X, Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Menu', href: '#menu' },
    { title: 'Reservations', href: '#reserve' },
    { title: 'Gallery', href: '#gallery' },
    { title: 'Contact', href: '#contact' }
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled 
          ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md py-3 shadow-md' 
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a 
              href="#home" 
              className="text-3xl font-serif font-bold tracking-wider"
            >
              <span className="text-gold">GALVIN</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className="navbar-link"
              >
                {link.title}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          'md:hidden transition-all duration-500 overflow-hidden',
          isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="glass-panel mt-2 mx-4 rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col py-4 space-y-3">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="px-6 py-3 hover:bg-gold/10 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
