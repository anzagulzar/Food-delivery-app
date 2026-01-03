import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { ShoppingBag, DollarSign, Users, TrendingUp } from 'lucide-react';

const revenueData = [
  { name: 'Mon', revenue: 12000 },
  { name: 'Tue', revenue: 19000 },
  { name: 'Wed', revenue: 15000 },
  { name: 'Thu', revenue: 22000 },
  { name: 'Fri', revenue: 28000 },
  { name: 'Sat', revenue: 35000 },
  { name: 'Sun', revenue: 30000 },
];

const ordersData = [
  { name: 'Mon', orders: 45 },
  { name: 'Tue', orders: 62 },
  { name: 'Wed', orders: 55 },
  { name: 'Thu', orders: 78 },
  { name: 'Fri', orders: 95 },
  { name: 'Sat', orders: 110 },
  { name: 'Sun', orders: 88 },
];

const stats = [
  { label: "Today's Orders", value: '156', change: '+12%', icon: ShoppingBag, color: 'primary' },
  { label: "Today's Revenue", value: 'Rs. 45,600', change: '+8%', icon: DollarSign, color: 'gold' },
  { label: 'Active Users', value: '1,234', change: '+5%', icon: Users, color: 'primary' },
  { label: 'Growth Rate', value: '23%', change: '+2%', icon: TrendingUp, color: 'gold' },
];

const DashboardPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-display font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, Admin!</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-card rounded-2xl p-5 border border-border"
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  stat.color === 'gold' ? 'gradient-gold' : 'gradient-maroon'
                }`}>
                  <Icon className={`w-6 h-6 ${stat.color === 'gold' ? 'text-accent-foreground' : 'text-primary-foreground'}`} />
                </div>
                <span className="text-sm text-green-500 font-medium">{stat.change}</span>
              </div>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-card rounded-2xl p-6 border border-border">
          <h2 className="text-lg font-semibold text-foreground mb-4">Weekly Revenue</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(345, 61%, 30%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(345, 61%, 30%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 18%)" />
                <XAxis dataKey="name" stroke="hsl(0, 0%, 60%)" />
                <YAxis stroke="hsl(0, 0%, 60%)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(0, 0%, 7%)',
                    border: '1px solid hsl(0, 0%, 18%)',
                    borderRadius: '12px',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="hsl(345, 61%, 30%)"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorRevenue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Orders Chart */}
        <div className="bg-card rounded-2xl p-6 border border-border">
          <h2 className="text-lg font-semibold text-foreground mb-4">Daily Orders</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ordersData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 18%)" />
                <XAxis dataKey="name" stroke="hsl(0, 0%, 60%)" />
                <YAxis stroke="hsl(0, 0%, 60%)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(0, 0%, 7%)',
                    border: '1px solid hsl(0, 0%, 18%)',
                    borderRadius: '12px',
                  }}
                />
                <Bar dataKey="orders" fill="hsl(43, 74%, 52%)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-card rounded-2xl p-6 border border-border">
        <h2 className="text-lg font-semibold text-foreground mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Order ID</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Customer</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Items</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Amount</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: '#12345', customer: 'Ali Ahmed', items: 3, amount: 1250, status: 'Delivered' },
                { id: '#12346', customer: 'Sara Khan', items: 2, amount: 850, status: 'Preparing' },
                { id: '#12347', customer: 'Hassan Raza', items: 4, amount: 1680, status: 'On the Way' },
                { id: '#12348', customer: 'Fatima Noor', items: 1, amount: 450, status: 'Pending' },
              ].map((order) => (
                <tr key={order.id} className="border-b border-border last:border-0">
                  <td className="py-3 px-4 text-foreground font-medium">{order.id}</td>
                  <td className="py-3 px-4 text-foreground">{order.customer}</td>
                  <td className="py-3 px-4 text-foreground">{order.items}</td>
                  <td className="py-3 px-4 text-foreground">Rs. {order.amount}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      order.status === 'Delivered' ? 'bg-green-500/20 text-green-400' :
                      order.status === 'Preparing' ? 'bg-gold/20 text-gold' :
                      order.status === 'On the Way' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      {order.status}
                    </span>
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

export default DashboardPage;
