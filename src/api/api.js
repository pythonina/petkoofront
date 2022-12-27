import Axios from 'axios';

export const getAxiosInstanceApi = () => {
    return Axios.create({
        baseURL: "http://127.0.0.1:8000/api/"
    });
}
export const getAxiosInstanceAuth = () => {
    return Axios.create({
        baseURL: "http://127.0.0.1:8000/api/",
        headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('authTokens'))?.access}`
        }
    });
}