import axios from 'axios';

export const domain = `http://localhost:3000`;

const api = axios.create({
  baseURL: domain,
});

export default api;
