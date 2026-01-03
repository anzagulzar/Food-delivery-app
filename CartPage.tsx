import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const CartPage = () => {
  const { items, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error('Your cart is empty');
      return;
    }
    navigate('/user/checkout');
  };

  const deliveryFee = items.length > 0 ? 100 : 0;
  const grandTotal = totalPrice + deliveryFee;

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Header */}
      <header className="sticky top-0 bg-background/95 backdrop-blur-xl z-40 px-4 py-4 border-b border-border">
        <h1 className="text-2xl font-display font-bold text-foreground">My Cart</h1>
        <p className="text-muted-foreground">{items.length} items</p>
      </header>

      <main className="px-4 pt-4">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mb-4">
              <ShoppingBag className="w-12 h-12 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground text-center mb-6">
              Looks like you haven't added anything yet
            </p>
            <Button variant="maroon" onClick={() => navigate('/user')}>
              Browse Menu
            </Button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-card rounded-xl p-4 border border-border flex gap-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.restaurant}</p>
                    <p className="text-primary font-bold mt-1">Rs. {item.price}</p>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <div className="flex items-center gap-2 bg-secondary rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center text-foreground hover:text-primary"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-6 text-center font-medium text-foreground">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center text-foreground hover:text-primary"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Clear Cart */}
            <button
              onClick={clearCart}
              className="text-destructive text-sm flex items-center gap-2 mb-6"
            >
              <Trash2 className="w-4 h-4" />
              Clear Cart
            </button>
          </>
        )}
      </main>

      {/* Bottom Summary */}
      {items.length > 0 && (
        <div className="fixed bottom-16 left-0 right-0 bg-card border-t border-border p-4">
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-muted-foreground">
              <span>Subtotal</span>
              <span>Rs. {totalPrice}</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Delivery Fee</span>
              <span>Rs. {deliveryFee}</span>
            </div>
            <div className="flex justify-between text-foreground font-bold text-lg pt-2 border-t border-border">
              <span>Total</span>
              <span className="text-gradient-gold">Rs. {grandTotal}</span>
            </div>
          </div>
          <Button variant="maroon" size="lg" className="w-full" onClick={handleCheckout}>
            Proceed to Checkout
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
