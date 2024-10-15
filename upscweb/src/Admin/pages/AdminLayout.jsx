// src/Admin/AdminLayout.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <main className="p-4 bg-gray-100 flex-1">
          <Outlet /> {/* This will render child routes */}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
