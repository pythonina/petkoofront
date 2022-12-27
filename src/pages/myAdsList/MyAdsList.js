import React, { useEffect, useState } from 'react';
import useStyles from "./styles";
import { getMyAdsRequest, deleteAdsRequest } from '../../api/api_auth';
import { toast } from "react-toastify";
import { Typography, Stack, Button } from '@mui/material';
import classnames from 'classnames';

import { Link } from 'react-router-dom';

import { useAdsState, setPage2, useAdsDispatch } from '../../context/AdsContext';
import AuthContext from '../../context/AuthContext';


const MyAdsList = () => {

    const classes = useStyles();
    const { logoutRequest } = React.useContext(AuthContext);

    const { text2, page2, rStatus } = useAdsState();
    const adsDispatch = useAdsDispatch();
    const [data, setData] = useState([]);

    const updateAdsList = () => {
        getMyAdsRequest(page2, text2, rStatus, (status, data) => {
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
        getMyAdsRequest(page2, text2, rStatus, (status, data) => {
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
    }, [page2, text2, rStatus]);

    const deleteAds = (id) => {
        deleteAdsRequest(id, (status, dataa) => {
            switch (status) {
                case true:
                    toast.success(dataa.message)
                    if (data.results.length === 1 && page2 === 2)
                        setPage2(adsDispatch, undefined)
                    else if (data.results.length === 1 && page2 !== undefined)
                        setPage2(adsDispatch, page2 - 1)
                    else
                        updateAdsList();
                    break;
                case 401:
                    logoutRequest();
                    break;
                case 403:
                    toast.error(dataa.message);
                    break;
                case 404:
                    toast.error(dataa.message);
                    break;
                default:
                    toast.error('مشکلی پیش آمده است');
            }

        })
    }

    return (
        <>
            {data?.results?.map((d, index) => <Stack key={index} mt={'1.5rem'} direction={'row'} mr={'8rem'} color={'#525252'} bgcolor={'white'} borderRadius={'1.5rem'}>
                <Link to={`/${d.id}/${d.title}`}><div className={classes.bookmark__image}><img src={d.image1} alt={d.title} /></div></Link>
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
                        <Typography component={'span'} fontSize={'0.7rem'} marginRight={'0.2rem'} marginLeft={'0.2rem'}>{d.f_date}</Typography>
                        <Typography component={'span'} fontSize={'0.7rem'}>پیش در {d.cityy?.name}</Typography>
                        {d.quarterr.name && <Typography component={'span'} fontSize={'0.7rem'}>، {d.quarterr.name}</Typography>}
                    </Stack>
                </Stack>
                <Stack direction={'column'} justifyContent={'space-evenly'}>
                    {d.status === 'P' && <Stack bgcolor={'#43BB65'} width={'7.5rem'} height={'2rem'} marginLeft={'0.3rem'} justifyContent={'center'} borderRadius={'1.5rem'} color={'white'} direction={'row'} alignItems={'center'}><img src={'/images/statusarrow.png'} /><Typography sx={{ marginRight: '5px' }}>منتشر شده</Typography></Stack>}
                    {d.status === 'W' && <Stack bgcolor={'#C8983A'} width={'7.5rem'} height={'2rem'} marginLeft={'0.3rem'} justifyContent={'center'} borderRadius={'1.5rem'} color={'white'} direction={'row'} alignItems={'center'}><img src={'/images/statuswait.png'} /><Typography sx={{ marginRight: '5px' }}>در انتظار</Typography></Stack>}
                    {d.status === 'E' && <Stack bgcolor={'#0084FF'} width={'7.5rem'} height={'2rem'} marginLeft={'0.3rem'} justifyContent={'center'} borderRadius={'1.5rem'} color={'white'} direction={'row'} alignItems={'center'}><img src={'/images/statusexpired.png'} /><Typography sx={{ marginRight: '5px' }}>منقضی شده</Typography></Stack>}
                    {d.status === 'B' && <Stack bgcolor={'#FF5959'} width={'7.5rem'} height={'2rem'} marginLeft={'0.3rem'} justifyContent={'center'} borderRadius={'1.5rem'} color={'white'} direction={'row'} alignItems={'center'}><img src={'/images/statusblock.png'} /><Typography sx={{ marginRight: '1px' }}>مسدود شده</Typography></Stack>}
                    <Button sx={{ color: '#FF5959' }} onClick={() => deleteAds(d.id)}>حذف آگهی</Button>
                </Stack>
            </Stack>)
            }
            <div className={classes.paginate}>
                {data.previous && data.previous !== null &&
                    <Button className={classnames(classes.btnPaginate, classes.btnPaginate__light)} onClick={() => setPage2(adsDispatch, page2 === 2 ? undefined : page2 - 1)}>
                        صفحه قبل
                        <span className={classnames(classes.btnPaginate__arrow, classes.btnPaginate__arrow__top2)} /><span className={classnames(classes.btnPaginate__arrow, classes.btnPaginate__arrow__bottom2)} />
                    </Button>
                }
                {data.next && data.next !== null &&
                    <Button className={classes.btnPaginate} onClick={() => { setPage2(adsDispatch, page2 === undefined ? 2 : page2 + 1); }}>
                        {data.previous !== null ? 'صفحه بعد' : 'آگهی های بیشتر'}
                        <span className={classnames(classes.btnPaginate__arrow, classes.btnPaginate__arrow__top)} /><span className={classnames(classes.btnPaginate__arrow, classes.btnPaginate__arrow__bottom)} />
                    </Button>
                }
            </div>
            {data.results && data.results.length === 0 &&
                <div className={classes.container}>
                    <img src={'/images/myadssvg.svg'} alt='user icon' style={{ marginLeft: 10 }} />
                    <Typography style={{ fontSize: '0.8rem' }}>{text2 ? 'چیزی پیدا نشد' : 'شما آگهی ثبت شده ای ندارید'}</Typography>
                </div >
            }
        </>
    );
};


export default MyAdsList;