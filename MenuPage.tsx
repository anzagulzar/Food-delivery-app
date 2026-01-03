import { categories, foodItems } from '@/data/foodItems';
import FoodCard from '@/components/FoodCard';
import { useState } from 'react';

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = selectedCategory === 'All' 
    ? foodItems 
    : foodItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 bg-background/95 backdrop-blur-xl z-40 px-4 py-4 border-b border-border">
        <h1 className="text-2xl font-display font-bold text-foreground">Menu</h1>
        <p className="text-muted-foreground">Browse our delicious categories</p>
      </header>

      <main className="px-4 pt-4">
        {/* Categories Grid */}
        <section className="mb-6">
          <div className="grid grid-cols-2 gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.name)}
                className={`relative h-32 rounded-2xl overflow-hidden group transition-all duration-300 ${
                  selectedCategory === category.name ? 'ring-2 ring-primary' : ''
                }`}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-3xl mb-1 block">{category.icon}</span>
                  <span className="text-foreground font-semibold">{category.name}</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Category Filter Pills */}
        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide mb-4">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
              selectedCategory === 'All'
                ? 'gradient-maroon text-primary-foreground'
                : 'bg-secondary text-muted-foreground hover:text-foreground'
            }`}
          >
            All Items
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat.name
                  ? 'gradient-maroon text-primary-foreground'
                  : 'bg-secondary text-muted-foreground hover:text-foreground'
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        {/* Food Items */}
        <section>
          <h2 className="text-lg font-display font-semibold text-foreground mb-4">
            {selectedCategory === 'All' ? 'All Items' : selectedCategory}
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {filteredItems.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default MenuPage;
