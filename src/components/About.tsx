
import React from 'react';
import FadeIn from './animations/FadeIn';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-black">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <FadeIn direction="right">
              <div className="mb-6">
                <span className="text-gold uppercase tracking-[0.3em] text-sm">Our Story</span>
                <h2 className="text-3xl md:text-4xl font-serif mt-2 mb-6">A Tradition of Excellence</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Founded in 2008 by renowned chefs Chris and Jeff Galvin, our restaurant brings together 
                  years of culinary expertise and passion for exceptional ingredients. We've built our 
                  reputation on creating memorable dining experiences that celebrate the very best of 
                  contemporary cuisine with classical French influences.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Each dish is crafted with meticulous attention to detail, combining traditional techniques 
                  with innovative approaches to bring out the natural flavors of our carefully sourced ingredients.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <div className="text-center sm:text-left">
                  <p className="text-4xl font-serif text-gold">15</p>
                  <p className="text-sm uppercase tracking-wide">Years of Excellence</p>
                </div>
                <div className="h-12 w-px bg-gold/30 hidden sm:block"></div>
                <div className="text-center sm:text-left">
                  <p className="text-4xl font-serif text-gold">3</p>
                  <p className="text-sm uppercase tracking-wide">Michelin Stars</p>
                </div>
                <div className="h-12 w-px bg-gold/30 hidden sm:block"></div>
                <div className="text-center sm:text-left">
                  <p className="text-4xl font-serif text-gold">95%</p>
                  <p className="text-sm uppercase tracking-wide">Guest Satisfaction</p>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="order-1 lg:order-2 relative">
            <FadeIn direction="left">
              <div className="relative">
                <div className="aspect-[4/5] relative z-10 overflow-hidden rounded-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Chef preparing food" 
                    className="object-cover w-full h-full hover-scale"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-36 h-36 border-8 border-gold"></div>
                <div className="absolute -top-4 -left-4 w-36 h-36 border-8 border-gold"></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
