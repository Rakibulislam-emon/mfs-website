import { useState } from 'react';
import useAxiosCommon from '../Hooks/useAxiosCommon';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const axiosCommon = useAxiosCommon()
  const [credential, setCredential] = useState('');
  const [pin, setPin] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosCommon.post('/login', {
        credential,
        pin,
      });
      const { token } = response.data;
      console.log('token:', token)
      localStorage.setItem('token', token);
      // Redirect or perform any action after successful login
      alert('Login successful!');
      navigate('/dashBoard')
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Login failed. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'credential') setCredential(value);
    if (name === 'pin') setPin(value);
  };

  return (
    <div className="font-[sans-serif] bg-white">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 items-center">
        <form className="lg:col-span-3 md:col-span-2 max-w-lg w-full p-6 mx-auto" onSubmit={handleSubmit}>
          <div className="mb-12">
            <h3 className="text-gray-800 text-4xl font-extrabold">Sign In</h3>
            <p className="text-gray-800 text-sm mt-6 leading-relaxed">
              Welcome back! Please log in to access your account and explore a world of possibilities. Your journey begins here.
            </p>
          </div>

          <div className="relative flex items-center">
            <label className="text-gray-800 text-[13px] bg-white absolute px-2 top-[-9px] left-[18px] font-semibold">Email or Number</label>
            <input
              type="text"
              name="credential"
              placeholder="Enter email or number"
              value={credential}
              onChange={handleChange}
              className="px-4 py-3.5 bg-white w-full text-sm border-2 border-gray-200 focus:border-blue-600 rounded-md outline-none"
            />
          </div>

          <div className="relative flex items-center mt-8">
            <label className="text-gray-800 text-[13px] bg-white absolute px-2 top-[-9px] left-[18px] font-semibold">PIN</label>
            <input
              type="password"
              name="pin"
              placeholder="Enter PIN"
              value={pin}
              onChange={handleChange}
              className="px-4 py-3.5 bg-white w-full text-sm border-2 border-gray-200 focus:border-blue-600 rounded-md outline-none"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-md"
              />
              <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                Remember me
              </label>
            </div>
            <div>
              <a  className="text-blue-600 font-semibold text-sm hover:underline">
                Forgot PIN?
              </a>
            </div>
          </div>

          <div className="mt-12">
            <button
              type="submit"
              className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            >
              Sign in
            </button>
          </div>

          <p className="text-sm text-gray-800 mt-8 text-center">
            Don't have an account{' '}
            <Link to={'/register'}  className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">
              Register here
            </Link>
          </p>
        </form>

        <div className="flex flex-col justify-center space-y-16 md:h-screen max-md:mt-16 min-h-full bg-gradient-to-r from-blue-500 to-blue-700 lg:px-8 px-4 py-4">
          <div>
            <h4 className="text-white text-lg font-semibold">Secure Authentication</h4>
            <p className="text-[13px] text-white mt-2">Log in with your registered email or number and PIN securely.</p>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold">Remember Me</h4>
            <p className="text-[13px] text-white mt-2">Enable the "Remember Me" option for a seamless login experience in future sessions.</p>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold">Forgot PIN?</h4>
            <p className="text-[13px] text-white mt-2">Easily recover your PIN by clicking on the "Forgot PIN?" link.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
