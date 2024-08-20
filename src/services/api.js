import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'X-API-Key': process.env.REACT_APP_API_KEY
  }
});

export const getMonstermons = (page = 1, limit = 20) => {
  return api.get(`/api/monstermon?page=${page}&limit=${limit}`);
};

export const getMonstermon = (id) => {
  return api.get(`/api/monstermon/${id}`);
};

export default api;