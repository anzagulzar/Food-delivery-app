import { offers } from '@/data/foodItems';
import { Button } from '@/components/ui/button';
import { Copy, Percent, Clock, ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';

const OffersPage = () => {
  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success('Code copied!', {
      description: code
    });
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 bg-background/95 backdrop-blur-xl z-40 px-4 py-4 border-b border-border">
        <h1 className="text-2xl font-display font-bold text-foreground">Offers</h1>
        <p className="text-muted-foreground">Exclusive deals for you</p>
      </header>

      <main className="px-4 pt-4">
        {/* Banner */}
        <div className="gradient-maroon rounded-2xl p-6 mb-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/20 rounded-full blur-2xl" />
          <div className="relative z-10">
            <Percent className="w-12 h-12 text-primary-foreground mb-4" />
            <h2 className="text-2xl font-display font-bold text-primary-foreground mb-2">
              Today's Special
            </h2>
            <p className="text-primary-foreground/80">
              Get amazing discounts on your favorite food
            </p>
          </div>
        </div>

        {/* Offers List */}
        <div className="space-y-4">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-card rounded-2xl p-5 border border-border relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{offer.title}</h3>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {offer.validTill}
                    </span>
                    <span className="flex items-center gap-1">
                      <ShoppingBag className="w-4 h-4" />
                      Min Rs. {offer.minOrder}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex-1 bg-secondary/50 rounded-lg px-4 py-3 border border-dashed border-border">
                  <span className="font-mono font-bold text-gradient-gold text-lg">{offer.code}</span>
                </div>
                <Button
                  variant="maroon"
                  onClick={() => copyCode(offer.code)}
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default OffersPage;
