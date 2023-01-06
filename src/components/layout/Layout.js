import React from 'react';
import useStyles from './styles';
import { Typography, useMediaQuery } from "@mui/material";

import Header from '../../components/header/Header'
import FilterList from '../filterList/FilterList';
import Auth from '../auth/Auth';
import RightSideBar from '../rightSideBar/RightSideBar';


const Layout = (props) => {
    const classes = useStyles();
    const isTabletSize =  useMediaQuery('(max-width:825px)');
    const isMobileSize =  useMediaQuery('(max-width:460px)');
    const isMobileSize2 =  useMediaQuery('(max-width:440px)');

    return (
        <div style={{ minHeight: '100vh' }}>
            <div style={{ width: '100vw', backgroundColor: 'white', paddingTop: 5, height: 'auto', }}>
                <Header />
            </div>
            <div className={classes.root} style={{ flexWrap: (props.type === 0 || props.type === 1) && isTabletSize ? 'wrap' : 'initial', flexDirection: (props.type === 0 || props.type === 1) ? 'row' : 'column' }}>
                {
                    (props.type === 0 || props.type === 1) ? <RightSideBar t={props.type} />
                        :
                        <>
                            <Auth />
                            <FilterList />
                        </>
                }

                <div className={classes.content} style={{ width: (props.type === 0 || props.type === 1) ? (isTabletSize ? '100%' : '65%') : 'auto', paddingLeft: (props.type === 1 && !isMobileSize) || (props.type === 0 && !isMobileSize2)  ? '1rem' : null }}>
                    {props.children}
                </div>
            </div>
            <Typography className={classes.footer}>تمامی حقوق مادی و معنوی برای سایت پت کو محفوظ می باشد. </Typography>
        </div>
    );
};

export default Layout;