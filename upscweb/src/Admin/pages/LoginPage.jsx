// src/auth/LoginPage.jsx
import React, { useState } from 'react';
import logo from '../../components/upscweb.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/userSlice';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Hook to dispatch actions


  const handleLogin = async () => {
    try {
      const resultAction = await dispatch(loginUser({ username: email, password }));
  
      if (loginUser.fulfilled.match(resultAction)) {
        // Successful login
        const { token } = resultAction.payload; // Extract token from payload
        localStorage.setItem('token', token); // Store token in localStorage
        navigate('/admin/dashboard'); // Redirect to the admin dashboard
      } else {
        // Handle error (e.g., show a toast or alert)
        alert(resultAction.payload.message || 'Login failed');
      }
    } catch (error) {
      // Handle unexpected errors
      console.error('Unexpected error:', error);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 font-sans">
      <div className="text-center mb-8 " onClick={() => navigate('/')}>
        <img src={logo} alt="UPSC logo" className="mx-auto mb-4 h-17 bg-yellow-600 p-1 w-[300px] cursor-pointer " />
        <h1 className="text-3xl font-bold text-gray-800">Welcome to UPSC Portal</h1>
      </div>

      <div className="bg-white p-8 rounded shadow-md w-full max-w-md ">
        <h2 className="text-2xl font-bold mb-6">Login</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Your email</label>
          <div className="flex items-center border rounded-lg px-3 py-2 ">
            <i className="fas fa-user text-gray-400 mr-2"></i>
            <input
              type="email"
              placeholder="e.g. user@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-none focus:outline-none "
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Your password</label>
          <div className="flex items-center border rounded-lg px-3 py-2">
            <i className="fas fa-lock text-gray-400 mr-2"></i>
            <input
              type="password"
              placeholder="e.g. yourpassword123"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-none focus:outline-none"
            />
          </div>
        </div>

        <button
          onClick={handleLogin}
          className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg w-full hover:bg-green-600"
        >
          Sign in
        </button>

        <div className="flex justify-between mt-4 text-sm">
          <a href="#" className="text-blue-600">Don't have an account?</a>
          <a href="#" className="text-blue-600">Forgot password?</a>
        </div>
      </div>

      <div className="flex justify-center mt-8 space-x-4">
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <img src="https://placehold.co/40x40" alt="Exam Notifications logo" className="mb-2" />
            <i className="fas fa-bell mx-2 text-gray-700 hover:text-blue-500 cursor-pointer"></i>
          </div>
          <span className="text-sm font-semibold">Exam Notifications</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <img src="https://placehold.co/40x40" alt="Syllabus logo" className="mb-2" />
            <i className="fas fa-book mx-2 text-gray-700 hover:text-blue-500 cursor-pointer"></i>
          </div>
          <span className="text-sm font-semibold">Syllabus</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <img src="https://placehold.co/40x40" alt="Previous Papers logo" className="mb-2" />
            <i className="fas fa-file-alt mx-2 text-gray-700 hover:text-blue-500 cursor-pointer"></i>
          </div>
          <span className="text-sm font-semibold">Previous Papers</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <img src="https://placehold.co/40x40" alt="Results logo" className="mb-2" />
            <i className="fas fa-trophy mx-2 text-gray-700 hover:text-blue-500 cursor-pointer"></i>
          </div>
          <span className="text-sm font-semibold">Results</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <img src="https://placehold.co/40x40" alt="Contact Us logo" className="mb-2" />
            <i className="fas fa-envelope mx-2 text-gray-700 hover:text-blue-500 cursor-pointer"></i>
          </div>
          <span className="text-sm font-semibold">Contact Us</span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
