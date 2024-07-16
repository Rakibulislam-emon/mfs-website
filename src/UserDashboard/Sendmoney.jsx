
import  { useState } from 'react';

export default function SendMoney() {
    const [amount, setAmount] = useState('');
    const [recipientPhoneNumber, setRecipientPhoneNumber] = useState('');
    const [pin, setPin] = useState('');
    const handleSendMoney = (event) => {
        event.preventDefault();
        // Implement logic to send money request to backend
        console.log(`Send Money request: Amount - ${amount}, Recipient Phone Number - ${recipientPhoneNumber}, PIN - ${pin}`);
        // Clear form fields after submission
        setAmount('');
        setRecipientPhoneNumber('');
        setPin('');
      };
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="text-center">
              <h1 className="text-3xl font-semibold mb-4">Send Money</h1>
            </div>
            <form onSubmit={handleSendMoney} className="space-y-6">
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                  Amount to Send
                </label>
                <input
                  id="amount"
                  name="amount"
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter amount"
                  required
                />
              </div>
              <div>
                <label htmlFor="recipientPhoneNumber" className="block text-sm font-medium text-gray-700">
                  Recipient Phone Number
                </label>
                <input
                  id="recipientPhoneNumber"
                  name="recipientPhoneNumber"
                  type="text"
                  value={recipientPhoneNumber}
                  onChange={(e) => setRecipientPhoneNumber(e.target.value)}
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter recipient's phone number"
                  required
                />
              </div>
              <div>
                <label htmlFor="pin" className="block text-sm font-medium text-gray-700">
                  PIN
                </label>
                <input
                  id="pin"
                  name="pin"
                  type="password"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter your PIN"
                  required
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                >
                  Send Money
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
