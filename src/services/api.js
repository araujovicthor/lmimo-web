import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://hooks.slack.com/services/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',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
