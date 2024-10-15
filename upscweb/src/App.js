// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import 'font-awesome/css/font-awesome.min.css';
import SubjectPage from './pages/SubjectPage';
import TopicPage from './pages/TopicPage';
import LoginPage from './Admin/pages/LoginPage';
import AdminLayout from './Admin/pages/AdminLayout';
import Dashboard from './Admin/pages/Dashboard';
import UploadPage from './Admin/pages/UploadPage';
import PostPage from './Admin/pages/PostPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppContent = () => {
  const isAuthenticated = !!localStorage.getItem('token'); // Replace with actual authentication logic
  const location = useLocation(); // Get the current location

  return (
    <>
      {/* Conditionally render the Navbar, excluding it on the LoginPage */}
      {location.pathname !== '/login' && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/subjects/:subjectId" element={<SubjectPage />} />
        <Route path="/topics/:topicId" element={<TopicPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Admin Routes */}
        {isAuthenticated ? (
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="upload" element={<UploadPage />} />
            <Route path="posts" element={<PostPage />} />
          </Route>
        ) : (
          <Route path="/admin/*" element={<Navigate to="/login" />} />
        )}
      </Routes>
      <ToastContainer
        position="top-right" // Change position as needed
        autoClose={5000} // Duration in milliseconds before the toast closes
        hideProgressBar={false} // Show progress bar
        newestOnTop={false} // Show newest on top
        closeOnClick // Close on click
        rtl={false} // Right to left
        pauseOnFocusLoss // Pause on focus loss
        draggable // Allow dragging
        pauseOnHover // Pause on hover
      />
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
