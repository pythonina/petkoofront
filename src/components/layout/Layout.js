import React, { useEffect, useState } from 'react';
import useStyles from './styles';
import { CircularProgress, useTheme, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

import Header from '../../components/header/Header'
import FilterList from '../filterList/FilterList';
import Auth from '../auth/Auth';
import RightSideBar from '../rightSideBar/RightSideBar';


const Layout = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <div style={{ minHeight: '100vh' }}>
            <div style={{ width: '100vw', backgroundColor: 'white', paddingTop: 5, height: 'auto', }}>
                <Header />
            </div>
            <div className={classes.root} style={{ flexDirection: (props.type === 0 || props.type === 1) ? 'row' : 'column' }}>
                {
                    (props.type === 0 || props.type === 1) ? <RightSideBar t={props.type} />
                        :
                        <>
                            <Auth />
                            <FilterList />
                        </>
                }

                <div className={classes.content} style={{ width: (props.type === 0 || props.type === 1) ? '65%' : 'auto', paddingLeft: (props.type === 0 || props.type === 1) ? '1rem' : null }}>
                    {props.children}
                </div>
            </div>
            <Typography className={classes.footer}>تمامی حقوق مادی و معنوی برای سایت پت کو محفوظ می باشد. </Typography>
        </div>
    );
};

export default Layout;