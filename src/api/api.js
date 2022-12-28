import Axios from 'axios';

export const getAxiosInstanceApi = () => {
    return Axios.create({
        baseURL: "http://localhost:8000/"
    });
}
export const getAxiosInstanceAuth = () => {
    return Axios.create({
        baseURL: "http://localhost:8000/",
        headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('authTokens'))?.access}`
        }
    });
}