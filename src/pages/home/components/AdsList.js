import React from 'react';
import Ads from "./Ads";
import useStyles from "../styles";
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { setSearchData, useAdsDispatch } from '../../../context/AdsContext';

const AdsList = ({ data }) => {

    const adsDispatch = useAdsDispatch();
    const navigate = useNavigate();

    const classes = useStyles();

    return (
        <div className={classes.adsList}>
            {
                data.map((ads, index) => <Link onClick={() => { setSearchData(adsDispatch, {}); navigate('/') }} to={`/${ads.id}/${ads.title}`} key={index}><Ads data={ads} key={index} /></Link>)
            }
        </div>
    );
};

export default AdsList;