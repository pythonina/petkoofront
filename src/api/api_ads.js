import { getAxiosInstanceApi, getAxiosInstanceAuth } from "./api";

export const getAllAdsRequest = (price = '', cat = '', cat2 = '', page = '', callback) => {

    getAxiosInstanceApi().get(`ads/?city=${localStorage.getItem('city') == null ? '' : localStorage.getItem('city')}&price=${price}&cat=${cat}&cat2=${cat2}${page === '' ? '' : '&page=' + page}`)
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error);
        })
}

export const getAdsRequest = (id, callback) => {

    (localStorage.getItem('authTokens') ? getAxiosInstanceAuth() : getAxiosInstanceApi()).get(`ads/${id}`)
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            callback(error.response.status, error);
        })
}

export const getCategoriesRequest = (callback) => {

    getAxiosInstanceApi().get(`ads/cat`)
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error);
        })
}

export const getCategoriesSomeRequest = (callback) => {

    getAxiosInstanceApi().get(`ads/catsome`)
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error);
        })
}

export const getFilterListRequest = (callback) => {

    getAxiosInstanceApi().get(`ads/cit`)
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error);
        })
}

export const getCitiesRequest = (callback) => {

    getAxiosInstanceApi().get(`ads/cit`)
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error);
        })
}

export const getQuartersRequest = (city = '', callback) => {

    getAxiosInstanceApi().get(`ads/quart/${city ? '?city=' + city : ''}`)
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error);
        })
}

export const saveAdsRequest = (id, callback) => {

    getAxiosInstanceAuth().post(`ads/${id}/save`)
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            callback(error.response.status, error.response.data);
        })
}


