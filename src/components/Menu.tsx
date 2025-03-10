
import React, { useState } from 'react';
import FadeIn from './animations/FadeIn';
import { cn } from '@/lib/utils';

type MenuCategory = 'starters' | 'mains' | 'desserts' | 'wines';

interface MenuItem {
  name: string;
  description: string;
  price: string;
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
        name: 'Seared Scallops',
        description: 'Hand-dived scallops, pea purée, crispy pancetta, mint oil',
        price: '$24',
      },
      {
        name: 'Foie Gras Terrine',
        description: 'House-made terrine, brioche, fig chutney, mixed leaves',
        price: '$28',
      },
      {
        name: 'Heirloom Tomato Salad',
        description: 'Burrata, basil emulsion, aged balsamic, pine nuts',
        price: '$18',
      },
      {
        name: 'Beef Tartare',
        description: 'Hand-cut prime beef, capers, shallots, egg yolk, sourdough crisps',
        price: '$22',
      },
    ],
    mains: [
      {
        name: 'Dry-Aged Beef Fillet',
        description: 'Fondant potatoes, wild mushrooms, red wine jus, bone marrow butter',
        price: '$48',
      },
      {
        name: 'Dover Sole',
        description: 'Brown shrimp, capers, beurre noisette, seasonal greens',
        price: '$52',
      },
      {
        name: 'Lamb Rack',
        description: 'Herb crust, confit shoulder croquette, pea purée, rosemary jus',
        price: '$42',
      },
      {
        name: 'Risotto Primavera',
        description: 'Seasonal vegetables, pecorino, white truffle oil, micro herbs',
        price: '$32',
      },
    ],
    desserts: [
      {
        name: 'Dark Chocolate Delice',
        description: 'Salted caramel, hazelnut praline, vanilla ice cream',
        price: '$16',
      },
      {
        name: 'Lemon Tart',
        description: 'Italian meringue, raspberry sorbet, candied lemon',
        price: '$14',
      },
      {
        name: 'Crème Brûlée',
        description: 'Tahitian vanilla, shortbread, seasonal berries',
        price: '$14',
      },
      {
        name: 'Selection of Cheeses',
        description: 'Artisanal cheeses, grapes, chutney, crackers',
        price: '$22',
      },
    ],
    wines: [
      {
        name: 'Dom Pérignon Vintage 2012',
        description: 'Champagne, France - Elegant, with notes of brioche and citrus',
        price: '$290',
      },
      {
        name: 'Puligny-Montrachet 1er Cru',
        description: 'Burgundy, France - Refined, mineral-driven with notes of white flowers',
        price: '$175',
      },
      {
        name: 'Château Margaux 2015',
        description: 'Bordeaux, France - Complex, elegant with silky tannins',
        price: '$980',
      },
      {
        name: 'Tignanello 2018',
        description: 'Tuscany, Italy - Bold, with black cherry and spice notes',
        price: '$210',
      },
    ],
  };

  return (
    <section id="menu" className="py-20 bg-secondary/50">
      <div className="section-container">
        <div className="text-center mb-12">
          <FadeIn>
            <span className="text-gold uppercase tracking-[0.3em] text-sm">Culinary Experience</span>
            <h2 className="text-3xl md:text-4xl font-serif mt-2 mb-6">Our Menu</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully crafted menu featuring seasonal ingredients and exceptional flavors.
              Each dish is prepared with passion and precision by our talented culinary team.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-6 py-2 rounded-sm transition-all duration-300",
                  activeCategory === category.id
                    ? "bg-gold text-white"
                    : "bg-transparent border border-gold/50 text-gold hover:bg-gold/10"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2">
          {menuItems[activeCategory].map((item, index) => (
            <FadeIn key={item.name} delay={0.1 * (index + 1)}>
              <div className="flex justify-between border-b border-gold/20 pb-4 mb-4">
                <div>
                  <h3 className="font-serif text-xl mb-1">{item.name}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
                <span className="text-gold font-serif ml-4">{item.price}</span>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <div className="mt-16 text-center">
            <a 
              href="#reserve" 
              className="bg-gold hover:bg-gold-dark text-white py-3 px-8 rounded-sm tracking-wide transition-all duration-300 inline-block"
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
