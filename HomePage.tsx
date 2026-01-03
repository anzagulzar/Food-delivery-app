import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { foodItems, categories } from '@/data/foodItems';
import FoodCard from '@/components/FoodCard';
import { MapPin, ShoppingCart, Heart, Search, ChevronRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const HomePage = () => {
  const { user } = useAuth();
  const { totalItems } = useCart();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = foodItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const popularItems = foodItems.filter(item => item.isPopular);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 bg-background/95 backdrop-blur-xl z-40 px-4 py-4 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-muted-foreground">Deliver to</p>
            <div className="flex items-center gap-1 text-foreground font-medium">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Karachi, Pakistan</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-foreground" />
            </button>
            <Link to="/user/cart" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center relative">
              <ShoppingCart className="w-5 h-5 text-foreground" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Welcome */}
        <div className="mb-4">
          <h1 className="text-2xl font-display font-bold text-foreground">
            Hello, <span className="text-gradient-gold">{user?.name}</span>
          </h1>
          <p className="text-muted-foreground">What would you like to eat?</p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search for food..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12"
          />
        </div>
      </header>

      <main className="px-4 pt-4">
        {/* Categories */}
        <section className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-display font-semibold text-foreground">Categories</h2>
            <Link to="/user/menu" className="text-primary text-sm flex items-center gap-1">
              See All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <Link
                key={category.id}
                to="/user/menu"
                className="flex-shrink-0 flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-2xl overflow-hidden mb-2 border-2 border-border hover:border-primary transition-colors">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs text-foreground font-medium">{category.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Popular Items */}
        {!searchQuery && (
          <section className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-display font-semibold text-foreground">🔥 Popular Now</h2>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {popularItems.map((item) => (
                <div key={item.id} className="flex-shrink-0 w-44">
                  <FoodCard item={item} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* All Items */}
        <section>
          <h2 className="text-lg font-display font-semibold text-foreground mb-4">
            {searchQuery ? 'Search Results' : 'All Items'}
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {filteredItems.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No items found</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default HomePage;
