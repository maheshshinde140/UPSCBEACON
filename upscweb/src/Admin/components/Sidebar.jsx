import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  // Function to check if the current path matches
  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-xl font-bold">
        Editorial Panel
      </div>
      <nav className="flex-1 p-4">
        <Link 
          to="/admin/dashboard" 
          className={`block py-2 px-3 rounded ${isActive('/admin/dashboard') ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
        >
          Dashboard
        </Link>
    <Link 
          to="/admin/upload" 
          className={`block py-2 px-3 rounded ${isActive('/admin/upload') ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
        >
          Upload Subjects
        </Link>
        <Link 
          to="/admin/posts" 
          className={`block py-2 px-3 rounded ${isActive('/admin/posts') ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
        >
          Upload Topics
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
