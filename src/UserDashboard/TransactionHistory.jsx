
const TransactionHistory = () => {
  // Static array of transactions (replace with your actual data structure)
  const transactions = [
    { name: 'Payment from Client A', date: '2024-07-15', amount: '$500.00' },
    { name: 'Purchase at Store B', date: '2024-07-14', amount: '$50.00' },
    { name: 'Withdrawal from ATM', date: '2024-07-13', amount: '$100.00' },
    { name: 'Payment from Client C', date: '2024-07-12', amount: '$300.00' },
    { name: 'Online Payment', date: '2024-07-11', amount: '$200.00' },
  ];

  return (
    <div className="font-sans">
      <ul className="divide-y divide-gray-200">
        {transactions.map((transaction, index) => (
          <li key={index} className="py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="font-semibold">{transaction.name}</span>
                <span className="ml-2 text-sm text-gray-500">{transaction.date}</span>
              </div>
              <div className="flex items-center">
                <span className="ml-2 text-sm text-gray-500">{transaction.amount}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
