import axios from "axios";
import { getToken, clearToken } from "../utils/auth";

const api = axios.create({
  baseURL: "http://127.0.0.1:8081/api",
  headers: {
    "Content-Type": "application/json",
  },
  validateStatus: () => true, //semua status dianggap sukses validasi dari backend
});

// Request Interceptor → inject Bearer token
api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor → kalau 401 expired
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      clearToken();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
