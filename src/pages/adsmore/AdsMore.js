import React, { useEffect, useState } from 'react';
import useStyles from "./styles";
import { toast } from "react-toastify";
import { getAdsRequest, saveAdsRequest } from '../../api/api_ads';

import { useParams, Link } from 'react-router-dom';

import { ButtonBase, Button, Paper, Typography } from '@mui/material';
import classnames from 'classnames';

const AdsMore = (props) => {
    const classes = useStyles();

    const [ads, setAds] = useState([]);
    const { id } = useParams();

    const [primary, setPrimary] = useState(null);
    const [saved, setSaved] = useState();

    useEffect(() => {
        getAdsRequest(id, (status, data) => {
            switch (status) {
                case true:
                    setAds(data);
                    setPrimary(data.image1);
                    setSaved(data.saved);
                    break;
                case 404:
                    toast.error('آگهی یافت نشد');
                    break
                default:
                    toast.error('مشکلی پیش آمده است')
            }
        })
    }, []);

    const saveAds = () => {
        saveAdsRequest(id, (status, data) => {
            switch (status) {
                case true:
                    toast.success(data.message)
                    setSaved(!saved);
                    break;
                case 401:
                    toast.error('شما لاگین نیستید')
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
            <div className={classes.city}>
                <img src={'/images/home.png'} alt='city icon' className={classes.city__item} />
                <span className={classes.city__item}>
                    <span className={classnames(classes.arrow, classes.arrow__top)} /><span className={classnames(classes.arrow, classes.arrow__bottom)} />
                </span>
                <span className={classes.city__item}>{ads?.cityy?.province}</span>
                <span className={classes.city__item}>
                    <span className={classnames(classes.arrow, classes.arrow__top)} /><span className={classnames(classes.arrow, classes.arrow__bottom)} />
                </span>
                <span className={classes.city__item}>{ads?.cityy?.name}</span>
                {ads?.quarterr?.name &&
                    <>
                        <span className={classes.city__item}>
                            <span className={classnames(classes.arrow, classes.arrow__top)} /><span className={classnames(classes.arrow, classes.arrow__bottom)} />
                        </span >
                        <span className={classes.city__item}>{ads?.quarterr?.name}</span>
                    </>
                }
            </div>
            <div className={classes.root}>
                <div className={classes.images}>
                    {(ads.image2 || ads.image3) && <Paper onClick={(e) => setPrimary(ads.image1)} className={classes.paper}><img src={ads.image1} alt={ads.title + 'عکس اول'} /></Paper>}
                    {ads.image2 && <Paper onClick={(e) => setPrimary(ads.image2)} className={classes.paper}><img src={ads.image2} alt={ads.title + 'عکس دوم'} /></Paper>}
                    {ads.image3 && <Paper onClick={(e) => setPrimary(ads.image3)} className={classes.paper}><img src={ads.image3} alt={ads.title + 'عکس سوم'} /></Paper>}
                </div>
                <div className={classes.ads__image}><img src={primary} alt={ads.title + 'عکس اصلی'} /></div>
                <div className={classes.texts}>
                    <div style={{ display: 'flex', alignItems: 'center', }}>
                        <h1 className={classes.ads__title}>{ads.title}</h1>
                        {ads.gender === 'M' && <span className={classes.ads__icon}><img src='/images/gender3.png' alt='gender icon' /></span>}
                        {ads.gender === 'F' && <span className={classes.ads__icon}><img src='/images/gender1.png' alt='gender icon' /></span>}
                        {ads.gender === 'U' && <span className={classes.ads__icon}><img src='/images/gender2.png' alt='gender icon' /></span>}
                        {ads.gender === 'P' && <span className={classes.ads__icon}><img src='/images/gender1.png' alt='gender icon1' /><img src='/images/gender2.png' alt='gender icon2' /></span>}
                        {
                            ads.price != 0 ?
                                <Typography className={classes.ads__price}>{ads.price}<span> تومان</span></Typography>
                                : <Typography className={classnames(classes.ads__price, classes.ads__price__red)}>برای هدیه</Typography>
                        }
                    </div>
                    <Typography className={classes.ads__date}>
                        <span className={classes.ads__icon}><img src='/images/date.png' alt='date icon' /></span>
                        <span>{ads.f_date} </span>
                        <span>پیش در {ads.cityy?.name}</span>
                        {ads.quarterr?.name && <span>، {ads.quarterr?.name}</span>}
                    </Typography>
                    <Typography className={classes.ads__desc}>{ads.desc}</Typography>
                    <div className={classes.ads__btns}>
                        {!saved
                            ? <ButtonBase className={classnames(classes.ads__btn, classes.ads__btn__blue)} onClick={saveAds}>
                                <img src={'/images/bookmark.png'} alt='bookmark icon' style={{ position: 'relative', left: 5 }} />
                                افزودن به نشان ها
                            </ButtonBase>
                            : <ButtonBase className={classnames(classes.ads__btn, classes.ads__btn__red)} onClick={saveAds}>
                                <img src={'/images/unbookmark.png'} alt='bookmark icon' style={{ position: 'relative', left: 5 }} />
                                حذف نشان
                            </ButtonBase>}
                        <ButtonBase className={classes.ads__btn} href={"tel:0" + ads.user?.phone_number}>
                            <img src={'/images/phone.png'} alt='phone icon' style={{ position: 'relative', left: 5 }} />
                            تماس با آگهی دهنده
                            <span style={{ marginRight: 5, fontWeight: '500' }}>{ads.user?.phone_number}</span>
                        </ButtonBase>

                    </div>
                </div>
            </div>
            <Link to={'/'} style={{ alignSelf: 'center' }}>
                <Button className={classes.btn}>
                    برگشت
                    <span className={classnames(classes.btn__arrow, classes.btn__arrow__top)} /><span className={classnames(classes.btn__arrow, classes.btn__arrow__bottom)} />
                </Button>
            </Link>

        </>
    );
};

export default AdsMore;