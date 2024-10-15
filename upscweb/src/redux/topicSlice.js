// src/store/slices/topicSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axiosInstance from '../Admin/utils/axiosInstance';

// Define async actions for the topic API
export const getTopicsBySubject = createAsyncThunk(
  'topics/getBySubject',
  async (subjectId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/topics/${subjectId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createTopic = createAsyncThunk(
  'topics/create',
  async (topicData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/topics/create', topicData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateTopic = createAsyncThunk(
  'topics/update',
  async ({ id, topicData }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`/topics/update/${id}`, topicData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteTopic = createAsyncThunk(
  'topics/delete',
  async (id, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/topics/delete/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Create the slice
const topicSlice = createSlice({
  name: 'topics',
  initialState: {
    topics: [],
    selectedTopic: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearTopics: (state) => {
      state.topics = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTopicsBySubject.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTopicsBySubject.fulfilled, (state, action) => {
        state.loading = false;
        state.topics = action.payload;
      })
      .addCase(getTopicsBySubject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createTopic.fulfilled, (state, action) => {
        state.topics.push(action.payload);
      })
      .addCase(deleteTopic.fulfilled, (state, action) => {
        state.topics = state.topics.filter(topic => topic._id !== action.payload);
      });
  },
});

export const { clearTopics } = topicSlice.actions;
export default topicSlice.reducer;
