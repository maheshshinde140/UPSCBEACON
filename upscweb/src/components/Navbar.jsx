import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllSubjects } from '../redux/subjectSlice'; // Ensure this import is correct
import logo from './upscweb.png';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const subjects = useSelector((state) => state.subjects.subjects); // Get subjects from the Redux store
  const loading = useSelector((state) => state.subjects.loading);
  
  useEffect(() => {
    dispatch(fetchAllSubjects());
  }, [dispatch]);

  // Check if token is present in localStorage
  const token = localStorage.getItem('token');

  return (
    <>
      {/* Main Navbar */}
      <div className="flex justify-between items-center p-2 bg-gray-100 border-b border-gray-300">
        <div className="lg:flex hidden items-center space-x-9">
          <Link to="/exams" className="mx-2 text-gray-700 hover:text-blue-500">Exams <i className="fas fa-caret-down"></i></Link>
          <Link to="/syllabus" className="mx-2 text-gray-700 hover:text-blue-500">Syllabus <i className="fas fa-caret-down"></i></Link>
          <Link to="/subjects" className="mx-2 text-gray-700 hover:text-blue-500">Resources <i className="fas fa-caret-down"></i></Link>
          <Link to="/contact" className="mx-2 text-gray-700 hover:text-blue-500">Contact</Link>
          <Link to="/about" className="mx-2 text-gray-700 hover:text-blue-500">About</Link>
        </div>
        <div className="mx-4 cursor-pointer" onClick={() => navigate('/')}>
          <img src={logo} alt="UPSC_WEB Logo" className="h-10 w-40" />
        </div>
        <div className="flex items-center space-x-8">
          <i className="fas fa-search mx-2 text-gray-700 hover:text-blue-500 cursor-pointer"></i>
          <i className="fas fa-moon mx-2 text-gray-700 hover:text-blue-500 cursor-pointer"></i>
          <i className="fas fa-bell mx-2 text-gray-700 hover:text-blue-500 cursor-pointer"></i>
          <i className="fas fa-language mx-2 text-gray-700 hover:text-blue-500 cursor-pointer"></i>
          {token ? (
            <Link to="admin/dashboard" className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-600">Profile</Link> // Show Profile button if token exists
          ) : (
            <Link to="/login" className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-600">Sign In</Link> // Show Sign In button if no token
          )}
        </div>
      </div>

      {/* Sub Navbar */}
      <div className="flex flex-wrap  font-semibold text-xs justify-between p-2 bg-gray-50 border-b border-gray-300 ">
        <Link to="/trending" className="mx-2 text-red-600 hover:text-blue-500 flex-shrink-0"><i className="fas fa-chevron-left"></i> Trending Now</Link>
        
        {loading ? (
          <span className="mx-2 text-gray-700">Loading...</span>
        ) : (
          subjects.map((subject) => (
            <div className="relative group flex-shrink-0" key={subject._id}>
              <Link 
                key={subject._id}
                to={`/subjects/${subject._id}`} 
                className="mx-2 text-gray-700 hover:text-blue-500"
              >
                {subject.name}
              </Link>
              <div className="absolute left-0 hidden w-[350px] group-hover:block bg-gray-50 shadow-xl border-[2px] border-gray-150 mt-2 p-4 rounded-b-lg z-10 max-w-xs overflow-hidden">
                <div className="whitespace-normal">
                  <div dangerouslySetInnerHTML={{ __html: subject.description }} />
                </div>
              </div>
            </div>
          ))
        )}

        <Link to="/cp-live" className="mx-2 text-blue-700 hover:text-green-500">
          CP Live <i className="fas fa-chevron-right"></i>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
