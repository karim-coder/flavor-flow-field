
import React, { useEffect, useState } from 'react';
import FadeIn from './animations/FadeIn';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className={cn(
            "absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3774&q=80')] bg-cover bg-center",
            "transition-all duration-1000",
            isLoaded ? "opacity-60 scale-100" : "opacity-0 scale-110"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <FadeIn delay={0.2} direction="up">
            <p className="text-gold uppercase tracking-[0.3em] mb-6 text-sm sm:text-base">
              Fine Dining Experience
            </p>
          </FadeIn>

          <FadeIn delay={0.5} direction="up">
            <h1 className="text-4xl sm:text-5xl md:text-7xl text-white font-serif font-light leading-tight tracking-wide mb-6">
              Culinary Excellence <br /> & Elegance
            </h1>
          </FadeIn>

          <FadeIn delay={0.8} direction="up">
            <p className="text-white/80 text-base sm:text-lg mb-10 max-w-2xl mx-auto">
              Experience exceptional cuisine in an atmosphere of understated luxury, where every detail is crafted to perfection.
            </p>
          </FadeIn>

          <FadeIn delay={1.1} direction="up">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#reserve" 
                className="bg-gold hover:bg-gold-dark text-white py-3 px-8 rounded-sm tracking-wide transition-all duration-300 hover:shadow-lg"
              >
                Reserve a Table
              </a>
              <a 
                href="#menu" 
                className="border border-gold text-gold hover:bg-gold/10 py-3 px-8 rounded-sm tracking-wide transition-all duration-300"
              >
                Explore Menu
              </a>
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
          <span className="text-white/70 text-sm tracking-widest mb-2">SCROLL</span>
          <div className="w-px h-16 bg-gradient-to-b from-white/0 via-white/50 to-white/0 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
