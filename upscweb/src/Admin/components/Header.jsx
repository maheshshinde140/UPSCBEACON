import React, { useEffect } from 'react';
import { FaUserTie } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'; // For decoding the JWT token
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserById, logoutUser } from '../../redux/userSlice'; // Import the thunk to fetch user by ID

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // Get the current user from the Redux store
  const currentUser = useSelector((state) => state.user.currentUser);
  
  useEffect(() => {
    // Get token from localStorage
    const token = localStorage.getItem('token');
    
    if (token) {
      try {
        // Decode the token to get user ID
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.id;
        
        // Dispatch action to fetch user by ID
        dispatch(fetchUserById(userId));
      } catch (error) {
        console.error('Invalid token:', error);
      }
    } else {
      // Redirect to login if no token is found
      navigate('/login');
    }
  }, [dispatch, navigate]);

  const handleLogout = () => {
    // Dispatch the logout action
    dispatch(logoutUser());

    // Redirect to login page
    navigate('/login');
  };


  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className='flex justify-center space-x-8'>
        <div className='flex space-x-2 mt-2'>
          <FaUserTie className='text-3xl bg-gray-100 rounded-xl border-[1px] border-gray-800 p-1' />
          <p className='text-xm font-bold text-gray-600'>
            {currentUser ? currentUser.username : 'Loading...'}
          </p>
        </div>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
