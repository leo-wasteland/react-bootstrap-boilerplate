import axios from 'axios';

export const domain = `http://localhost:8888`;

const api = axios.create({
  baseURL: domain,
});

export default api;
