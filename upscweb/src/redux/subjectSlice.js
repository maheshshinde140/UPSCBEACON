// src/redux/subjectSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../Admin/utils/axiosInstance';
 // Assuming axiosInstance is set up

// Fetch all subjects
export const fetchAllSubjects = createAsyncThunk(
  'subjects/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/subjects/get');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Fetch subject by ID
export const fetchSubjectById = createAsyncThunk(
  'subjects/fetchById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/subjects/find/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Create a new subject
export const createSubject = createAsyncThunk(
  'subjects/create',
  async (subjectData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/subjects/create', subjectData);
      return response.data;
    } catch (error) {
      console.error("Create Subject Error: ", error);
      return rejectWithValue(error.response.data);
    }
  }
);

// Update a subject
export const updateSubject = createAsyncThunk(
  'subjects/update',
  async ({ id, subjectData }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`/subjects/update/${id}`, subjectData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Delete a subject
export const deleteSubject = createAsyncThunk(
  'subjects/delete',
  async (id, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/subjects/delete/${id}`);
      return id; // Return the ID to remove it from the state
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


const subjectSlice = createSlice({
    name: 'subjects',
    initialState: {
      subjects: [],
      currentSubject: null,
      loading: false,
      error: null,
    },
    reducers: {
      clearCurrentSubject(state) {
        state.currentSubject = null;
      },
    },
    extraReducers: (builder) => {
      builder
        // Fetch all subjects
        .addCase(fetchAllSubjects.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchAllSubjects.fulfilled, (state, action) => {
          state.loading = false;
          state.subjects = action.payload; // Set the fetched subjects
        })
        .addCase(fetchAllSubjects.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload?.message || 'Failed to fetch subjects';
        })
  
        // Fetch subject by ID
        .addCase(fetchSubjectById.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchSubjectById.fulfilled, (state, action) => {
          state.loading = false;
          state.currentSubject = action.payload; // Set the fetched subject
        })
        .addCase(fetchSubjectById.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
  
        // Create new subject
        .addCase(createSubject.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(createSubject.fulfilled, (state, action) => {
          state.loading = false;
          state.subjects.push(action.payload); // Add new subject to the list
        })
        .addCase(createSubject.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
  
        // Update a subject
        .addCase(updateSubject.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(updateSubject.fulfilled, (state, action) => {
          state.loading = false;
          const index = state.subjects.findIndex((subject) => subject._id === action.payload._id);
          if (index !== -1) {
            state.subjects[index] = action.payload; // Update the subject in the list
          }
        })
        .addCase(updateSubject.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
  
        // Delete a subject
        .addCase(deleteSubject.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(deleteSubject.fulfilled, (state, action) => {
          state.loading = false;
          state.subjects = state.subjects.filter((subject) => subject._id !== action.payload);
        })
        .addCase(deleteSubject.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });
  
  // Export actions and reducer
  export const { clearCurrentSubject } = subjectSlice.actions;
  export default subjectSlice.reducer;
  