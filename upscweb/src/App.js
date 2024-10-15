// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import HomePage from './pages/HomePage';
import 'font-awesome/css/font-awesome.min.css';
import SubjectPage from './pages/SubjectPage';
import TopicPage from './pages/TopicPage';
import LoginPage from './Admin/pages/LoginPage';
import AdminLayout from './Admin/pages/AdminLayout';
import Dashboard from './Admin/pages/Dashboard';
import UploadPage from './Admin/pages/UploadPage';
import PostPage from './Admin/pages/PostPage';
import Syllabus from './pages/syllabus';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Exam from './pages/exam';

const AppContent = () => {
  const isAuthenticated = !!localStorage.getItem('token');
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/login' && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/exams" element={<Exam />} />
        <Route path="/subjects/:subjectId" element={<SubjectPage />} />
        <Route path="/topics/:topicId" element={<TopicPage />} />
        <Route path="/login" element={<LoginPage />} />
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
      {location.pathname !== '/login' && <Footer />} {/* Conditionally render the Footer */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
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
