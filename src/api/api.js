import Axios from 'axios';

export const getAxiosInstanceApi = () => {
    return Axios.create({
        baseURL: "https://api.petkooshop.ir/"
    });
}
export const getAxiosInstanceAuth = () => {
    return Axios.create({
        baseURL: "https://api.petkooshop.ir/",
        headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('authTokens'))?.access}`
        }
    });
}
