import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTopicsBySubject } from '../redux/topicSlice';

const SubjectPage = () => {
  const { subjectId } = useParams();
  const dispatch = useDispatch();
  const { topics, loading, error } = useSelector((state) => state.topics);
  const [selectedTopic, setSelectedTopic] = useState(null);

  useEffect(() => {
    if (subjectId) {
      dispatch(getTopicsBySubject(subjectId));
    }
  }, [subjectId, dispatch]);

  // Update selectedTopic when topics are loaded
  useEffect(() => {
    if (topics.length > 0) {
      setSelectedTopic(topics[0]); // Automatically select the first topic
    }
  }, [topics]);

  // Function to handle topic selection
  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-1/5 bg-white shadow-lg p-6">
         {/* Displaying the subject name from the first topic */}
         {topics.length > 0 && (
          <h2 className="font-bold text-xl mb-6">{topics[0].subject.name}</h2>
        )}
        <ul>
          {topics.map((topic) => (
            <li key={topic._id} className="mb-4">
              <button
                onClick={() => handleTopicSelect(topic)} // Handle topic selection
                className={`block p-3 rounded-lg w-full text-left ${
                  selectedTopic && selectedTopic._id === topic._id
                    ? 'block bg-sky-900  text-white' // Active topic style
                    : 'text-gray-700 hover:bg-gray-200' // Inactive topic style
                }`}
              >
                {topic.title}
              </button>
            </li>
          ))}
        </ul>
      </aside>
      <main className="w-3/4 p-10">
        <div className="flex justify-between items-start">
          {/* Display selected topic content */}
          {selectedTopic ? (
            <div className="mt-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-gray-600 mb-4">{selectedTopic.title}</h2>
              <div
                className="text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: selectedTopic.content }} // Render topic content
              />
            </div>
          ) : (
            <div className="mt-10">
              <h2 className="text-xl">No topic selected</h2>
            </div>
          )}
          <div className="text-center">
            <button className="bg-sky-900 text-white px-6 py-3 rounded-lg mb-6">Next →</button>
            <img src="https://placehold.co/200x200" alt="UPSC logo" className="mb-6" />
            <h2 className="text-2xl font-bold">UPSC</h2>
          </div>
        </div>

        <div className="w-full mt-10">
          <h2 className="text-2xl font-bold mb-4">Other Related Topics</h2>
          {loading ? (
            <p>Loading topics...</p>
          ) : error ? (
            <p className="text-red-500">Failed to load topics: {error}</p>
          ) : (
            <ul>
              {topics.map((topic) => (
                <li key={topic._id} className="mb-2">
                  <button
                    onClick={() => handleTopicSelect(topic)} // Handle topic selection
                    className={`text-blue-600 ${
                      selectedTopic && selectedTopic._id === topic._id ? 'font-bold' : ''
                    }`}
                  >
                    {topic.title}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
};

export default SubjectPage;
