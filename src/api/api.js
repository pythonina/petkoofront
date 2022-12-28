import Axios from 'axios';

export const getAxiosInstanceApi = () => {
    return Axios.create({
        baseURL: "https://api.petkoo.shop/"
    });
}
export const getAxiosInstanceAuth = () => {
    return Axios.create({
        baseURL: "https://api.petkoo.shop/",
        headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('authTokens'))?.access}`
        }
    });
}