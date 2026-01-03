import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, MapPin, CreditCard, Wallet, Check } from 'lucide-react';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [isOrdering, setIsOrdering] = useState(false);

  const deliveryFee = 100;
  const grandTotal = totalPrice + deliveryFee;

  const handleOrder = async () => {
    setIsOrdering(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    clearCart();
    navigate('/user/order-success');
  };

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Header */}
      <header className="sticky top-0 bg-background/95 backdrop-blur-xl z-40 px-4 py-4 border-b border-border flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="text-foreground">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div>
          <h1 className="text-xl font-display font-bold text-foreground">Checkout</h1>
          <p className="text-sm text-muted-foreground">Confirm your order</p>
        </div>
      </header>

      <main className="px-4 pt-4 space-y-6">
        {/* Delivery Address */}
        <section className="bg-card rounded-xl p-4 border border-border">
          <h2 className="font-semibold text-foreground flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-primary" />
            Delivery Address
          </h2>
          <Input placeholder="Enter your full address" className="mb-3" />
          <Input placeholder="Phone number" type="tel" />
        </section>

        {/* Order Summary */}
        <section className="bg-card rounded-xl p-4 border border-border">
          <h2 className="font-semibold text-foreground mb-4">Order Summary</h2>
          <div className="space-y-3">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <p className="text-foreground font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">x{item.quantity}</p>
                  </div>
                </div>
                <span className="text-foreground font-medium">
                  Rs. {item.price * item.quantity}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Payment Method */}
        <section className="bg-card rounded-xl p-4 border border-border">
          <h2 className="font-semibold text-foreground mb-4">Payment Method</h2>
          <div className="space-y-3">
            <button
              onClick={() => setPaymentMethod('cod')}
              className={`w-full p-4 rounded-xl border flex items-center justify-between transition-all ${
                paymentMethod === 'cod'
                  ? 'border-primary bg-primary/10'
                  : 'border-border bg-secondary/50'
              }`}
            >
              <div className="flex items-center gap-3">
                <Wallet className="w-5 h-5 text-foreground" />
                <span className="text-foreground">Cash on Delivery</span>
              </div>
              {paymentMethod === 'cod' && (
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary-foreground" />
                </div>
              )}
            </button>
            <button
              onClick={() => setPaymentMethod('card')}
              className={`w-full p-4 rounded-xl border flex items-center justify-between transition-all ${
                paymentMethod === 'card'
                  ? 'border-primary bg-primary/10'
                  : 'border-border bg-secondary/50'
              }`}
            >
              <div className="flex items-center gap-3">
                <CreditCard className="w-5 h-5 text-foreground" />
                <span className="text-foreground">Credit/Debit Card</span>
              </div>
              {paymentMethod === 'card' && (
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary-foreground" />
                </div>
              )}
            </button>
          </div>
        </section>
      </main>

      {/* Bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4">
        <div className="flex justify-between mb-4">
          <span className="text-foreground font-bold">Total</span>
          <span className="text-xl font-bold text-gradient-gold">Rs. {grandTotal}</span>
        </div>
        <Button
          variant="maroon"
          size="lg"
          className="w-full"
          onClick={handleOrder}
          disabled={isOrdering}
        >
          {isOrdering ? (
            <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
          ) : (
            'Place Order'
          )}
        </Button>
      </div>
    </div>
  );
};

export default CheckoutPage;
