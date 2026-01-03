import { NavLink, useLocation } from 'react-router-dom';
import { Home, Grid3X3, ShoppingCart, Percent, User, MoreHorizontal } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const navItems = [
  { path: '/user', icon: Home, label: 'Home' },
  { path: '/user/menu', icon: Grid3X3, label: 'Menu' },
  { path: '/user/cart', icon: ShoppingCart, label: 'Cart', showBadge: true },
  { path: '/user/offers', icon: Percent, label: 'Offers' },
  { path: '/user/profile', icon: User, label: 'Profile' },
  { path: '/user/more', icon: MoreHorizontal, label: 'More' },
];

const BottomNav = () => {
  const location = useLocation();
  const { totalItems } = useCart();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-xl border-t border-border z-50">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
        {navItems.map(({ path, icon: Icon, label, showBadge }) => {
          const isActive = location.pathname === path;
          
          return (
            <NavLink
              key={path}
              to={path}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-all duration-200 relative ${
                isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 ${isActive ? 'scale-110' : ''} transition-transform`} />
                {showBadge && totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 w-4 h-4 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                    {totalItems > 9 ? '9+' : totalItems}
                  </span>
                )}
              </div>
              <span className={`text-[10px] mt-1 font-medium ${isActive ? 'text-primary' : ''}`}>
                {label}
              </span>
              {isActive && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary rounded-full" />
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
