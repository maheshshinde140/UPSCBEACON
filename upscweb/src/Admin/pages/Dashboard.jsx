import React from 'react';
import up from '../components/upscx.png'

const Dashboard = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Welcome Section */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">Welcome to UPSC CMS!</h2>
              <p className="text-gray-600">Access all your UPSC resources and track your progress.</p>
            </div>
            <img src={up} alt="Illustration of a person studying" className="w-24 h-30" />
          </div>
          <button className="mt-4 bg-gray-800 text-white px-4 py-2 rounded">View Resources</button>
        </div>

        {/* Total Resources */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600">Total Resources</h3>
          <p className="text-2xl font-semibold">128</p>
        </div>

        {/* New Resources */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600">New Resources</h3>
          <p className="text-2xl font-semibold">24</p>
        </div>

        {/* Resource Usage */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-600">Resource Usage</h3>
            <div className="flex items-center space-x-2">
              <button className="bg-gray-800 text-white px-2 py-1 rounded">2023</button>
              <button className="bg-gray-200 text-gray-600 px-2 py-1 rounded">2022</button>
            </div>
          </div>
          <div className="mt-4">
            <img src="https://placehold.co/400x200" alt="Bar chart showing resource usage for 2022 and 2023" />
          </div>
        </div>

        {/* Completed Resources */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600">Completed Resources</h3>
          <p className="text-2xl font-semibold">56</p>
        </div>

        {/* Pending Resources */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600">Pending Resources</h3>
          <p className="text-2xl font-semibold">72</p>
        </div>

        {/* Progress Report */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600">Progress Report</h3>
          <p className="text-2xl font-semibold">78%</p>
          <div className="mt-4">
            <img src="https://placehold.co/200x100" alt="Line chart showing progress report" />
          </div>
        </div>

        {/* Resource Categories */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600">Resource Categories</h3>
          <p className="text-2xl font-semibold">8</p>
          <div className="mt-4">
            <img src="https://placehold.co/200x200" alt="Pie chart showing resource categories" />
          </div>
        </div>

        {/* Resource Types */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-600">Resource Types</h3>
            <div className="flex items-center space-x-2">
              <button className="bg-blue-500 text-white px-2 py-1 rounded">Books</button>
              <button className="bg-gray-200 text-gray-600 px-2 py-1 rounded">Videos</button>
              <button className="bg-gray-200 text-gray-600 px-2 py-1 rounded">Articles</button>
            </div>
          </div>
          <div className="mt-4">
            <img src="https://placehold.co/400x200" alt="Line chart showing resource types" />
          </div>
        </div>

        {/* Recent Activities */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600">Recent Activities</h3>
          <div className="mt-4">
            <ul>
              <li className="flex justify-between py-2">
                <span>Completed: Indian Polity</span>
                <span>2 days ago</span>
              </li>
              <li className="flex justify-between py-2">
                <span>Added: Geography Video</span>
                <span>3 days ago</span>
              </li>
              <li className="flex justify-between py-2">
                <span>Read: History Article</span>
                <span>5 days ago</span>
              </li>
              <li className="flex justify-between py-2">
                <span>Completed: Economics Book</span>
                <span>1 week ago</span>
              </li>
              <li className="flex justify-between py-2">
                <span>Added: Environment Notes</span>
                <span>2 weeks ago</span>
              </li>
              <li className="flex justify-between py-2">
                <span>Read: Current Affairs</span>
                <span>3 weeks ago</span>
              </li>
              <li className="flex justify-between py-2">
                <span>Completed: Science & Tech</span>
                <span>1 month ago</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
