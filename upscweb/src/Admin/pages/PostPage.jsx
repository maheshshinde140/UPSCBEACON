import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllSubjects } from '../../redux/subjectSlice';
import { createTopic, getTopicsBySubject, updateTopic, deleteTopic } from '../../redux/topicSlice';
import { toast } from 'react-toastify'; // Optional: For notifications
import ReactQuill from 'react-quill'; // Import ReactQuill
import 'react-quill/dist/quill.snow.css'; // Import styles for ReactQuill

const PostPage = () => {
  const dispatch = useDispatch();
  const { subjects, loading: loadingSubjects, error: subjectsError } = useSelector((state) => state.subjects);
  const { topics, loading: loadingTopics, error: topicsError } = useSelector((state) => state.topics);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingTopic, setEditingTopic] = useState(null); // Track topic to edit

  // Fetch subjects when component mounts
  useEffect(() => {
    dispatch(fetchAllSubjects());
  }, [dispatch]);

  // Fetch topics by selected subject
  useEffect(() => {
    if (selectedSubject) {
      dispatch(getTopicsBySubject(selectedSubject));
    }
  }, [selectedSubject, dispatch]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const topicData = { subject: selectedSubject, title, content };

    if (editingTopic) {
      // Update topic
      dispatch(updateTopic({ id: editingTopic._id, topicData }))
        .unwrap()
        .then(() => {
          toast.success('Topic updated successfully!');
          resetForm();
        })
        .catch((error) => {
          toast.error(`Failed to update topic: ${error}`);
        });
    } else {
      // Create new topic
      dispatch(createTopic(topicData))
        .unwrap()
        .then(() => {
          toast.success('Topic created successfully!');
          resetForm();
        })
        .catch((error) => {
          toast.error(`Failed to create topic: ${error}`);
        });
    }
  };

  // Reset form fields
  const resetForm = () => {
    setTitle('');
    setContent('');
    setSelectedSubject('');
    setEditingTopic(null);
  };

  // Handle subject change
  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
  };

  // Handle edit click
  const handleEdit = (topic) => {
    setEditingTopic(topic);
    setTitle(topic.title);
    setContent(topic.content);
  };

  // Handle delete click
  const handleDelete = (id) => {
    dispatch(deleteTopic(id))
      .unwrap()
      .then(() => {
        toast.success('Topic deleted successfully!');
      })
      .catch((error) => {
        toast.error(`Failed to delete topic: ${error}`);
      });
  };

  // Function to get the first 20 words of the content
  const getFirstTwentyWords = (htmlContent) => {
    const textContent = htmlContent.replace(/<[^>]+>/g, ' '); // Remove HTML tags
    const words = textContent.trim().split(/\s+/);
    return words.slice(0, 20).join(' ') + (words.length > 20 ? '...' : '');
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-5 border bg-gradient-to-b from-white to-sky-100 border-gray-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create or Update Topic</h2>

      {/* Flexbox container for larger screens */}
      <div className="flex space-x-5 flex-col lg:flex-row">
        {/* Create or Update Topic Form */}
        <div className="flex-1 mb-4 lg:mr-4">
          {loadingSubjects ? (
            <p>Loading subjects...</p>
          ) : subjectsError ? (
            <p className="text-red-500">Error fetching subjects: {subjectsError}</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="subject" className="block mb-1">
                  Select Subject
                </label>
                <select
                  id="subject"
                  value={selectedSubject}
                  onChange={handleSubjectChange}
                  required
                  className="border border-gray-300 rounded-md p-2 w-full"
                >
                  <option value="" disabled>Select a subject</option>
                  {subjects.map((subject) => (
                    <option key={subject._id} value={subject._id}>
                      {subject.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="title" className="block mb-1">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="content" className="block mb-1">
                  Content
                </label>
                <ReactQuill 
                  value={content}
                  onChange={setContent}
                  className="border bg-white border-gray-300 rounded-md"
                  theme="snow"
                />
              </div>
              <button
                type="submit"
                className="bg-gray-800 hover:bg-gray-700 text-white rounded-md px-4 py-2"
              >
                {editingTopic ? 'Update Topic' : 'Create Topic'}
              </button>
            </form>
          )}
        </div>

        {/* Display topics */}
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">Topics</h3>
          {loadingTopics ? (
            <p>Loading topics...</p>
          ) : topicsError ? (
            <p className="text-red-500">Error fetching topics: {topicsError}</p>
          ) : (
            <ul className=''>
              {topics.map((topic) => (
                <li key={topic._id} className="border bg-white shadow-md rounded-md border-gray-200  p-3  mb-2">
                  <h4 className="font-bold">{topic.title}</h4>
                  <div>{getFirstTwentyWords(topic.content)}</div>
                  <div className="mt-2 space-x-2">
                    <i
                      className="fas fa-edit mx-2 text-gray-700 hover:text-blue-500 cursor-pointer"
                      onClick={() => handleEdit(topic)}
                    ></i>
                    <i
                      className=" fas fa-trash  text-gray-700 hover:text-red-500 cursor-pointer"
                      onClick={() => handleDelete(topic._id)}
                    >
                     
                    </i>
                </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostPage;
