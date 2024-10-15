// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Adjust the path if necessary
import subjectReducer from './subjectSlice';
import topicReducer from './topicSlice';
const store = configureStore({
  reducer: {
    user: userReducer,
    subjects: subjectReducer,
    topics: topicReducer,
  },
});

export default store;
