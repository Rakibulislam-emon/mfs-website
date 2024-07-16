import React, { useState } from 'react';

// Sample initial transactions data
const initialTransactions = [
  { id: 1, type: 'Cash-in', date: '2024-07-15', amount: '$500.00', customer: 'Customer A' },
  { id: 2, type: 'Cash-out', date: '2024-07-14', amount: '$50.00', customer: 'Customer B' },
  { id: 3, type: 'Transfer', date: '2024-07-13', amount: '$100.00', customer: 'Customer C' },
  { id: 4, type: 'Payment', date: '2024-07-12', amount: '$300.00', customer: 'Customer D' },
  { id: 5, type: 'Cash-in', date: '2024-07-11', amount: '$200.00', customer: 'Customer E' },
];

const AgentTransactionHistory = () => {
  const [transactions, setTransactions] = useState(initialTransactions);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Agent Transaction History</h2>

      {/* Transaction History */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Customer</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">{transaction.id}</td>
                <td className="px-4 py-3">{transaction.type}</td>
                <td className="px-4 py-3">{transaction.date}</td>
                <td className="px-4 py-3">{transaction.amount}</td>
                <td className="px-4 py-3">{transaction.customer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgentTransactionHistory;
