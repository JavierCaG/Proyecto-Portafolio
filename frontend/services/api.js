import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Cambiar por la URL del backend
});

export default api;
