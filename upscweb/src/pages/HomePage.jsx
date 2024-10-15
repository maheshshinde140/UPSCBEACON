import React, { useEffect, useState } from 'react';
import UPSC from '../components/upsc';

// Function to determine the grading color based on subject's difficulty
const getGradingColor = (difficulty) => {
  switch (difficulty) {
    case 'Easy':
      return 'bg-green-300'; // Light green for easy subjects
    case 'Medium':
      return 'bg-yellow-300'; // Light yellow for medium subjects
    case 'Hard':
      return 'bg-red-300'; // Light red for hard subjects
    default:
      return 'bg-gray-200'; // Default color
  }
};

const HomePage = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      const response = await fetch('/api/subjects/get');
      const data = await response.json();
      setSubjects(data);
    };
    fetchSubjects();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-gray-800 text-white h-[500px] p-8 md:p-36 text-center">
        <h1 className="text-3xl md:text-5xl font-bold">Welcome to UPSC Learning Platform</h1>

        {/* Search Bar */}
        <div className="flex justify-center pt-6 md:pt-11">
          <div className="relative w-full max-w-md md:max-w-lg">
            <input
              type="text"
              placeholder="Search UPSC Resources"
              className="w-full p-3 border-2 border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-0 top-0 p-3 bg-white border-2 border-gray-300 rounded-r-full hover:bg-gray-200">
              <i className="fas fa-search text-blue-500"></i>
            </button>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-wrap justify-center mt-5 space-x-2">
          <button className="bg-transparent border-blue-500 border-2 text-white py-2 px-4 rounded hover:bg-blue-600 mx-1 mt-2">
            Master GS & CSAT
          </button>
          <button className="bg-transparent border-red-500 border-2 text-white py-2 px-4 rounded hover:bg-red-600 mx-1 mt-2">
            Go Premium
          </button>
          <button className="bg-transparent border-green-500 border-2 text-white py-2 px-4 rounded hover:bg-green-600 mx-1 mt-2">
            Live Classes
          </button>
        </div>
      </header>

      {/* Content Section */}
      <main className="flex flex-col md:flex-row md:justify-around my-10 px-4 flex-grow">
        {/* Important UPSC Topics Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg mx-auto md:mx-0 mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Important UPSC Topics</h2>
          {subjects.map((subject) => (
            <div key={subject._id} className={`flex items-center mb-4 ${getGradingColor(subject.difficulty)}`}>
              <img
                src={`path/to/icon/${subject.icon}`} // Change this to the actual path
                alt={subject.name}
                className="h-16 w-16 md:h-20 md:w-20 rounded-md mr-4"
              />
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">{subject.name}</h3>
                <p className="text-gray-600">{subject.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Current Affairs Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg mx-auto md:mx-0">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Current Affairs</h2>
          <div className="flex items-center mb-4">
            <img
              alt="Current Affairs Example"
              src="https://storage.googleapis.com/a1aa/image/RTxegeOvHMmc4kpTMjzcO3Pa8CwU2YP080Ekafi1tgADEULnA.jpg"
              className="h-16 w-16 md:h-20 md:w-20 rounded-md mr-4"
            />
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">Current Affairs - January 2023</h3>
              <p className="text-gray-600">Latest updates and analysis</p>
            </div>
          </div>
        </div>
      </main>

      {/* View All Section */}
      <div className="text-center my-5">
        <p className="text-lg md:text-xl text-gray-800 cursor-pointer hover:underline">View All</p>
      </div>

      <UPSC />
    </div>
  );
};

export default HomePage;
