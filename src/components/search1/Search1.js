import React, { useState, useEffect } from 'react';
import useStyles from "./styles";
import { toast } from "react-toastify";
import { Menu, MenuItem, Button } from '@mui/material';

import { useAdsState, setSearchData, toggleShould, useAdsDispatch } from '../../context/AdsContext';

import { getCategoriesRequest } from '../../api/api_ads'
import { useNavigate } from 'react-router-dom';


const Search1 = ({ data }) => {

    const navigate = useNavigate();

    const { searchData } = useAdsState();
    const adsDispatch = useAdsDispatch();

    const [cats, setCats] = useState([]);
    const [catscopy, setCatsCopy] = useState([]);
    const [sub, setSub] = useState(0);
    const [cat, setCat] = useState('');

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
        <div className={classes.search1}>
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
            <Button sx={{ marginRight: '2rem', color: '#949494', fontWeight: '700' }} onClick={updateAdsSearchData}>جستجو<img style={{ marginRight: '0.5rem' }} src={'/images/zoom.png'} /></Button>

        </div>
    );



};

export default Search1;