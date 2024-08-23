import axios from "axios";

export const request = axios.create({
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    timeout: 50000,
})