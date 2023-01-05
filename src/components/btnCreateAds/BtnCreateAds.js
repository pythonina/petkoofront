import React from 'react';
import useStyles from "./styles";
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const BtnCreateAds = ({ data }) => {

    const classes = useStyles();

    return (
        <Link to={'/createads'} className={classes.linkRoot}>
            <Button variant="contained" className={classes.root} >
                <img src={'/images/create.png'} style={{ marginLeft: 10 }} />ثبت رایگان آگهی
            </Button>
            <Button variant="contained" className={classes.root2} >
                <img src={'/images/create.png'} style={{ marginLeft: 10 }} />ثبت آگهی
            </Button>
        </Link>
    );
};

export default BtnCreateAds;