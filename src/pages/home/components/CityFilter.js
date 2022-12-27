import React, { useState, useEffect } from 'react';
import useStyles from "../styles";
import { Menu, MenuItem, Typography, Button } from "@mui/material";
import { toast } from "react-toastify";

import { getCitiesRequest } from '../../../api/api_ads'
import { toggleShould, useAdsDispatch } from '../../../context/AdsContext';

const CityFilter = ({ data }) => {

    const classes = useStyles();

    const adsDispatch = useAdsDispatch();

    const [cities, setCities] = useState([]);
    const [citiescopy, setCitiesCopy] = useState([]);
    const [sub, setSub] = useState(0);

    useEffect(() => {
        getCitiesRequest((isOk, data) => {
            if (!isOk)
                return toast.error(data.message);
            setCities(data);
            setCitiesCopy(data);
            setSub(0);
        })
    }, []);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setSub(0);
        setCities(citiescopy);
    };

    return (
        <div className={classes.cityFilter}>
            <Typography><img src={'/images/myadsmenu.png'} style={{ position: 'relative', top: 2, left: 5 }} />آگهی های {localStorage.getItem('cityname') === null ? ' همه ی ایران' : localStorage.getItem('cityname')}</Typography>
            <Button onClick={handleClick} className={classes.cityFilter__btn} width={'8.875rem'}>شهر خود را انتخاب کنید</Button>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                sx={{ marginLeft: '-9px', height: cities.length < 6 ? 'auto' : '14rem' }}
            >
                {sub == 0 && <MenuItem onClick={() => { localStorage.getItem('cityname') && localStorage.removeItem('cityname'); localStorage.getItem('city') && localStorage.removeItem('city'); toggleShould(adsDispatch); handleClose() }}>همه ایران</MenuItem>}
                {sub == 0 ?
                    cities.map((city, index) => {
                        if (city.parent_id == null)
                            return <MenuItem sx={{ width: '10rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} onClick={(e) => {
                                setSub(1);
                                setCities(cities.filter(c => c.parent_id == city.id));
                            }} key={index}>{city.name}<img style={{ marginRight: '15px' }} src={'/images/subarrow.png'} /></MenuItem>
                    }) : cities.map((city, index) => {
                        return <MenuItem sx={{ width: '10rem' }} onClick={() => { localStorage.setItem('cityname', city.name); localStorage.setItem('city', city.id); toggleShould(adsDispatch); handleClose() }} key={index}>{city.name}</MenuItem>
                    })
                }
                {sub == 1 && <Button sx={{ width: '100%', marginBottom: '-8px', position: 'sticky !important', bottom: 0 }} variant='contained' onClick={(e) => {
                    setSub(0);
                    setCities(citiescopy);
                }}>بازگشت</Button>}
            </Menu>
        </div>
    );
};

export default CityFilter;