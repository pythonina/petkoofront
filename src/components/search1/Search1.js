import React, { useState, useEffect } from 'react';
import useStyles from "./styles";
import { toast } from "react-toastify";
import { Menu, MenuItem, Button, useMediaQuery, IconButton } from '@mui/material';

import { useAdsState, setSearchData, toggleShould, useAdsDispatch } from '../../context/AdsContext';

import { getCategoriesRequest } from '../../api/api_ads'
import { useNavigate } from 'react-router-dom';

import {Close} from '@mui/icons-material' ;


const Search1 = ({data}) => {

    const navigate = useNavigate();

    const { searchData } = useAdsState();
    const adsDispatch = useAdsDispatch();

    const [cats, setCats] = useState([]);
    const [catscopy, setCatsCopy] = useState([]);
    const [sub, setSub] = useState(0);
    const [cat, setCat] = useState('');

    const isMobileSize = useMediaQuery('(max-width:575.98px)');

    const { searchShow, setSearchShowFunc } = data;
    
    useEffect(() => {
        let mounted = true;
        getCategoriesRequest((isOk, data) => {
            if (!isOk)
                return toast.error(data.message);
            if (mounted) {
                setCats(data);
                setCatsCopy(data);
                setSub(0);
            }
        })
        return () => mounted = false
    }, []);

    const updateAdsSearchData = () => {
        navigate('/');
        setSearchData(adsDispatch, { ...searchData.city, 'price': price, 'cat': cat });
        toggleShould(adsDispatch);

    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setSub(0);
        setCats(catscopy);
    };

    const btn1Clicked = (e) => {
        return price === 1 ? setPrice('') : setPrice(1);
    }
    const btn2Clicked = (e) => {
        return price === 0 ? setPrice('') : setPrice(0);
    }

    const classes = useStyles();
    const [price, setPrice] = useState('');

    return (
        <>
            {(searchShow || !isMobileSize) && <div className={classes.search1}>
                {searchShow && isMobileSize && <IconButton variant="outlined" color="primary" className={classes.close_btn} onClick={()=>setSearchShowFunc(false)}>
                    <Close />
                </IconButton>}
                <Button variant={price === 1 ? 'contained' : 'outlined'} onClick={btn1Clicked} className={classes.search1__btn}>فروشی</Button>
                <Button variant={price === 0 ? 'contained' : 'outlined'} onClick={btn2Clicked} className={classes.search1__btn}>هدیه</Button>
                <Button onClick={handleClick} className={classes.search1__cat}>دسته بندی<img style={{ marginRight: '0.3rem' }} src={'/images/catarrow.png'} alt='arrow icon' /></Button>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    sx={{ marginLeft: '-7px', height: cats.length < 6 ? 'auto' : '14rem' }}

                >
                    {sub == 0 ?
                        cats.map((cat, index) => {
                            if (cat.parent_id == null)
                                return <MenuItem sx={{ width: '7rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} onClick={(e) => {
                                    setSub(1);
                                    setCats(cats.filter(c => c.parent_id == cat.id));
                                }} key={index}>{cat.name}<img style={{ marginRight: '10px' }} src={'/images/subarrow.png'} /></MenuItem>
                        }) : cats.map((cat, index) => {
                            return <MenuItem sx={{ width: '7rem' }} onClick={(e) => { setCat(cat.id); handleClose(e) }} key={index}>{cat.name}</MenuItem>
                        })
                    }
                    {sub == 1 && <Button sx={{ width: '100%', marginBottom: '-8px', position: 'sticky !important', bottom: 0 }} variant='contained' onClick={(e) => {
                        setSub(0);
                        setCats(catscopy);
                    }}>بازگشت</Button>}
                </Menu>
                <Button className={classes.searchBtn} onClick={updateAdsSearchData}>جستجو<img style={{ marginRight: '0.5rem' }} src={'/images/zoom.png'} /></Button>
            </div>}

            {!searchShow && isMobileSize && <Button variant='contained' className={classes.searchBtn2} onClick={()=>setSearchShowFunc(true)}>جستجو<img style={{ marginRight: '0.5rem' }} src={'/images/zoom.png'} /></Button>}
        </>
    );



};

export default Search1;