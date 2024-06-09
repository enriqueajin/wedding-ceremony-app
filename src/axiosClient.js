import axios from "axios";

const instance = axios.create({
    baseURL: "https://wedding-api-fymi.onrender.com/",
    headers: {
    "Content-Type": "application/json",
    timeout: 10000,
    },
});

export default instance;
