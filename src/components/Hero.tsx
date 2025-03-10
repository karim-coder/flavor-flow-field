
import React, { useEffect, useState } from 'react';
import FadeIn from './animations/FadeIn';
import { cn } from '@/lib/utils';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HERO_IMAGES = [
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3774&q=80',
    alt: 'Elegant restaurant interior'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Fine dining experience'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Gourmet dish presentation'
  }
];

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [parallaxElements, setParallaxElements] = useState({ x: 0, y: 0 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.clientX) / 50;
      const y = (window.innerHeight / 2 - e.clientY) / 50;
      setParallaxElements({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Auto rotate slides
    const intervalId = setInterval(() => {
      goToNextSlide();
    }, 6000);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(intervalId);
    };
  }, []);

  const goToNextSlide = () => {
    if (transitioning) return;
    
    setTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    
    // Reset transitioning state after animation completes
    setTimeout(() => setTransitioning(false), 1000);
  };

  const goToPrevSlide = () => {
    if (transitioning) return;
    
    setTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
    
    // Reset transitioning state after animation completes
    setTimeout(() => setTransitioning(false), 1000);
  };

  const goToSlide = (index: number) => {
    if (transitioning || index === currentSlide) return;
    
    setTransitioning(true);
    setCurrentSlide(index);
    
    // Reset transitioning state after animation completes
    setTimeout(() => setTransitioning(false), 1000);
  };

  return (
    <section 
      id="home" 
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Background with Improved Carousel Effect */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((image, index) => (
          <div 
            key={index}
            className={cn(
              "absolute inset-0 bg-cover bg-center transition-all duration-1000",
              currentSlide === index 
                ? "opacity-100 scale-105 z-10" 
                : "opacity-0 scale-100 z-0"
            )}
            style={{
              backgroundImage: `url(${image.src})`,
              transform: `translate(${parallaxElements.x}px, ${parallaxElements.y}px) scale(${currentSlide === index ? 1.05 : 1})`,
              transition: "opacity 1s ease-in-out, transform 1.2s ease-in-out"
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/40 z-20" />
      </div>

      {/* Carousel Controls - More visible on mobile */}
      <div className="absolute bottom-1/2 w-full flex justify-between px-4 md:px-8 z-30">
        <button 
          onClick={goToPrevSlide}
          disabled={transitioning}
          className="bg-black/40 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/60 active:scale-95 transition-all duration-300 flex items-center justify-center"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={goToNextSlide}
          disabled={transitioning}
          className="bg-black/40 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/60 active:scale-95 transition-all duration-300 flex items-center justify-center"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Improved Carousel Indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={transitioning}
            className={cn(
              "transition-all duration-500 rounded-full outline-none focus:ring-2 focus:ring-gold/50",
              currentSlide === index 
                ? "bg-gold w-8 h-2" 
                : "bg-white/40 w-2 h-2 hover:bg-white/70"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content with improved animations */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          <FadeIn delay={0.3} direction="up" duration={1} initialOpacity={0}>
            <p className="text-gold uppercase tracking-[0.4em] mb-8 text-sm sm:text-base font-light">
              Fine Dining Experience Since 2008
            </p>
          </FadeIn>

          <FadeIn delay={0.7} direction="up" duration={1} initialOpacity={0} springEffect>
            <h1 className="text-4xl sm:text-5xl md:text-7xl text-white font-serif font-light leading-tight tracking-wide mb-8 reveal-text">
              Exceptional Cuisine <br /> Refined Elegance
            </h1>
          </FadeIn>

          <FadeIn delay={1.1} direction="up" duration={1} initialOpacity={0}>
            <p className="text-white/80 text-base sm:text-lg mb-12 max-w-2xl mx-auto font-light">
              An unforgettable dining experience in the heart of London. Michelin-starred cuisine in a setting of understated elegance.
            </p>
          </FadeIn>

          <FadeIn delay={1.5} direction="up" duration={1} initialOpacity={0} staggerChildren childrenDelay={0.15}>
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

      {/* Scroll indicator with improved animation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
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
