import axios from 'axios';

const API_KEY = process.env.REACT_APP_FIXER_API_KEY;

const api = axios.create({
  baseURL:'https://data.fixer.io/api/latest',
  params: {
    access_key: API_KEY,
  },
});


export default api;
