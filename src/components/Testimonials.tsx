
import React, { useState, useEffect } from 'react';
import FadeIn from './animations/FadeIn';
import { cn } from '@/lib/utils';
import { Quote } from 'lucide-react';

interface Testimonial {
  text: string;
  author: string;
  position: string;
  image?: string;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      text: "Exceptional dining experience. The tasting menu was extraordinary, with each dish showcasing impeccable technique and creativity.",
      author: "James Mitchell",
      position: "Food Critic, The Guardian",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      text: "From the moment we arrived, we were treated to outstanding hospitality. The wine pairing was perfect and the atmosphere elegant yet comfortable.",
      author: "Sarah Williams",
      position: "Michelin Guide",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      text: "The attention to detail in both food and service is unmatched. Each visit feels like a special occasion, even when dining midweek.",
      author: "Michael Chen",
      position: "Culinary Expert",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Restaurant background" 
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="text-gold uppercase tracking-[0.3em] text-sm">Guest Experiences</span>
            <h2 className="text-3xl md:text-4xl font-serif mt-2">What Our Guests Say</h2>
          </FadeIn>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-80">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={cn(
                  "absolute top-0 left-0 w-full transition-all duration-1000 ease-in-out",
                  index === currentIndex 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-8 pointer-events-none"
                )}
              >
                <FadeIn direction="none" once={false} delay={0.2} duration={1.2}>
                  <div className="text-center flex flex-col items-center">
                    <Quote className="text-gold mb-4 h-12 w-12 rotate-180" />
                    <p className="text-xl md:text-2xl font-serif leading-relaxed mb-8 italic">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center justify-center">
                      {testimonial.image && (
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.author} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="text-left">
                        <p className="font-medium">{testimonial.author}</p>
                        <p className="text-sm text-gold">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentIndex ? "bg-gold w-6" : "bg-white/30 hover:bg-white/50"
                )}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
