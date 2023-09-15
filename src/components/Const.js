import axios from "axios";

export const BASE_URL = "http://localhost:5000/phonepe-integration"
// export const BASE_URL = "http://localhost:5000/api" 


export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'skip-browser-warning': '5000'
    }
})