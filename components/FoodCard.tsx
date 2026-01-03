import { FoodItem } from '@/data/foodItems';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Star, Plus, Heart } from 'lucide-react';
import { toast } from 'sonner';
import { useState } from 'react';

interface FoodCardProps {
  item: FoodItem;
}

const FoodCard = ({ item }: FoodCardProps) => {
  const { addToCart } = useCart();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      restaurant: item.restaurant
    });
    toast.success('Added to cart!', {
      description: item.name
    });
  };

  return (
    <div className="bg-card rounded-2xl overflow-hidden border border-border group hover:border-primary/30 transition-all duration-300 animate-scale-in">
      {/* Image */}
      <div className="relative h-36 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        
        {/* Favorite button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 w-8 h-8 bg-background/80 backdrop-blur rounded-full flex items-center justify-center transition-colors hover:bg-background"
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-primary text-primary' : 'text-foreground'}`} />
        </button>

        {/* Popular badge */}
        {item.isPopular && (
          <div className="absolute top-3 left-3 px-2 py-1 bg-gold text-accent-foreground text-xs font-semibold rounded-full">
            Popular
          </div>
        )}

        {/* Rating */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1 px-2 py-1 bg-background/80 backdrop-blur rounded-full">
          <Star className="w-3 h-3 fill-gold text-gold" />
          <span className="text-xs font-medium text-foreground">{item.rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground truncate">{item.name}</h3>
        <p className="text-sm text-muted-foreground truncate">{item.restaurant}</p>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{item.description}</p>

        <div className="flex items-center justify-between mt-4">
          <div>
            <span className="text-lg font-bold text-gradient-gold">Rs. {item.price}</span>
          </div>
          <Button
            variant="maroon"
            size="icon"
            onClick={handleAddToCart}
            className="rounded-full w-10 h-10"
          >
            <Plus className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
