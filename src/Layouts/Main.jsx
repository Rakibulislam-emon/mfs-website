import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

export default function Main() {
  const [showMenu, setShowMenu] = useState(false);
  const [role, setRole] = useState('');

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const token = localStorage?.getItem('token');

  useEffect(() => {
    if (!token) {
      return;
    }
    const decodedToken = jwtDecode(token);
    const role = decodedToken?.role;
    setRole(role);
    console.log('role:', role);
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <section className='lg:flex grid grid-cols-1  flex-wrap lg:flex-nowrap'>
      {/* Sidebar */}
      <div className='lg:w-56 xl:w-64 bg-white rounded-r-3xl overflow-hidden'>
        <link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />

        <div className="min-h-screen  flex flex-col bg-gray-100">
          <div className="flex items-center justify-center h-20 shadow-md">
            <h1 className="text-3xl uppercase text-indigo-500">Logo</h1>
            <button className="lg:hidden ml-auto mr-4 text-gray-500 hover:text-gray-800" onClick={toggleMenu}>
              <i className={showMenu ? "bx bx-x" : "bx bx-menu"}></i>
            </button>
          </div>
          <ul className={`flex flex-col py-4 ${showMenu ? 'block' : 'hidden lg:block'}`}>

            {role === "user" && <>
              <li>
                <Link to={'/dashBoard'} className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
                  <span className="text-sm font-medium">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to={'/dashBoard/send-money'} className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
                  <span className="text-sm font-medium">Send Money</span>
                </Link>
              </li>
              <li>
                <Link to={'/dashBoard/cashOut'} className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
                  <span className="text-sm font-medium">Cash Out</span>
                </Link>
              </li>
              <li>
                <Link to={'/dashBoard/cashIn'} className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
                  <span className="text-sm font-medium">Cash In</span>
                </Link>
              </li>
              <li>
                <Link to={'/dashBoard/balanceInquiry'} className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
                  <span className="text-sm font-medium">Balance Inquiry</span>
                </Link>
              </li>
              <li>
                <Link to={'/dashBoard/transactionHistory'} className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
                  <span className="text-sm font-medium">Transaction History</span>
                </Link>
              </li>
            </>}
            
            {role === 'agent' &&
              <>
                <li>
                  <Link to={'/Dashboard'} className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
                    <span className="text-sm font-medium">Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link to={'/dashBoard/agentTransactions'} className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
                    <span className="text-sm font-medium">Transactions Management</span>
                  </Link>
                </li>
                <li>
                  <Link to={'/dashBoard/agentBalance'} className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
                    <span className="text-sm font-medium">Balance Inquiry</span>
                  </Link>
                </li>
                <li>
                  <Link to={'/dashBoard/agentTransactionHistory'} className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
                    <span className="text-sm font-medium">Transactions history</span>
                  </Link>
                </li>
              </>}
            
            {role === "admin" && <>
              <li>
                <Link to={'/dashBoard'} className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
                  <span className="text-sm font-medium">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to={'/dashBoard/userManagement'} className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
                  <span className="text-sm font-medium">User Management</span>
                </Link>
              </li>
              <li>
                <Link to={'/dashBoard/systemMonitoring'} className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
                  <span className="text-sm font-medium">System Monitoring</span>
                </Link>
              </li>
            </>}

            <li>
              <button onClick={handleLogout} className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-log-out"></i></span>
                <span className="text-sm font-medium">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Content section */}
      <div className={`lg:flex-1 p-4  ${showMenu ? 'hidden' : 'block'}`}>
        <Outlet />
      </div>
    </section>
  );
}
