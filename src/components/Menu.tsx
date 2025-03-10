
import React, { useState } from 'react';
import FadeIn from './animations/FadeIn';
import { cn } from '@/lib/utils';

type MenuCategory = 'starters' | 'mains' | 'desserts' | 'wines';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  featured?: boolean;
}

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('starters');
  
  const categories: { id: MenuCategory; label: string; }[] = [
    { id: 'starters', label: 'Starters' },
    { id: 'mains', label: 'Main Courses' },
    { id: 'desserts', label: 'Desserts' },
    { id: 'wines', label: 'Wine Selection' },
  ];

  const menuItems: Record<MenuCategory, MenuItem[]> = {
    starters: [
      {
        name: 'Dorset Crab Lasagne',
        description: 'Beurre Nantais & chives',
        price: '£24.50',
        featured: true,
      },
      {
        name: 'Heritage Beetroot Salad',
        description: 'Grilled Ragstone goat's cheese, red onion, watercress & aged balsamic',
        price: '£14.50',
      },
      {
        name: 'Citrus Cured Sea Trout',
        description: 'Avocado, cucumber & yuzu dressing',
        price: '£18.00',
      },
      {
        name: 'Steak Tartare',
        description: 'Hand cut Aberdeenshire beef, Savora mustard, cornichons & game chips',
        price: '£22.00',
      },
    ],
    mains: [
      {
        name: 'Roast Cornish Cod',
        description: 'Cauliflower, sea vegetables & caviar velouté',
        price: '£33.00',
        featured: true,
      },
      {
        name: 'Pan-Fried Fillet of Sea Bass',
        description: 'Squid & ink farfalle, baby artichokes & sea herbs',
        price: '£36.00',
      },
      {
        name: 'Breast of Suffolk Chicken',
        description: 'Cep mushrooms, braised leg, wild garlic & black truffle sauce',
        price: '£28.50',
      },
      {
        name: 'Saddle of Cumbrian Lamb',
        description: 'Spring vegetables, wild garlic pesto & rosemary jus',
        price: '£34.00',
      },
    ],
    desserts: [
      {
        name: 'Rhubarb Soufflé',
        description: 'Stem ginger ice cream',
        price: '£14.50',
        featured: true,
      },
      {
        name: 'Valrhona Chocolate Fondant',
        description: 'Salted caramel & vanilla ice cream',
        price: '£14.00',
      },
      {
        name: 'Apple Tart Tatin',
        description: 'Vanilla ice cream (for two)',
        price: '£26.00',
      },
      {
        name: 'Cheese Selection',
        description: 'Quince, celery, grapes & biscuits',
        price: '£16.50',
      },
    ],
    wines: [
      {
        name: 'Dom Pérignon Vintage 2012',
        description: 'Champagne, France',
        price: '£290',
      },
      {
        name: 'Domaine Leflaive, Puligny-Montrachet',
        description: 'Burgundy, France 2018',
        price: '£195',
      },
      {
        name: 'Château Mouton Rothschild',
        description: 'Bordeaux, France 2015',
        price: '£1,250',
      },
      {
        name: 'Screaming Eagle',
        description: 'Napa Valley, USA 2017',
        price: '£3,200',
      },
    ],
  };

  return (
    <section id="menu" className="py-24 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="text-gold uppercase tracking-[0.3em] text-sm">Seasonal Selection</span>
            <h2 className="text-3xl md:text-4xl font-serif mt-2 mb-6">Our Menu</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our menus showcase the finest seasonal ingredients, prepared with precision and creativity.
              Each dish is designed to offer a perfect balance of flavors and textures.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-6 py-2.5 transition-all duration-300 uppercase text-sm tracking-wider",
                  activeCategory === category.id
                    ? "bg-gold text-white"
                    : "bg-transparent border border-gold/30 text-gold hover:bg-gold/5"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          {menuItems[activeCategory].map((item, index) => (
            <FadeIn key={item.name} delay={0.1 * (index + 1)} duration={0.8}>
              <div className={cn(
                "flex justify-between py-6 border-b border-gold/10",
                item.featured && "bg-gold/5 px-4 -mx-4"
              )}>
                <div>
                  <div className="flex items-center">
                    <h3 className="font-serif text-xl md:text-2xl">
                      {item.name}
                    </h3>
                    {item.featured && (
                      <span className="ml-3 text-xs uppercase tracking-wider bg-gold/20 text-gold px-2 py-0.5">
                        Chef's Choice
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm mt-2">{item.description}</p>
                </div>
                <span className="text-gold font-serif text-xl ml-4 mt-1">{item.price}</span>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground mb-8 italic">
              Please inform your server of any allergies or dietary requirements
            </p>
            <a 
              href="#reserve" 
              className="bg-gold hover:bg-gold-dark text-white py-3.5 px-8 uppercase text-sm tracking-wider transition-all duration-300 inline-block"
            >
              Reserve a Table
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Menu;
