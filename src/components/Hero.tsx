
import React, { useEffect, useState } from 'react';
import FadeIn from './animations/FadeIn';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [parallaxElements, setParallaxElements] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.clientX) / 50;
      const y = (window.innerHeight / 2 - e.clientY) / 50;
      setParallaxElements({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="home" 
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Background with Parallax Effect */}
      <div className="absolute inset-0 z-0 parallax-container">
        <div 
          className={cn(
            "absolute inset-0 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3774&q=80')] bg-cover bg-center parallax-element",
            "transition-all duration-2000 ease-in-out",
            isLoaded ? "opacity-50 scale-105" : "opacity-0 scale-110"
          )}
          style={{
            transform: `translate(${parallaxElements.x}px, ${parallaxElements.y}px) scale(1.1)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          <FadeIn delay={0.3} direction="up" duration={1.2} initialOpacity={0}>
            <p className="text-gold uppercase tracking-[0.4em] mb-8 text-sm sm:text-base font-light">
              Fine Dining Experience Since 2008
            </p>
          </FadeIn>

          <FadeIn delay={0.7} direction="up" duration={1.2} initialOpacity={0} springEffect>
            <h1 className="text-4xl sm:text-5xl md:text-7xl text-white font-serif font-light leading-tight tracking-wide mb-8 reveal-text">
              Exceptional Cuisine <br /> Refined Elegance
            </h1>
          </FadeIn>

          <FadeIn delay={1.1} direction="up" duration={1.2} initialOpacity={0}>
            <p className="text-white/80 text-base sm:text-lg mb-12 max-w-2xl mx-auto font-light">
              An unforgettable dining experience in the heart of London. Michelin-starred cuisine in a setting of understated elegance.
            </p>
          </FadeIn>

          <FadeIn delay={1.5} direction="up" duration={1.2} initialOpacity={0} staggerChildren childrenDelay={0.15}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/reservations" 
                className="bg-gold hover:bg-gold-dark text-white py-3.5 px-8 rounded-none tracking-wider transition-all duration-300 uppercase text-sm flex items-center justify-center group"
              >
                Book a Table
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link 
                to="/menu" 
                className="border border-white/30 text-white hover:bg-white/10 py-3.5 px-8 rounded-none tracking-wider transition-all duration-300 uppercase text-sm"
              >
                Explore Menu
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className={cn(
          "flex flex-col items-center transition-opacity duration-1000",
          isLoaded ? "opacity-100" : "opacity-0"
        )}>
          <span className="text-white/70 text-xs tracking-[0.3em] mb-2 uppercase font-light">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-white/0 via-white/50 to-white/0 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
