import React from 'react';
import useStyles from "./styles";
import Button from '@mui/material/Button';
import classnames from 'classnames';

import { useAdsState, setSearchData, toggleShould, useAdsDispatch } from '../../context/AdsContext';
import classNames from 'classnames';


const BtnPaginate = ({ data: { type, data } }) => {

    const classes = useStyles();

    const { searchData, should } = useAdsState();
    const adsDispatch = useAdsDispatch();

    const paginate = () => {
        if (type == 'next')
            setSearchData(adsDispatch, { ...searchData, 'page': searchData.page === undefined ? 2 : searchData.page + 1 });
        else
            setSearchData(adsDispatch, { ...searchData, 'page': searchData.page === 2 ? undefined : searchData.page - 1 });
        toggleShould(adsDispatch, !should);
    }

    return (
        <>
            {type == 'next' &&
                <Button className={classes.btnPaginate} onClick={paginate}>
                    {data}
                    <span className={classnames(classes.btnPaginate__arrow, classes.btnPaginate__arrow__top)} /><span className={classnames(classes.btnPaginate__arrow, classes.btnPaginate__arrow__bottom)} />
                </Button>
            }
            {type == 'prev' &&
                <Button className={classnames(classes.btnPaginate, classes.btnPaginate__light)} onClick={paginate}>
                    {data}
                    <span className={classnames(classes.btnPaginate__arrow, classes.btnPaginate__arrow__top2)} /><span className={classnames(classes.btnPaginate__arrow, classes.btnPaginate__arrow__bottom2)} />
                </Button>
            }
        </>
    );
};

export default BtnPaginate;