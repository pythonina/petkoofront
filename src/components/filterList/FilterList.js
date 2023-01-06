import React, { useState, useEffect } from 'react';
import useStyles from "./styles";
import { Button } from '@mui/material';

import { getCategoriesSomeRequest } from '../../api/api_ads';
import { useAdsState, setSearchData, toggleShould, setActive, useAdsDispatch } from '../../context/AdsContext';
import { useNavigate } from 'react-router-dom';

const FilterList = () => {
    const navigate = useNavigate('/');
    const classes = useStyles();

    const adsDispatch = useAdsDispatch();
    const [items, setItems] = useState([]);
    const { searchData, active } = useAdsState();

    useEffect(() => {
        getCategoriesSomeRequest((isOk, data) => {
            if (isOk)
                setItems(data);
        })
    }, [])

    const filterClicked = (index, id = '') => {
        navigate('/');
        setActive(adsDispatch, index);
        setSearchData(adsDispatch, { ...searchData, 'cat2': id, 'page': undefined });
        toggleShould(adsDispatch);
    }

    return (
        <div className={classes.root}>
            {items &&
                 <div className={classes.root2}>
                    <Button className={classes.filterBtn} onClick={() => filterClicked(undefined, '')} variant='contained' style={{ backgroundColor: active === undefined ? '#0084FF' : 'white', color: active === undefined ? 'white' : '#1f1f1f', borderRadius: 26 }}><img src={active === undefined ? '/images/all.png' : '/images/all2.png'} />همه ی حیوانات</Button>
                    {items.map((i, index) =>
                        <Button className={classes.filterBtn} key={index} onClick={() => filterClicked(index, i.id)} variant='contained' style={{ backgroundColor: active === index ? '#0084FF' : 'white', color: active === index ? 'white' : '#1f1f1f', marginRight: 20, borderRadius: 26 }}><img src={i.img} alt={i.name} />{i.name}</Button>
                    )}
                </div>
            }
        </div>
    );
};

export default FilterList;