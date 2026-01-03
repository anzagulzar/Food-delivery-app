import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, MapPin, Clock, Home } from 'lucide-react';
import { useEffect, useState } from 'react';

const OrderSuccessPage = () => {
  const navigate = useNavigate();
  const [orderNumber] = useState(() => Math.floor(100000 + Math.random() * 900000));

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      {/* Success Animation */}
      <div className="relative mb-8">
        <div className="w-32 h-32 gradient-maroon rounded-full flex items-center justify-center glow-maroon animate-scale-in">
          <CheckCircle className="w-16 h-16 text-primary-foreground" />
        </div>
        <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-ping" />
      </div>

      <h1 className="text-3xl font-display font-bold text-foreground mb-2 animate-fade-in">
        Order Placed!
      </h1>
      <p className="text-muted-foreground text-center mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
        Your order has been confirmed and is being prepared
      </p>

      {/* Order Info Card */}
      <div className="w-full max-w-sm bg-card rounded-2xl p-6 border border-border mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <div className="text-center mb-4">
          <p className="text-muted-foreground text-sm">Order Number</p>
          <p className="text-2xl font-bold text-gradient-gold">#{orderNumber}</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-4 p-3 bg-secondary/50 rounded-xl">
            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Estimated Time</p>
              <p className="text-foreground font-medium">30-45 minutes</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-3 bg-secondary/50 rounded-xl">
            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Delivering to</p>
              <p className="text-foreground font-medium">Your saved address</p>
            </div>
          </div>
        </div>
      </div>

      {/* Track Order Button */}
      <Button
        variant="maroon"
        size="lg"
        className="w-full max-w-sm mb-4"
        onClick={() => navigate('/user/tracking')}
      >
        Track Order
      </Button>

      <Button
        variant="outline"
        size="lg"
        className="w-full max-w-sm"
        onClick={() => navigate('/user')}
      >
        <Home className="w-5 h-5 mr-2" />
        Back to Home
      </Button>
    </div>
  );
};

export default OrderSuccessPage;
