import axios from 'axios';

// Create an Axios instance with the base URL from the environment variable
const axiosInstance = axios.create({
  baseURL: 'https://upsc-3qwtaojc.b4a.run/api', // Adjust the default URL if necessary
});

// Add a request interceptor to include the token in the headers
axiosInstance.interceptors.request.use((config) => {
  const token = document.cookie
    .split('; ')
    .find(row => row.startsWith('token='))
    ?.split('=')[1];

    console.log("Token being sent:", token); 

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});


export default axiosInstance;
