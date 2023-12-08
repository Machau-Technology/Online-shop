`use client`
import axios from "axios";
export const BASE_URL = "http://localhost:5000"
console.log({ BASE_URL })

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'skip-browser-warning': '5000'
    }
})