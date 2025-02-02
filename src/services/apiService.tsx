import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://data.fixer.io/api/latest?access_key=e2b765780c6c5ea4e73cd30d83806ff3',
});

export default api;
