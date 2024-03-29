import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "http://localhost:3000/graphql",
  config: {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  },
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    // console.log("interceptores token", token);
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
  return config;
});

export default api;
