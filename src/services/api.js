import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://hooks.slack.com/services/YOUR_KEY',
});

export default api;
