import { Receipt, Download, Calendar, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';

const transactions = [
  { id: 'TXN001', date: '2024-12-19', customer: 'Ali Ahmed', amount: 1250, method: 'Cash', status: 'Completed' },
  { id: 'TXN002', date: '2024-12-19', customer: 'Sara Khan', amount: 850, method: 'Card', status: 'Completed' },
  { id: 'TXN003', date: '2024-12-18', customer: 'Hassan Raza', amount: 1680, method: 'Cash', status: 'Completed' },
  { id: 'TXN004', date: '2024-12-18', customer: 'Fatima Noor', amount: 450, method: 'Card', status: 'Pending' },
  { id: 'TXN005', date: '2024-12-17', customer: 'Ahmed Malik', amount: 2100, method: 'Cash', status: 'Completed' },
  { id: 'TXN006', date: '2024-12-17', customer: 'Ayesha Tariq', amount: 780, method: 'Card', status: 'Refunded' },
];

const BillingPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-foreground">Billing</h1>
          <p className="text-muted-foreground">View all transactions</p>
        </div>
        <Button variant="maroon">
          <Download className="w-4 h-4 mr-2" />
          Export
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card rounded-2xl p-5 border border-border">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 gradient-maroon rounded-xl flex items-center justify-center">
              <Receipt className="w-5 h-5 text-primary-foreground" />
            </div>
          </div>
          <p className="text-2xl font-bold text-foreground">Rs. 156,000</p>
          <p className="text-sm text-muted-foreground">Total Revenue</p>
        </div>
        <div className="bg-card rounded-2xl p-5 border border-border">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 gradient-gold rounded-xl flex items-center justify-center">
              <Calendar className="w-5 h-5 text-accent-foreground" />
            </div>
          </div>
          <p className="text-2xl font-bold text-foreground">Rs. 45,600</p>
          <p className="text-sm text-muted-foreground">This Week</p>
        </div>
        <div className="bg-card rounded-2xl p-5 border border-border">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-green-400" />
            </div>
          </div>
          <p className="text-2xl font-bold text-foreground">342</p>
          <p className="text-sm text-muted-foreground">Transactions</p>
        </div>
        <div className="bg-card rounded-2xl p-5 border border-border">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <Receipt className="w-5 h-5 text-blue-400" />
            </div>
          </div>
          <p className="text-2xl font-bold text-foreground">Rs. 2,340</p>
          <p className="text-sm text-muted-foreground">Avg. Order</p>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-card rounded-2xl p-6 border border-border">
        <h2 className="text-lg font-semibold text-foreground mb-4">Recent Transactions</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Transaction ID</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Date</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Customer</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Amount</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Method</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn) => (
                <tr key={txn.id} className="border-b border-border last:border-0 hover:bg-secondary/30 transition-colors">
                  <td className="py-4 px-4 text-foreground font-medium">{txn.id}</td>
                  <td className="py-4 px-4 text-muted-foreground">{txn.date}</td>
                  <td className="py-4 px-4 text-foreground">{txn.customer}</td>
                  <td className="py-4 px-4 text-foreground font-semibold">Rs. {txn.amount}</td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-lg text-xs font-medium ${
                      txn.method === 'Cash' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {txn.method}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      txn.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                      txn.status === 'Pending' ? 'bg-gold/20 text-gold' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {txn.status}
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

export default BillingPage;
