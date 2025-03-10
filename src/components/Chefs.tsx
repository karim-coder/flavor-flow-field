
import React from 'react';
import FadeIn from './animations/FadeIn';
import { Instagram, Twitter } from 'lucide-react';

interface ChefCardProps {
  name: string;
  role: string;
  image: string;
  delay: number;
  instagram?: string;
  twitter?: string;
}

const ChefCard: React.FC<ChefCardProps> = ({ 
  name, 
  role, 
  image, 
  delay, 
  instagram, 
  twitter 
}) => {
  return (
    <FadeIn delay={delay} direction="up" duration={0.9}>
      <div className="group relative overflow-hidden">
        <div className="relative h-[450px] overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
            <div className="flex space-x-4 mb-4">
              {instagram && (
                <a href={instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors">
                  <Instagram size={20} />
                </a>
              )}
              {twitter && (
                <a href={twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors">
                  <Twitter size={20} />
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="p-6 bg-white dark:bg-black border-b border-gold/20">
          <h3 className="font-serif text-xl mb-1">{name}</h3>
          <p className="text-muted-foreground text-sm uppercase tracking-wider">{role}</p>
        </div>
      </div>
    </FadeIn>
  );
};

const Chefs: React.FC = () => {
  return (
    <section id="chefs" className="py-20 bg-white dark:bg-black">
      <div className="section-container">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="text-gold uppercase tracking-[0.3em] text-sm">Culinary Artistry</span>
            <h2 className="text-3xl md:text-4xl font-serif mt-2 mb-6">Meet Our Chefs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our team of award-winning chefs combine classical techniques with contemporary innovation to create exceptional dining experiences.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <ChefCard 
            name="Chris Galvin" 
            role="Executive Chef" 
            image="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1977&q=80" 
            delay={0.1}
            instagram="https://instagram.com"
            twitter="https://twitter.com"
          />
          <ChefCard 
            name="Jeff Galvin" 
            role="Head Chef" 
            image="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
            delay={0.2}
            instagram="https://instagram.com"
          />
          <ChefCard 
            name="Emma Reynolds" 
            role="Pastry Chef" 
            image="https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80" 
            delay={0.3}
            twitter="https://twitter.com"
          />
        </div>
      </div>
    </section>
  );
};

export default Chefs;
