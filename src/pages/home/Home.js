import React, { useEffect, useState } from 'react';
import useStyles from "./styles";
import AdsList from "./components/AdsList";
import { getAllAdsRequest } from "../../api/api_ads";
import { useAdsState } from '../../context/AdsContext';
import { toast } from "react-toastify";
import BtnPaginate from '../../components/btnPaginate/BtnPaginate';

import CityFilter from './components/CityFilter';

const Home = () => {
    const classes = useStyles();
    const { searchData, should } = useAdsState();
    const [data, setData] = useState([]);

    const [end, setEnd] = useState(false);
    const [start, setStart] = useState(false);

    const updateAdsList = () => {
        getAllAdsRequest(searchData.price, searchData.cat, searchData.cat2, searchData.page, (isOk, data) => {
            if (!isOk)
                return toast.error(data.message);
            if (end)
                setEnd(false);
            if (data.next === null)
                setEnd(true);
            if (searchData.page !== undefined)
                setStart(true);
            else
                setStart(false);
            setData(data.results);
        })
    }

    useEffect(() => {
        updateAdsList();
    }, [should]);

    return (
        <>
            <CityFilter />
            <AdsList data={data} />
            <div className={classes.paginate}>
                {start === true && <BtnPaginate data={{ type: 'prev', data: 'صفحه قبلی' }} />}
                {!end && <BtnPaginate data={{ type: 'next', data: start === true ? 'صفحه بعد' : 'آگهی های بیشتر' }} />}
            </div>
        </>
    );
};

export default Home;