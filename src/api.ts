import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use((config) => {
  console.log("API request:", config.method, config.url, config.data);
  return config;
});

API.interceptors.response.use(
  (response) => {
    console.log("API response:", response.status, response.data);
    return response;
  },
  (error) => {
    console.error("API error:", error.response?.status, error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default API;