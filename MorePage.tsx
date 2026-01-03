import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { 
  Settings, 
  Bell, 
  Info, 
  LogOut, 
  ChevronRight,
  HelpCircle,
  Shield,
  FileText
} from 'lucide-react';

const menuItems = [
  { icon: Settings, label: 'Settings', path: '/settings' },
  { icon: Bell, label: 'Notifications', path: '/notifications' },
  { icon: HelpCircle, label: 'Help & Support', path: '/help' },
  { icon: Shield, label: 'Privacy Policy', path: '/privacy' },
  { icon: FileText, label: 'Terms of Service', path: '/terms' },
  { icon: Info, label: 'About Us', path: '/about' },
];

const MorePage = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 bg-background/95 backdrop-blur-xl z-40 px-4 py-4 border-b border-border">
        <h1 className="text-2xl font-display font-bold text-foreground">More</h1>
        <p className="text-muted-foreground">Settings and info</p>
      </header>

      <main className="px-4 pt-4">
        {/* Menu Items */}
        <div className="bg-card rounded-2xl border border-border overflow-hidden mb-6">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className={`w-full flex items-center justify-between p-4 hover:bg-secondary/50 transition-colors ${
                  index !== menuItems.length - 1 ? 'border-b border-border' : ''
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                    <Icon className="w-5 h-5 text-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{item.label}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </button>
            );
          })}
        </div>

        {/* About */}
        <div className="bg-card rounded-2xl p-6 border border-border mb-6">
          <h3 className="font-semibold text-foreground mb-2">About Foodie</h3>
          <p className="text-muted-foreground text-sm mb-4">
            Foodie is your go-to app for delicious food delivery. We connect you with the best restaurants 
            in your city, ensuring fresh and tasty meals delivered right to your doorstep.
          </p>
          <p className="text-sm text-muted-foreground">Version 1.0.0</p>
        </div>

        {/* Logout */}
        <Button
          variant="outline"
          size="lg"
          className="w-full border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
          onClick={handleLogout}
        >
          <LogOut className="w-5 h-5 mr-2" />
          Logout
        </Button>
      </main>
    </div>
  );
};

export default MorePage;
