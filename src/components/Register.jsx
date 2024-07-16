import { useState } from 'react';
import {  useNavigate } from "react-router-dom";
import useAxiosCommon from '../Hooks/useAxiosCommon';

const Register = () => {
  const navigate = useNavigate()
  const axiosCommon = useAxiosCommon()
  const [name, setName] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [pin, setPin] = useState('');
  const [role, setRole] = useState(''); // Add a state for the role

  const [cpin, setCpin] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleTermsClick = () => {
    // Handle terms and conditions click
    alert("Display your terms and conditions here.");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (pin !== cpin) {
      alert('PINs do not match');
      return;
    }

    if (pin.length !== 5) {
      alert('PIN must be exactly 5 digits long');
      return;
    }
    if (number.length !== 11) {  // Check if number has exactly 11 digits
      alert('Mobile number must be exactly 11 digits long');
      return;
    }

    if (!termsAccepted) {
      alert('You must accept the terms and conditions');
      return;
    }
    
    try {
      const response = await axiosCommon.post('/register', {
        name,
        lname,
        email,
        number,
        pin,
        role, // Add role to the request body
      });
      console.log(response.data.insertedId);
      if (response.data?.insertedId) {
        console.log('Registration successful');
        alert('Registration successful');
        navigate('/'); // Redirect to login page after successful registration
      } else {
        console.error('Error registering user:', response.data.message);
        alert('Registration failed');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Registration failed');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center font-[sans-serif] bg-gradient-to-r from-blue-800 to-blue-500 lg:h-screen p-6">
      <div className="grid md:grid-cols-2 items-center gap-y-8 bg-white max-w-7xl w-full shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md overflow-hidden">
        <div className="max-md:order-1 flex flex-col justify-center sm:p-8 p-4 bg-gradient-to-r from-blue-600 to-blue-700 w-full h-full">
          <div className="max-w-md space-y-12 mx-auto">
            <div>
              <h4 className="text-white text-lg font-semibold">Create Your Account</h4>
              <p className="text-[13px] text-white mt-2">Welcome to our registration page! Get started by creating your account.</p>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold">Simple & Secure Registration</h4>
              <p className="text-[13px] text-white mt-2">Our registration process is designed to be straightforward and secure. We prioritize your privacy and data security.</p>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold">Terms and Conditions Agreement</h4>
              <p className="text-[13px] text-white mt-2">Require users to accept the terms and conditions of your service during registration.</p>
            </div>
          </div>
        </div>

        <form className="sm:p-8 p-4 w-full" onSubmit={handleSubmit}>
          <div className="mb-12">
            <h3 className="text-blue-500 text-3xl font-extrabold max-md:text-center">Register</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <label className="text-gray-800 text-sm mb-2 block">First Name</label>
              <input
                name="name"
                type="text"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Last Name</label>
              <input
                name="lname"
                type="text"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter last name"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
              <input
                name="email"
                type="email"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Mobile No.</label>
              <input
                name="number"
                type="tel"  // Change type to 'tel' for better mobile input support
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter mobile number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">PIN</label>
              <input
                name="pin"
                type="password"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter 5-digit PIN"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                maxLength="5"
                required
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Confirm PIN</label>
              <input
                name="cpin"
                type="password"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Confirm 5-digit PIN"
                value={cpin}
                onChange={(e) => setCpin(e.target.value)}
                maxLength="5"
                required
              />
            </div>
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Role</label>
            <select
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            >
              <option value="">Select a role</option>
              <option value="user">User</option>
              <option value="agent">Agent</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div className="flex items-center mt-6">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="h-4 w-4 shrink-0 rounded"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
            <label htmlFor="terms" className="ml-3 block text-sm">
              I accept the <button type="button" onClick={handleTermsClick} className="text-blue-500 font-semibold hover:underline ml-1">Terms and Conditions</button>
            </label>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="py-3 px-6 text-sm tracking-wide font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition-all"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
