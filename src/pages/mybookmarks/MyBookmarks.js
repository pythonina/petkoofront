import React, { useEffect, useState } from 'react';
import useStyles from "./styles";
import { saveAdsRequest } from "../../api/api_ads";
import { getSavedAdsRequest } from '../../api/api_auth';
import { toast } from "react-toastify";
import { Typography, Stack, Button } from '@mui/material';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import { useAdsState, setPage, useAdsDispatch } from '../../context/AdsContext';
import AuthContext from '../../context/AuthContext';

const MyBookmarks = () => {
    const classes = useStyles();
    const { logoutRequest } = React.useContext(AuthContext);

    const { text, page } = useAdsState();
    const adsDispatch = useAdsDispatch();
    const [data, setData] = useState([]);

    const updateAdsList = () => {
        getSavedAdsRequest(page, text, (status, data) => {
            switch (status) {
                case true:
                    setData(data);
                    break;
                case 401:
                    logoutRequest();
                    break;
                default:
                    toast.error('مشکلی پیش آمده است')
            }
        })
    }

    useEffect(() => {

        let mounted = true;
        getSavedAdsRequest(page, text, (status, data) => {
            if (mounted) {
                switch (status) {
                    case true:
                        setData(data);
                        break;
                    case 401:
                        logoutRequest();
                        break;
                    default:
                        toast.error('مشکلی پیش آمده است')
                }
            }
        })
        return () => { mounted = false; }
    }, [page, text]);

    const saveAds = (id) => {
        saveAdsRequest(id, (status, dataa) => {
            switch (status) {
                case true:
                    toast.success(dataa.message)
                    if (data.results.length === 1 && page === 2)
                        setPage(adsDispatch, undefined)
                    else if (data.results.length === 1 && page !== undefined)
                        setPage(adsDispatch, page - 1)
                    else
                        updateAdsList();
                    break;
                case 401:
                    logoutRequest();
                    break;
                case 404:
                    toast.error('آگهی یافت نشد');
                    break
                default:
                    toast.error('مشکلی پیش آمده است')
            }

        })
    }

    return (
        <>
            {data?.results?.map((d, index) => <Stack key={index} mt={'1.5rem'} direction={'row'} mr={'8rem'} color={'#525252'} bgcolor={'white'} width={'780px'} borderRadius={'1.5rem'}>
                <Link to={`/${d.id}/${d.title}`}><img className={classes.bookmark__image} src={d.image1} alt={d.title} /></Link>
                <Stack direction={'column'} alignItems={'flex-start'} marginLeft={'auto'} paddingTop={'0.6rem'}>
                    <Stack alignItems={'center'} direction={'row'}>
                        {d.gender === 'M' && <img src='/images/gender3.png' alt='gender icon' />}
                        {d.gender === 'F' && <img src='/images/gender1.png' alt='gender icon' />}
                        {d.gender === 'U' && <img src='/images/gender2.png' alt='gender icon' />}
                        {d.gender === 'P' && <span style={{ 'display': 'flex', alignItems: 'center' }}><img src='/images/gender1.png' alt='gender icon1' /><img src='/images/gender2.png' alt='gender icon2' /></span>}
                        <Link to={`/${d.id}/${d.title}`}><Typography sx={{ '&:hover': { color: '#1f1f1f' } }} fontSize={'0.85rem'} fontWeight={'600'} component={'h2'} mr={1}>{d.title}</Typography></Link>
                    </Stack>
                    {
                        d.price != 0 ?
                            <Typography className={classes.adsItem__price}>{d.price}<span> تومان</span></Typography>
                            : <Typography className={classnames(classes.adsItem__price, classes.adsItem__price__red)}>برای هدیه</Typography>
                    }
                    <Stack direction={'row'} alignItems={'center'}>
                        <img src='/images/date.png' alt='date icon' />
                        <Typography component={'span'} fontSize={'0.7rem'} marginRight={'0.2rem'} marginLeft={'0.2rem'}>{d.f_date} </Typography>
                        <Typography component={'span'} fontSize={'0.7rem'}>پیش در {d.cityy?.name} </Typography>
                        <Typography component={'span'} fontSize={'0.7rem'}>{d.quarterr?.name}</Typography>
                    </Stack>
                </Stack>
                <Button className={classes.bookmark__icon} onClick={() => saveAds(d.id)}><img src={'/images/bookmark4.png'} alt='bookmark icon' /></Button>
            </Stack>)
            }
            <div className={classes.paginate}>
                {data.previous && data.previous !== null &&
                    <Button className={classnames(classes.btnPaginate, classes.btnPaginate__light)} onClick={() => setPage(adsDispatch, page === 2 ? undefined : page - 1)}>
                        صفحه قبل
                        <span className={classnames(classes.btnPaginate__arrow, classes.btnPaginate__arrow__top2)} /><span className={classnames(classes.btnPaginate__arrow, classes.btnPaginate__arrow__bottom2)} />
                    </Button>
                }
                {data.next && data.next !== null &&
                    <Button className={classes.btnPaginate} onClick={() => { setPage(adsDispatch, page === undefined ? 2 : page + 1); }}>
                        {data.previous !== null ? 'صفحه بعد' : 'آگهی های بیشتر'}
                        <span className={classnames(classes.btnPaginate__arrow, classes.btnPaginate__arrow__top)} /><span className={classnames(classes.btnPaginate__arrow, classes.btnPaginate__arrow__bottom)} />
                    </Button>
                }
            </div>
            {data.results && data.results.length === 0 &&
                <div className={classes.container}>
                    <img src={'/images/bookmarksvg.svg'} alt='user icon' style={{ marginLeft: 10 }} />
                    <Typography style={{ fontSize: '0.8rem' }}>{text ? 'چیزی پیدا نشد.' : 'شما آگهی نشان شده ای ندارید'}</Typography>
                </div >
            }
        </>
    );
};


export default MyBookmarks;