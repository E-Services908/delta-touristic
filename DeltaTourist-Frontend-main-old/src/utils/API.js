import axios from "axios";

const API = axios.create({
    // baseURL: "https://dlta-tourist-e8cwtngcb-sulaimanbarki.vercel.app",
    baseURL: "http://localhost:3001",
});

export default API;
