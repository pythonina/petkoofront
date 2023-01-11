import React, { useState, useEffect, useRef, Fragment } from 'react';
import useStyles from "./styles";
import { Box, List, ListItem, CircularProgress, ListItemButton, ListItemText, Divider, ButtonBase, Menu, MenuItem, Stack, Paper, RadioGroup, Radio, TextField, FormControlLabel, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { getCategoriesRequest, getCitiesRequest, getQuartersRequest } from '../../api/api_ads';
import { createAdsRequest } from '../../api/api_auth';

import AuthContext from '../../context/AuthContext';

const CreateAds = () => {
    const classes = useStyles();

    const { logoutRequest } = React.useContext(AuthContext);

    const navigate = useNavigate();
    const [level, setLevel] = useState(0);
    const [imagePath, setImagePath] = useState();
    const [imagePath2, setImagePath2] = useState();
    const [imagePath3, setImagePath3] = useState();
    const [imageLink, setImageLink] = useState();
    const [imageLink2, setImageLink2] = useState();
    const [imageLink3, setImageLink3] = useState();
    const inputRef = useRef();
    const inputRef2 = useRef();
    const inputRef3 = useRef();
    const [cats, setCats] = useState([]);
    const [copyCats, setCopyCats] = useState([])
    const [cat, setCat] = useState();
    const [gender, setGender] = useState();
    const [cities, setCities] = useState([]);
    const [copyCities, setCopyCities] = useState([]);
    const [city, setCity] = useState('');
    const [levelCity, setLevelCity] = useState(false);
    const [quarters, setQuarters] = useState(undefined);
    const [quarter, setQuarter] = useState();
    const [boolPrice, setBoolPrice] = useState(true);
    const [price, setPrice] = useState(0);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorEl2, setAnchorEl2] = useState(null);
    const [adsSubmitClicked, setAdsSubmitClicked] = useState(false);

    useEffect(() => {
        let mounted = true;
        getCategoriesRequest((isOk, data) => {
            if (!isOk)
                return toast.error(data.message);
            if (mounted) {
                setCopyCats(data);
                setCats(data.filter(c => c.parent_id === null));
            }
        })
        getCitiesRequest((isOk, data) => {
            if (!isOk)
                return toast.error(data.message);
            if (mounted) {
                setCopyCities(data);
                setCities(data.filter(c => c.parent_id === null));
            }
        })
        return () => { mounted = false; }
    }, []);

    const itemClicked = () => {
        setLevel(level + 1)
    }

    const backClicked = () => {
        setLevel(level - 1)
    }

    const catClicked = (c) => {
        if (c.parent_id === null)
            setCats(copyCats.filter(cc => cc.parent_id === c.id));
        else
            setCat(c);
    }
    const citClicked = (c) => {
        if (c.parent_id === null) {
            setCities(copyCities.filter(cc => cc.parent_id === c.id));
            setLevelCity(true);
        }
        else {
            setCity(c);
            handleClose();
            getQuartersRequest(c.id, (isOk, data) => {
                if (!isOk)
                    return toast.error(data.message);
                setQuarters(data);
            })
        }
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClick2 = (event) => {
        quarters?.length > 0 && setAnchorEl2(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setLevelCity(false);
        setCities(copyCities.filter(cc => cc.parent_id === null))
    };
    const handleClose2 = () => {
        setAnchorEl2(null);
    };

    const handleChangeAvatar = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePath(e.target.result);
            }
            reader.readAsDataURL(e.target.files[0]);
            setImageLink(e.target.files[0]);
        }
    }
    const handleChangeAvatar2 = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePath2(e.target.result);
            }
            reader.readAsDataURL(e.target.files[0]);
            setImageLink2(e.target.files[0]);
        }
    }
    const handleChangeAvatar3 = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePath3(e.target.result);
            }
            reader.readAsDataURL(e.target.files[0]);
            setImageLink3(e.target.files[0]);
        }
    }

    const submitForm = (e) => {
        console.log(adsSubmitClicked);
        if (adsSubmitClicked)
            return;
        setAdsSubmitClicked(true);
        if (!cat || !gender || !city || !imagePath || !imageLink, !title, !desc || (quarter?.length > 0 && !quarter)) {
            setAdsSubmitClicked(false);
            return toast.error('فیلدی را خالی گذاشته اید')
        }
        const formData = new FormData();
        formData.append('title', title);
        formData.append('desc', desc);
        formData.append('img1', imageLink);
        imageLink2 && formData.append('img2', imageLink2);
        imageLink3 && formData.append('img3', imageLink3);
        formData.append('gender', gender);
        quarter && formData.append('quarter', quarter);
        formData.append('city', city.id);
        formData.append('cat', cat.id);
        formData.append('price', price);
        createAdsRequest(formData, (status, data) => {
            switch (status) {
                case true:
                    toast.success('آگهی شما با موفقیت ثبت شد');
                    setTimeout(() => navigate('/'), 1000);
                    break;
                case 400:
                    toast.error('اطلاعات معتبر نیستند');
                    break;
                case 401:
                    logoutRequest();
                    break;
                default:
                    toast.error('مشکلی پیش آمده است')
            }
            setAdsSubmitClicked(false);
        })
    }

    return (
        <>
            <div style={{ width: '100vw', backgroundColor: 'white', paddingTop: 5 }}>
                <Link to={'/'}>
                    <ButtonBase sx={{ mt: 2, mb: 5, pb: 2, color: '#1f1f1f', display: 'flex', flexDirection: 'column', marginRight: 'auto', marginLeft: 'auto' }}>
                        <img src={'/images/logo.png'} alt='logo image' />
                        <Typography sx={{ fontWeight: '600', color: '#FF5959', '&:hover': { 'color': '#0084FF' } }} variant='h6' component={'h1'}>پت کو</Typography>
                        <Typography>خرید، فروش و اهدای حیوانات خانگی</Typography>
                    </ButtonBase>
                </Link>
            </div>

            <Box className={classes.box} sx={{ mb: 10, position: 'relative', color: '#525252', p: 3, borderRadius: '1.5rem', boxShadow: '0 0 4px #1f1f1f', textAlign: 'center', marginRight: 'auto', marginLeft: 'auto', width: '33rem', bgcolor: 'background.paper' }}>
                {(level === 0 || level === 1) && <Typography sx={{ pr: 2, textAlign: level === 0 ? 'center' : 'right', fontWeight: '600' }}>نوع پت خود را انتخاب کنید</Typography>}
                {(level === 2) && <Typography sx={{ pr: 2, textAlign: 'right', fontWeight: '600' }}>جنسیت {cat?.name} خود را وارد کنید</Typography>}
                {(level === 3) && <Typography sx={{ pr: 2, textAlign: 'right', fontWeight: '600' }}>محدوده آگهی خود را مشخص کنید</Typography>}
                {level !== 0 && <Button variant='contained' sx={{ minWidth: '0', p: '0.2rem', borderRadius: '0.5rem', position: 'absolute', top: '1.4rem', left: '2.5rem', backgroundColor: '#FF5959' }} onClick={() => { level === 1 && setCats(copyCats.filter(c => c.parent_id === null)); backClicked() }}><img src={'/images/arrow.png'} /></Button>}
                {level !== 3 ?
                    <nav>
                        <List sx={{ marginTop: '0.8rem' }}>
                            {
                                level !== 2 ? cats.map((c, index, row) =>
                                    <Fragment key={index}>
                                        <ListItem disablePadding onClick={() => { catClicked(c); itemClicked() }}>
                                            <ListItemButton className={classes.cat__item} >
                                                <ListItemText primary={c.name} />
                                                <div className={classes.cat__icon}><img src={c.img} /></div>
                                            </ListItemButton>
                                        </ListItem>
                                        {index != row.length-1 && <Divider />}
                                    </Fragment>
                                )
                                    :
                                    ['نر', 'ماده', 'نامشخص', 'جفت'].map((c, index, row) =>
                                        <Fragment key={index}>
                                            <ListItem disablePadding onClick={() => {
                                                switch (index) {
                                                    case 0:
                                                        setGender('M');
                                                    case 1:
                                                        setGender('F');
                                                    case 2:
                                                        setGender('U');
                                                    default:
                                                        setGender('P');
                                                }
                                                itemClicked();
                                            }}>
                                                <ListItemButton className={classes.cat__item}>
                                                    <ListItemText primary={c} />
                                                    {index === 0 && <span className={classes.adsItem__icon}><img src='/images/gender3.png' alt='gender icon' /></span>}
                                                    {index === 1 && <span className={classes.adsItem__icon}><img src='/images/gender1.png' alt='gender icon' /></span>}
                                                    {index === 2 && <span className={classes.adsItem__icon}><img src='/images/gender2.png' alt='gender icon' /></span>}
                                                    {index === 3 && <span className={classes.adsItem__icon}><img src='/images/gender1.png' alt='gender icon1' /><img src='/images/gender2.png' alt='gender icon2' /></span>}
                                                </ListItemButton>
                                            </ListItem>
                                            {index != row.length-1 && <Divider />}
                                        </Fragment>
                                    )
                            }
                        </List>
                    </nav>
                    :
                    <>
                        <Typography className={classes.inp} sx={{ pr: 4, mb: 1, mt: 2, textAlign: 'right', fontWeight: '600' }}>شهر</Typography>

                        <Button className={classes.btn} sx={{ width: '25rem', borderRadius: '0.5rem', border: '2px solid #1f1f1f', textAlign: 'right' }} onClick={handleClick}>انتخاب شهر</Button>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            sx={{ height: cities.length < 6 ? 'auto' : '14rem', }}
                        >
                            {cities.map((c, index) => <MenuItem sx={{ width: c.parent_id === null && cities.length < 6 ? '25rem' : '23.7rem', display: c.parent_id === null && 'flex', alignItems: c.parent_id === null && 'center', justifyContent: c.parent_id === null && 'space-between' }} key={index} onClick={() => citClicked(c)}>{c.name}{c.parent_id === null && <img style={{ marginRight: '10px' }} src={'/images/subarrow.png'} />}</MenuItem>)
                            }
                            {levelCity &&
                                <Button sx={{ width: '100%', bottom: 0, position: 'sticky !important', zIndex: '1', marginBottom: '-8px' }} variant='contained' onClick={(e) => { setCities(copyCities.filter(cc => cc.parent_id === null)); setLevelCity(false); }}>بازگشت</Button>}
                        </Menu>

                        {(quarters === undefined || quarters.length > 0) &&
                            <>
                                <Typography className={classes.inp} sx={{ pr: 4, mb: 1, mt: 2, textAlign: 'right', fontWeight: '600' }}>محله</Typography>
                                <Button className={classes.btn} sx={{ color: quarters === undefined ? '#929292' : '#0084FF', width: '25rem', borderRadius: '0.5rem', border: '2px solid #1f1f1f', textAlign: 'right' }} onClick={handleClick2}>{city ? 'انتخاب محله' : 'شهری انتخاب نشده'}</Button>
                            </>
                        }
                        {quarters?.length > 0 && <Menu
                            anchorEl={anchorEl2}
                            open={Boolean(anchorEl2)}
                            onClose={handleClose2}
                            sx={{ height: quarters.length < 6 ? 'auto' : '14rem' }}
                        >
                            {quarters?.map((q, index) => <MenuItem sx={{ width: quarters.length < 6 ? '25rem' : '23.7rem' }} key={index} onClick={() => { setQuarter(q.id); handleClose2(); }}>{q.name}</MenuItem>)}
                        </Menu>}

                        <Typography className={classes.inp} sx={{ pr: 4, mb: 2, mt: 4, textAlign: 'right', fontWeight: '600' }}>عکس پت خود را اضافه کنید</Typography>
                        <Stack justifyContent='space-evenly' alignItems='center' direction={'row'}>
                            <input ref={inputRef} type={'file'} accept={'image/*'} style={{ display: 'none' }} onChange={handleChangeAvatar} />
                            <Paper sx={{ backgroundColor: '#f1f1f1', borderRadius: '1.5rem', overflow: 'hidden', width: '6.62rem', height: '6.62rem', cursor: 'pointer' }} onClick={() => inputRef.current.click()}>
                                <img style={{ width: imagePath ? '100%' : 'auto', height: imagePath ? '100%' : 'auto' }} src={imagePath ? imagePath : '/images/addimage.png'} alt='add icon' />
                                {!imagePath && <Typography sx={{ color: '#525252', fontSize: '0.9rem', marginBottom: '-1rem' }}>عکس اصلی</Typography>}
                            </Paper>
                            <input ref={inputRef2} type={'file'} accept={'image/*'} style={{ display: 'none' }} onChange={handleChangeAvatar2} />
                            <Paper className={classes.pix} sx={{ border: '1px solid #f1f1f1', borderRadius: '1.5rem', overflow: 'hidden', width: '6.62rem', height: '6.62rem', cursor: 'pointer' }} onClick={() => inputRef2.current.click()}>
                                <img style={{ width: imagePath2 ? '100%' : 'auto', height: imagePath2 ? '100%' : 'auto' }} src={imagePath2 ? imagePath2 : '/images/addimage2.png'} alt='add icon' />
                                {!imagePath2 && <Typography sx={{ color: '#929292', fontSize: '0.9rem', marginBottom: '-1rem' }}>عکس اضافی</Typography>}
                            </Paper>
                            <input ref={inputRef3} type={'file'} accept={'image/*'} style={{ display: 'none' }} onChange={handleChangeAvatar3} />
                            <Paper sx={{ border: '1px solid #f1f1f1', borderRadius: '1.5rem', overflow: 'hidden', width: '6.62rem', height: '6.62rem', cursor: 'pointer' }} onClick={() => inputRef3.current.click()}>
                                <img style={{ width: imagePath3 ? '100%' : 'auto', height: imagePath3 ? '100%' : 'auto' }} src={imagePath3 ? imagePath3 : '/images/addimage2.png'} alt='add icon' />
                                {!imagePath3 && <Typography sx={{ color: '#929292', fontSize: '0.9rem', marginBottom: '-1rem' }}>عکس اضافی</Typography>}
                            </Paper>
                        </Stack>
                        <Typography className={classes.inp} sx={{ mt: 1, pr: 4, textAlign: 'right', color: '#525252', fontSize: '0.7rem', }}>
                            سعی کنید حداقل یک عکس برای آگهی خود قرار بدهید.
                            <br />
                            شما می توانید حداکثر 3 عکس برای آگهی خود اضافه کنید.
                        </Typography>

                        <Typography className={classes.inp} sx={{ pr: 4, mb: 2, mt: 4, textAlign: 'right', fontWeight: '600' }}>نوع آگهی</Typography>
                        <RadioGroup
                            row
                            defaultValue="0"
                            name="radio-buttons-group"
                            onChange={(e) => e.target.value == 0 ? setBoolPrice(true) : setBoolPrice(false)}
                        >
                            <FormControlLabel value="0" control={<Radio />} label="فروشی" />
                            <FormControlLabel value="1" control={<Radio />} label="برای هدیه" />
                        </RadioGroup>

                        {boolPrice &&
                            <>
                                <Typography className={classes.inp} sx={{ pr: 4, mb: 2, mt: 4, textAlign: 'right', fontWeight: '600' }}>قیمت آگهی را مشخص کنید</Typography>
                                <TextField className={classes.inp} onChange={(e) => setPrice(e.target.value)}
                                    fullWidth
                                    sx={{ paddingRight: 5, paddingLeft: 5, borderColor: '#525252', }}
                                    hiddenLabel
                                    variant="outlined"
                                    size="small"
                                />
                            </>}
                        <Typography className={classes.inp} sx={{ pr: 4, mb: 2, mt: 4, textAlign: 'right', fontWeight: '600' }}>عنوان آگهی</Typography>
                        <TextField className={classes.inp} onChange={(e) => setTitle(e.target.value)}
                            fullWidth
                            sx={{ paddingRight: 5, paddingLeft: 5, borderColor: '#525252', }}
                            hiddenLabel
                            variant="outlined"
                            size="small"
                        />
                        <Typography className={classes.inp} sx={{ pr: 4, mb: 2, mt: 4, textAlign: 'right', fontWeight: '600' }}>توضیحات آگهی</Typography>
                        <Typography className={classes.inp} sx={{ mt: 1, pr: 4, textAlign: 'right', color: '#525252', fontSize: '0.7rem', marginBottom: '1rem' }}>
                            سعی کنید توضیحات کافی را در این قسمت قرار دهید.
                            <br />
                            مثل خصوصیاتی که حیوان شما دارد.
                        </Typography>
                        <TextField className={classes.inp} onChange={(e) => setDesc(e.target.value)}
                            rows={5}
                            fullWidth
                            sx={{ paddingRight: 5, paddingLeft: 5, borderColor: '#525252', }}
                            multiline
                            hiddenLabel
                            variant="outlined"
                            size="medium"
                        />
                        <Button sx={{ mt: 4, backgroundColor: '#FF5959', width: '70%' }} variant='contained' onClick={submitForm}>
                            {adsSubmitClicked === true ? <CircularProgress size={'36.46px'} /> : 'ارسال آگهی'}
                        </Button>
                    </>
                }
            </Box>
        </>
    );
};


export default CreateAds;