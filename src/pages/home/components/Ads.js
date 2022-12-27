import React from 'react';
import { Typography } from "@mui/material";
import useStyles from "../styles";
import classnames from 'classnames';
import { Paper } from '@mui/material';

const Ads = ({ data }) => {

    const classes = useStyles();

    return (
        <Paper elevation={3} className={classes.adsItem}>
            <img src={data.image1} alt={data.title} className={classes.adsItem__image} />

            <Typography className={classes.adsItem__title}>
                {data.gender === 'M' && <span className={classes.adsItem__icon}><img src='/images/gender3.png' alt='gender icon' /></span>}
                {data.gender === 'F' && <span className={classes.adsItem__icon}><img src='/images/gender1.png' alt='gender icon' /></span>}
                {data.gender === 'U' && <span className={classes.adsItem__icon}><img src='/images/gender2.png' alt='gender icon' /></span>}
                {data.gender === 'P' && <span className={classes.adsItem__icon}><img src='/images/gender1.png' alt='gender icon1' /><img src='/images/gender2.png' alt='gender icon2' /></span>}
                {data.title}</Typography>

            {
                data.price != 0 ?
                    <Typography className={classes.adsItem__price}>{data.price}<span> تومان</span></Typography>
                    : <Typography className={classnames(classes.adsItem__price, classes.adsItem__price__red)}>برای هدیه</Typography>
            }
            <Typography className={classes.adsItem__date}>
                <span className={classes.adsItem__icon}><img src='/images/date.png' alt='date icon' /></span>
                <span>{data.f_date} </span>
                <span>پیش در {data.cityy?.name}</span>
                {data.quarterr.name && <span>، {data.quarterr.name}</span>}
            </Typography>
        </Paper>
    );
};

export default Ads;