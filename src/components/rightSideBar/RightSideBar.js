import React, { useState } from 'react';
import { Button, Stack, Input, Typography, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import useStyles from "./styles";
import { Link } from 'react-router-dom';
import { useAdsState, useAdsDispatch, setText, setPage, setText2, setPage2, setRstatus } from '../../context/AdsContext';

import AuthContext from '../../context/AuthContext';

import classNames from 'classnames';

const RightSideBar = ({ ...t }) => {

    const { phone, logoutRequest } = React.useContext(AuthContext);
    const classes = useStyles();
    const { text, text2 } = useAdsState();
    const adsDispatch = useAdsDispatch();
    const inputChanged = (e) => {
        if (t.t === 0) {
            setPage(adsDispatch, undefined);
            setText(adsDispatch, e.target.value);
        } else {
            setPage2(adsDispatch, undefined);
            setText2(adsDispatch, e.target.value);
        }
    }

    const handleChange = (event) => {
        setPage2(adsDispatch, undefined);
        setRstatus(adsDispatch, event.target.value);
    };


    return (
        <Stack direction={'column'} justifyContent={'center'} alignSelf={'flex-start'} alignItems={'stretch'} mt={4} mr={'4.5rem'} spacing={2}>
            <div className={classes.container}>
                <img src={'/images/user.png'} alt='user icon' style={{ marginLeft: 10 }} />
                <div style={{ textAlign: 'right', marginRight: '0.7rem', marginLeft: '5rem' }}>
                    <Typography style={{ fontSize: '0.8rem' }}>کاربر پت کو</Typography>
                    <Typography style={{ fontWeight: '600' }}>0{phone}</Typography>
                </div>
                <Button sx={{ backgroundColor: '#FF5959', paddingTop: '0.4rem', paddingBottom: '0.4rem', alignSelf: 'flex-end', borderRadius: '1.5rem' }} variant='contained' onClick={(e) => { e.preventDefault(); logoutRequest(); }}>
                    <img src={'/images/exitmenu.png'} alt='exit icon' />
                    <Typography sx={{ marginRight: '0.2rem' }} component='span'>خروج</Typography>
                </Button>
            </div >

            {t.t === 0 ?
                <>
                    <Link to={'/myadslist'} className={classNames(classes.auth__item, classes.auth__item__unselected)}><img src={'/images/myads3.png'} /><Typography component='span'>آگهی های من</Typography></Link>
                    <div to={'/bookmarks'} className={classNames(classes.auth__item, classes.auth__item__selected)}><img src={'/images/bookmark2.png'} /><Typography component='span'>نشان ها</Typography></div>
                </>
                :
                <>
                    <div to={'/myadslist'} className={classNames(classes.auth__item, classes.auth__item__selected)}><img src={'/images/myads2.png'} /><Typography component='span'>آگهی های من</Typography></div>
                    <Link to={'/bookmarks'} className={classNames(classes.auth__item, classes.auth__item__unselected)}><img src={'/images/bookmark3.png'} /><Typography component='span'>نشان ها</Typography></Link>
                </>
            }
            <Stack marginTop={'2rem !important'} bgcolor={'white'} borderRadius={'0.5rem'} color={'#525252'}>
                <Typography paddingRight={'1rem'} paddingTop={'1rem'} fontWeight={'700'} component={'h2'}>جستجو بین {t.t === 0 ? 'نشان ها' : 'آگهی های من'}</Typography>
                <Stack sx={{ '&:hover': { borderColor: 'green' } }} alignItems={'center'} direction={'row'} pr={'1rem'} pl={'0.15rem'} mr={'1.5rem'} ml={'1.5rem'} mb={2} mt={3} borderRadius={'0.5rem'} overflow={'hidden'} border={'1px solid #525252'}>
                    <Input fullWidth disableUnderline placeholder='نوع پت یا آگهی خود را وارد کنید' value={t.t === 0 ? text : text2} onChange={inputChanged} />
                    <div className={classes.searchIcon}><img src={'/images/search.png'} alt='search icon' /></div>
                </Stack>
                {t.t === 1 &&
                    <RadioGroup
                        defaultValue=""
                        onChange={handleChange}
                    >
                        <FormControlLabel value="" control={<Radio color='default' />} label="همه ی آگهی ها" />
                        <FormControlLabel value="E" control={<Radio color='primary' />} label="منقضی شده" />
                        <FormControlLabel value="P" control={<Radio color='success' />} label="انتشار یافته" />
                        <FormControlLabel value="W" control={<Radio color='warning' />} label="در انتظار" />
                        <FormControlLabel value="B" control={<Radio color='secondary' />} label="مسدود شده" />
                    </RadioGroup>
                }
            </Stack>

        </Stack>
    );
};

export default RightSideBar;