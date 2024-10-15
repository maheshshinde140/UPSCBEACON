import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactQuill from 'react-quill'; // Import React Quill for editing
import 'react-quill/dist/quill.snow.css'; // Quill's default theme
import {
  fetchAllSubjects,
  createSubject,
  updateSubject,
  deleteSubject,
  fetchSubjectById,
  clearCurrentSubject,
} from '../../redux/subjectSlice';
import { toast } from 'react-toastify';

const UploadPage = () => {
  const dispatch = useDispatch();
  const { subjects, currentSubject, loading, error } = useSelector((state) => state.subjects);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

  // Handle input change
  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentSubject) {
      dispatch(updateSubject({ id: currentSubject._id, subjectData: formData }));
      toast.success('Subject updated successfully!');
    } else {
      dispatch(createSubject(formData));
      toast.success('Subject created successfully!');
    }
    setFormData({ name: '', description: '' });
  };

  // Handle edit subject
  const handleEdit = (subject) => {
    dispatch(fetchSubjectById(subject._id));
  };

  // Handle delete subject
  const handleDelete = (id) => {
    dispatch(deleteSubject(id));
    toast.success('Subject deleted successfully!');
  };

  // Fetch all subjects on mount
  useEffect(() => {
    dispatch(fetchAllSubjects());
  }, [dispatch]);

  // Set form data when editing a subject
  useEffect(() => {
    if (currentSubject) {
      setFormData({ name: currentSubject.name, description: currentSubject.description });
    }
  }, [currentSubject]);

  // Clear form when switching between subjects
  const handleCancelEdit = () => {
    dispatch(clearCurrentSubject());
    setFormData({ name: '', description: '' });
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-5 border bg-gradient-to-b from-white to-sky-100 border-gray-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">{currentSubject ? 'Update Subject' : 'Create Subject'}</h2>
      
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            placeholder="Subject Name"
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <ReactQuill
            value={formData.description}
            onChange={(value) => handleInputChange('description', value)}
            placeholder="Subject Description"
            className="border bg-white border-gray-300 rounded-md"
            theme="snow"
          />
        </div>
        <button
          type="submit"
          className="bg-gray-800 hover:bg-gray-700 text-white rounded-md px-4 py-2"
        >
          {currentSubject ? 'Update Subject' : 'Create Subject'}
        </button>
        {currentSubject && (
          <button
            type="button"
            onClick={handleCancelEdit}
            className="ml-4 bg-gray-500 hover:bg-gray-600 text-white rounded-md px-4 py-2"
          >
            Cancel
          </button>
        )}
      </form>

      <h2 className="text-2xl font-bold mb-4">All Subjects</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <ul>
          {subjects.map((subject) => (
            <li key={subject._id} className="border bg-white shadow-md rounded-md border-gray-200 p-3 mb-2">
              <h4 className="font-bold text-blue-500">{subject.name}</h4>
              {/* Render the HTML description */}
              <div dangerouslySetInnerHTML={{ __html: subject.description }} />
              <div className="mt-2 space-x-2">
                <i
                  className="fas fa-edit mx-2 text-gray-700 hover:text-blue-500 cursor-pointer"
                  onClick={() => handleEdit(subject)}
                ></i>
                <i
                  className="fas fa-trash text-gray-700 hover:text-red-500 cursor-pointer"
                  onClick={() => handleDelete(subject._id)}
                ></i>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UploadPage;
