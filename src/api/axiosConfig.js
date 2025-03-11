import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080", // Replace with your API Gateway URL
  timeout: 15000, 
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;