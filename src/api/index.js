import axios from 'axios';
import Alert from 'sweetalert2';

const API_BASE_URL = "https://spring-bud-camel-hem.cyclic.app/"; // Replace with your backend API URL
// const API_BASE_URL = 'http://localhost:3000'; // Replace with your backend API URL
const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

// Intercept responses to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    Alert.fire('خطاً', error?.response?.data?.message, 'error');
    return Promise.reject(error);
  }
);

export default api;
