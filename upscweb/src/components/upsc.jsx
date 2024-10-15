// src/pages/UPSC.jsx
import React from 'react';

const UPSC = () => {
  return (
    <div className="container mx-auto max-w-7xl p-6 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">UPSC Resources</h1>
      <p className="text-md md:text-lg mb-6">
        Comprehensive resources for UPSC preparation.
      </p>
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="md:w-1/4 mb-4 md:mb-0">
          <ul className="space-y-2">
            <li className="bg-sky-900 text-white px-4 py-2 rounded hover:bg-sky-700 cursor-pointer">
              Syllabus
            </li>
            <li className="px-4 py-2 rounded hover:bg-gray-200 cursor-pointer">
              Previous Year Papers
            </li>
            <li className="px-4 py-2 rounded hover:bg-gray-200 cursor-pointer">
              Study Materials
            </li>
            <li className="px-4 py-2 rounded hover:bg-gray-200 cursor-pointer">
              Current Affairs
            </li>
            <li className="px-4 py-2 rounded hover:bg-gray-200 cursor-pointer">
              Mock Tests
            </li>
            <li className="px-4 py-2 rounded hover:bg-gray-200 cursor-pointer">
              Interview Tips
            </li>
            <li className="px-4 py-2 rounded hover:bg-gray-200 cursor-pointer">
              Optional Subjects
            </li>
            <li className="px-4 py-2 rounded hover:bg-gray-200 cursor-pointer">
              Strategy
            </li>
            <li className="px-4 py-2 rounded hover:bg-gray-200 cursor-pointer">
              Books
            </li>
            <li className="px-4 py-2 rounded hover:bg-gray-200 cursor-pointer">
              Coaching Institutes
            </li>
          </ul>
        </div>
        {/* Content */}
        <div className="md:w-3/4 md:pl-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Featured Resources</h2>
          <div className="grid grid-cols-1 cursor-pointer sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Syllabus',
              'Previous Year Papers',
              'Study Materials',
              'Current Affairs',
              'Mock Tests',
              'Interview Tips',
              'Optional Subjects',
              'Strategy',
              'Books',
              'Coaching Institutes',
            ].map((resource, index) => (
              <div
                key={index}
                className="bg-white p-4 text-center rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  src="https://placehold.co/64x64"
                  alt={`${resource} icon`}
                  className="mx-auto mb-2"
                />
                <p>{resource}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UPSC;
