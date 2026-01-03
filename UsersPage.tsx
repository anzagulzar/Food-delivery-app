import { Users, Search, MoreVertical, UserCheck, UserX } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const users = [
  { id: 1, name: 'Ali Ahmed', email: 'ali@email.com', orders: 23, status: 'Active', joined: '2024-01-15' },
  { id: 2, name: 'Sara Khan', email: 'sara@email.com', orders: 45, status: 'Active', joined: '2024-02-20' },
  { id: 3, name: 'Hassan Raza', email: 'hassan@email.com', orders: 12, status: 'Inactive', joined: '2024-03-10' },
  { id: 4, name: 'Fatima Noor', email: 'fatima@email.com', orders: 67, status: 'Active', joined: '2024-01-05' },
  { id: 5, name: 'Ahmed Malik', email: 'ahmed@email.com', orders: 34, status: 'Active', joined: '2024-04-12' },
  { id: 6, name: 'Ayesha Tariq', email: 'ayesha@email.com', orders: 8, status: 'Inactive', joined: '2024-05-08' },
];

const UsersPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeUsers = users.filter(u => u.status === 'Active').length;
  const inactiveUsers = users.filter(u => u.status === 'Inactive').length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-display font-bold text-foreground">User Management</h1>
        <p className="text-muted-foreground">Manage your app users</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-card rounded-2xl p-5 border border-border">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 gradient-maroon rounded-xl flex items-center justify-center">
              <Users className="w-5 h-5 text-primary-foreground" />
            </div>
          </div>
          <p className="text-2xl font-bold text-foreground">{users.length}</p>
          <p className="text-sm text-muted-foreground">Total Users</p>
        </div>
        <div className="bg-card rounded-2xl p-5 border border-border">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
              <UserCheck className="w-5 h-5 text-green-400" />
            </div>
          </div>
          <p className="text-2xl font-bold text-foreground">{activeUsers}</p>
          <p className="text-sm text-muted-foreground">Active Users</p>
        </div>
        <div className="bg-card rounded-2xl p-5 border border-border">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center">
              <UserX className="w-5 h-5 text-red-400" />
            </div>
          </div>
          <p className="text-2xl font-bold text-foreground">{inactiveUsers}</p>
          <p className="text-sm text-muted-foreground">Inactive Users</p>
        </div>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          placeholder="Search users..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-12"
        />
      </div>

      {/* Users Table */}
      <div className="bg-card rounded-2xl p-6 border border-border">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">User</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Email</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Orders</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Joined</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Status</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-b border-border last:border-0 hover:bg-secondary/30 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 gradient-maroon rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                        {user.name.charAt(0)}
                      </div>
                      <span className="text-foreground font-medium">{user.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-muted-foreground">{user.email}</td>
                  <td className="py-4 px-4 text-foreground font-medium">{user.orders}</td>
                  <td className="py-4 px-4 text-muted-foreground">{user.joined}</td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      user.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <button className="text-muted-foreground hover:text-foreground transition-colors">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
