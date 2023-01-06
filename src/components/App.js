import React from 'react';
import Layout from "./layout/Layout";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import Page404 from "../pages/404/404";
import AdsMore from '../pages/adsmore/AdsMore';
import CreateAds from '../pages/createads/CreateAds';
import MyBookmarks from '../pages/mybookmarks/MyBookmarks';
import MyAdsList from '../pages/myAdsList/MyAdsList';
import { AdsProvider } from '../context/AdsContext';

import AuthContext from '../context/AuthContext';

const App = () => {

    const { authTokens } = React.useContext(AuthContext);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path={"/"} element={<AdsProvider><Layout children={<Home />} /></AdsProvider>} />
                    <Route path={"/:id/:title"} element={<AdsProvider><Layout children={<AdsMore />} /></AdsProvider>} />
                    <Route path={"/createads"} element={authTokens ? <CreateAds /> : <Navigate to={'/'} />} />
                    <Route path={"/bookmarks"} element={authTokens ? <AdsProvider children={<Layout type={0} children={<MyBookmarks />} />} /> : <Navigate to={'/'} />} />
                    <Route path={"/myadslist"} element={authTokens ? <AdsProvider children={<Layout type={1} children={<MyAdsList />} />} /> : <Navigate to={'/'} />} />
                    <Route path={'*'} element={<Page404 />} />
                </Routes>
            </BrowserRouter >
        </>
    );
};


export default App;