import axios from "axios"
import { BASE_URL } from "contants";

const getToken = () => {
    return "feed879306804e3e815fb1b5368d1647";
}

const axiosApi = axios.create({
    baseURL: BASE_URL,
});

axiosApi.interceptors.request.use(
    config => {

        // Add auth token in config header here
        const token = getToken();
        if (token) {
            config.headers['Authorization'] = token //`Bearer ${token}`;
        }

        return config;
    },
    error => {
        Promise.reject(error);
    }
);

axiosApi.interceptors.response.use(
    response => response,
    error => Promise.reject(error)
);

export const get = (uri, options) => {
    return axiosApi.get(uri, options)
            .then(response => successProcess(response))
            .catch(err => errorProcess(err));
}

export const post = (uri, data, options) => {
    return axiosApi.post(uri, data, options)
            .then(response => successProcess(response))
            .catch(error => errorProcess(error));
}

export const put = (uri, data, options) => {
    return axiosApi.put(uri, data, options)
            .then(response => successProcess(response))
            .catch(error => errorProcess(error));
}

export const del = (uri, options) => {
    return axiosApi.delete(uri, options)
            .then(response => successProcess(response))
            .catch(error => errorProcess(error));
} 

const successProcess = (response) => {
    const res = response?.data;

    switch (res?.status) {
        case "success":
            return res?.data;
        
        case "error":
            throw res?.message;
    
        default:
            return res;
    }
}

const errorProcess = (error) => {
    throw error;
}