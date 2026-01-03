import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Package, ChefHat, Bike, Home, CheckCircle } from 'lucide-react';

const steps = [
  { id: 1, label: 'Order Placed', icon: Package, completed: true },
  { id: 2, label: 'Preparing', icon: ChefHat, completed: true, active: true },
  { id: 3, label: 'On the Way', icon: Bike, completed: false },
  { id: 4, label: 'Delivered', icon: Home, completed: false },
];

const TrackingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 bg-background/95 backdrop-blur-xl z-40 px-4 py-4 border-b border-border flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="text-foreground">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div>
          <h1 className="text-xl font-display font-bold text-foreground">Track Order</h1>
          <p className="text-sm text-muted-foreground">Order #123456</p>
        </div>
      </header>

      <main className="px-4 pt-6">
        {/* Map placeholder */}
        <div className="relative h-48 bg-secondary rounded-2xl mb-6 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 gradient-maroon rounded-full flex items-center justify-center animate-pulse">
              <Bike className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 bg-card/90 backdrop-blur rounded-xl p-3">
            <p className="text-sm text-muted-foreground">Estimated arrival</p>
            <p className="text-foreground font-semibold">25-30 minutes</p>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="bg-card rounded-2xl p-6 border border-border">
          <h2 className="font-semibold text-foreground mb-6">Order Status</h2>
          
          <div className="relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="flex gap-4 mb-6 last:mb-0">
                  {/* Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-5 top-10 w-0.5 h-[calc(100%-40px)]">
                      <div
                        className={`w-full h-full ${
                          step.completed ? 'bg-primary' : 'bg-border'
                        }`}
                        style={{
                          height: `${(100 / (steps.length - 1))}%`,
                          top: `${(index * 100) / (steps.length - 1)}%`,
                        }}
                      />
                    </div>
                  )}
                  
                  {/* Icon */}
                  <div
                    className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      step.completed
                        ? 'gradient-maroon glow-maroon'
                        : step.active
                        ? 'bg-primary/20 border-2 border-primary'
                        : 'bg-secondary border-2 border-border'
                    }`}
                  >
                    {step.completed && !step.active ? (
                      <CheckCircle className="w-5 h-5 text-primary-foreground" />
                    ) : (
                      <Icon
                        className={`w-5 h-5 ${
                          step.completed || step.active ? 'text-primary-foreground' : 'text-muted-foreground'
                        }`}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`pt-2 ${step.active ? 'animate-pulse' : ''}`}>
                    <p className={`font-medium ${step.completed || step.active ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {step.label}
                    </p>
                    {step.active && (
                      <p className="text-sm text-primary mt-1">In progress...</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Rider Info */}
        <div className="bg-card rounded-2xl p-4 border border-border mt-4 flex items-center gap-4">
          <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center">
            <span className="text-2xl">👨‍🍳</span>
          </div>
          <div className="flex-1">
            <p className="font-semibold text-foreground">Ahmed Khan</p>
            <p className="text-sm text-muted-foreground">Your delivery rider</p>
          </div>
          <div className="w-12 h-12 gradient-maroon rounded-full flex items-center justify-center">
            <span className="text-xl">📞</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TrackingPage;
