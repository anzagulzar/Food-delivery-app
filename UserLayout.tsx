import { Outlet } from 'react-router-dom';
import BottomNav from '@/components/BottomNav';

const UserLayout = () => {
  return (
    <div className="max-w-lg mx-auto bg-background min-h-screen relative">
      <Outlet />
      <BottomNav />
    </div>
  );
};

export default UserLayout;
