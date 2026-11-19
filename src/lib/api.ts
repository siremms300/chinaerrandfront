import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

console.log('[api] baseURL =', api.defaults.baseURL);

api.interceptors.response.use(
  (res) => {
    console.log('[api] response', res.status, res.config.method, res.config.url, res.data);
    return res;
  },
  (err) => {
    console.log('[api] response error', err?.response?.status, err?.config?.url, err?.message);
    return Promise.reject(err);
  }
);

export const submitLead = (data: Record<string, unknown>) =>
  api.post('/leads', data).then((r) => r.data);