import React, { useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

import { codeRequestApi, verifyRequestApi, refreshRequestApi } from '../api/api_auth';


const AuthContext = React.createContext();
export default AuthContext;


export const AuthProvider = ({ children }) => {

    const [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    const [phone, setPhone] = useState(() => localStorage.getItem('authTokens') ? jwtDecode(JSON.parse(localStorage.getItem('authTokens')).access).phone_number : null)
    const [loading, setLoading] = useState(true)

    const codeRequest = (phone_number, setL, reset, setS, ch = '', setCh = null) => {
        if (!phone_number || (phone_number && ch))
            return toast.error('لطفا شماره خود را وارد کنید')
        const formData = new FormData();
        formData.append('phone_number', phone_number);
        codeRequestApi(formData, (status, data) => {
            switch (status) {
                case 400:
                    return toast.error('شماره وارد شده اشتباه می باشد');
                case 500:
                    toast.error('مشکل در ارسال پیامک، لطفا 2 دقیقه بعد دوباره تلاش کنید')
                    reset();
                    break;
                case 403:
                    toast.warn('بعد از اتمام تایمر درخواست دهید')
                    reset(data.m, data.s);
                    setS(true);
                    break;
                default:
                    reset();
                    setS(true);
            }
            setL(1);
            setCh && setCh();
        })
    }
    const verifyRequest = (phone_number, code, hc) => {
        if (!phone_number || !code)
            return;

        const formData = new FormData();
        formData.append('phone_number', phone_number);
        formData.append('code', code);
        verifyRequestApi(formData, (isOk, data) => {
            if (!isOk)
                return toast.error(data);
            hc();
            setAuthTokens(data)
            setPhone(jwtDecode(data.access).phone_number);
            localStorage.setItem('authTokens', JSON.stringify(data));
            toast.success("شما با موفقیت وارد شدید")
        })
    }

    const logoutRequest = () => {
        setAuthTokens(null);
        setPhone(null);
        localStorage.removeItem('authTokens');
        toast.success('شما از سیستم خارج شدید')
    }

    const refresh = () => {
        localStorage.getItem('authTokens') && refreshRequestApi({ 'refresh': JSON.parse(localStorage.getItem('authTokens'))?.refresh }, (isOk, data) => {
            if (isOk) {
                localStorage.setItem('authTokens', JSON.stringify(data));
                setAuthTokens(data);
                setPhone(jwtDecode(data.access).phone_number);
            } else {
                localStorage.removeItem('authTokens');
                setAuthTokens(null);
                setPhone(null);
            }
            if (loading)
                setLoading(false);
        })
    }

    useEffect(() => {
        if (loading)
            refresh();
        const fiveMinutes = 1000 * 5 * 60;
        let myInterval = setInterval(() => {
            if (authTokens)
                refresh();

        }, fiveMinutes)
        return () => {
            clearInterval(myInterval);
        };

    }, [authTokens, loading]);

    const contextData = {
        phone: phone,
        authTokens: authTokens,
        codeRequest: codeRequest,
        verifyRequest: verifyRequest,
        logoutRequest: logoutRequest
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
}
