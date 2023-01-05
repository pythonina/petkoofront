import React, { useState } from 'react';

import useStyles from "./styles";
import BtnCreateAds from '../btnCreateAds/BtnCreateAds';
import Search1 from '../search1/Search1';
import { Button, Typography, Stack, useMediaQuery } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { setActive, useAdsDispatch, setSearchData, toggleShould } from '../../context/AdsContext';

const Header = () => {
    const adsDispatch = useAdsDispatch();

    const classes = useStyles();
    const navigate = useNavigate();

    const [searchShow, setSearchShow] = useState(false);
    const isMobileSize = useMediaQuery('(max-width:575.98px)');

    const setSearchShowFunc = (bool) => {
        setSearchShow(bool);
    }

    return (
        <div className={classes.root}>
            {(!isMobileSize || !searchShow) && <Button onClick={() => { setSearchData(adsDispatch, {}); toggleShould(adsDispatch); setActive(adsDispatch, undefined); navigate('/') }}>
                <div className={classes.logo}>
                    <img src={'/images/logo.png'} alt='logo image' />
                    <Stack className={classes.logo__text} mr={2}>
                        <Typography variant={'h6'} component={'span'} className={classes.logo__text__blue}>پت کو</Typography>
                        <Typography sx={{ fontSize: '0.8rem', color: '#525252' }} component={'span'}>خرید، فروش و اهدای حیوانات خانگی</Typography>
                    </Stack>
                </div>
            </Button>}
            <Search1 data={{'searchShow': searchShow, 'setSearchShowFunc': setSearchShowFunc}} />
            {(!isMobileSize || !searchShow) && <BtnCreateAds />}
        </div>
    );
};

export default Header;