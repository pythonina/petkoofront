import { getAxiosInstanceApi, getAxiosInstanceAuth } from "./api";

export const codeRequestApi = (data, callback) => {

    getAxiosInstanceApi().post("account/login", data)
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            callback(error.response.status, error.response.data);
        })
}

export const verifyRequestApi = (data, callback) => {

    getAxiosInstanceApi().post("account/verify", data)
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error.response.data.message);
        })
}

export const refreshRequestApi = (data, callback) => {

    getAxiosInstanceApi().post("account/refresh", data)
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error.response.message);
        })
}

export const getSavedAdsRequest = (page = '', text = '', callback) => {

    getAxiosInstanceAuth().get(`account/bookmarks?search=${text}${page === '' ? '' : '&page=' + page}`)
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            callback(error.response.status, error.response.data);
        })
}

export const createAdsRequest = (data, callback) => {

    getAxiosInstanceAuth().post("account/create", data)
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            callback(error.response.status, error.response.data);
        })
}

export const deleteAdsRequest = (id, callback) => {

    getAxiosInstanceAuth().post(`ads/${id}/delete`, id)
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            callback(error.response.status, error.response.data);
        })
}

export const getMyAdsRequest = (page = '', text = '', status = '', callback) => {

    getAxiosInstanceAuth().get(`account/myads?search=${text}${page === '' ? '' : '&page=' + page}${status === '' ? '' : '&status=' + status}`)
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            callback(error.response.status, error.response.data);
        })
}
