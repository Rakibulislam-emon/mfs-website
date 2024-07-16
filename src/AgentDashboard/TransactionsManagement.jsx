import React, { useState } from 'react';

// Sample initial requests data
const initialRequests = [
  { id: 1, type: 'Cash-in', date: '2024-07-15', amount: '$500.00', customer: 'Customer A' },
  { id: 2, type: 'Cash-out', date: '2024-07-14', amount: '$50.00', customer: 'Customer B' },
];

const TransactionsManagement = () => {
  const [requests, setRequests] = useState(initialRequests);
  const [transactions, setTransactions] = useState([]);

  const handleApprove = (id) => {
    // Find the request to approve
    const approvedRequest = requests.find((request) => request.id === id);
    if (approvedRequest) {
      // Add to transactions history
      const newTransaction = {
        id: transactions.length + 1,
        type: approvedRequest.type,
        date: approvedRequest.date,
        amount: approvedRequest.amount,
        customer: approvedRequest.customer,
      };
      setTransactions([...transactions, newTransaction]);

      // Remove from requests
      const updatedRequests = requests.filter((request) => request.id !== id);
      setRequests(updatedRequests);
    }
  };

  const handleCancel = (id) => {
    // Remove the request from the list
    const updatedRequests = requests.filter((request) => request.id !== id);
    setRequests(updatedRequests);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Agent Transaction Management</h2>

      {/* Requests List */}
      <div className="overflow-x-auto mb-4">
        <h3 className="text-xl font-semibold mb-2">Pending Requests</h3>
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Type</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Amount</th>
              <th className="border border-gray-300 px-4 py-2">Customer</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request.id}>
                <td className="border border-gray-300 px-4 py-2">{request.id}</td>
                <td className="border border-gray-300 px-4 py-2">{request.type}</td>
                <td className="border border-gray-300 px-4 py-2">{request.date}</td>
                <td className="border border-gray-300 px-4 py-2">{request.amount}</td>
                <td className="border border-gray-300 px-4 py-2">{request.customer}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => handleApprove(request.id)}
                    className="bg-green-500 hover:bg-green-600 text-white rounded px-4 py-2 mr-2 focus:outline-none"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleCancel(request.id)}
                    className="bg-red-500 hover:bg-red-600 text-white rounded px-4 py-2 focus:outline-none"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Transaction History */}
      <div className="overflow-x-auto">
        <h3 className="text-xl font-semibold mb-2">Transactions History</h3>
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Type</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Amount</th>
              <th className="border border-gray-300 px-4 py-2">Customer</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="border border-gray-300 px-4 py-2">{transaction.id}</td>
                <td className="border border-gray-300 px-4 py-2">{transaction.type}</td>
                <td className="border border-gray-300 px-4 py-2">{transaction.date}</td>
                <td className="border border-gray-300 px-4 py-2">{transaction.amount}</td>
                <td className="border border-gray-300 px-4 py-2">{transaction.customer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsManagement;
