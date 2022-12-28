import React, { useState, useEffect, useRef } from 'react';
import { toast } from "react-toastify";
import { Button, Modal, Box, Typography, Input, Stack } from '@mui/material';
import useStyles from "./styles";

import { Link } from 'react-router-dom';
import classNames from 'classnames';

import AuthContext from '../../context/AuthContext';

const Auth = () => {


    const classes = useStyles();
    const { phone, authTokens, codeRequest, verifyRequest, logoutRequest } = React.useContext(AuthContext);

    const [seconds, setSeconds] = useState(60);
    const [minutes, setMinutes] = useState(1);
    const [start, setStart] = useState(false);

    const [changedLevel, setChangedLevel] = useState(false);
    const [open, setOpen] = React.useState(false);

    const [click, setClick] = useState(false);
    const [level, setLevel] = useState(0);

    const [phoneInput, setPhoneInput] = useState('');
    const [code, setCode] = useState('');

    const submitRef = useRef();
    const codeInput = useRef();
    const phoneRef = useRef();

    const enterPressed = (e) => {
        if (e.key === "Enter") {
            submitRef.current.click();
        }
    }

    const style = {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '36rem',
        height: '22rem',
        borderRadius: '1.5rem',
        bgcolor: 'background.paper',
        boxShadow: '0 0 5px white',
        p: 4,
    };

    useEffect(() => {

        if (start) {
            let myInterval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                }
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(myInterval);
                        setStart(false);
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                }
            }, 1000)
            return () => {
                clearInterval(myInterval);
            };
        }
    }, [seconds, minutes, start]);


        
    const handleOpen = () => {setOpen(true);}
    const handleClose = () => { setOpen(false); setLevel(0) }

    const reset = (m = 1, s = 60) => {
        setSeconds(s);
        setMinutes(m);
    }

    const setL = () => {
        setLevel(1);
    }
    const setS = () => {
        setStart(true);
    }

    const setCh = () => {
        setChangedLevel(true);
    }

    return (
        <>
            {
                authTokens &&
                <div className={classes.auth}>
                    <Button varient='contained' onClick={(e) => setClick(!click)}>
                        <img src={'/images/user.png'} alt='user icon' style={{ marginLeft: 10 }} />
                        <div style={{ textAlign: 'right', marginRight: '0.7rem', marginLeft: '5rem' }}>
                            <Typography style={{ fontSize: '0.8rem' }}>کاربر پت کو</Typography>
                            <Typography style={{ fontWeight: '600' }}>0{phone}</Typography>
                        </div>
                        <div className={classes.auth__arrowback}>
                            <span className={classes.auth__arrow} style={{ transform: click ? 'translateY(-7px) rotate(-45deg)' : 'rotate(45deg)' }} />
                            <span className={classes.auth__arrow} style={{ transform: click ? 'translateY(-7px) rotate(-133deg)' : 'rotate(133deg)' }} />
                        </div>
                    </Button>
                    {
                        click &&
                        <>
                            <Link to={'/createAds'} onMouseOver={(e) => e.target.style.color = '#1f1f1f'} onMouseOut={(e) => e.target.style.color = '#fff'} className={classNames(classes.auth__item, classes.auth__create)}><img src={'/images/createadsmenu.png'} style={{ position: 'relative', top: 3, left: 5 }} />ثبت آگهی رایگان</Link>
                            <Link to={'/myadslist'} onMouseOver={(e) => e.target.style.background = '#ccc'} onMouseOut={(e) => e.target.style.background = '#fff'} className={classes.auth__item}><img src={'/images/myadsmenu.png'} style={{ position: 'relative', top: 3, left: 5 }} />آگهی های من</Link>
                            <Link to={'/bookmarks'} onMouseOver={(e) => e.target.style.background = '#ccc'} onMouseOut={(e) => e.target.style.background = '#fff'} className={classes.auth__item}><img src={'/images/bookmarkmenu.png'} style={{ position: 'relative', top: 3, left: 5 }} />نشان ها</Link>
                            <Button sx={{ backgroundColor: '#FF5959', paddingTop: '0.4rem', paddingBottom: '0.4rem', paddingRight: '0.3rem', alignSelf: 'flex-end', borderRadius: '1.5rem' }} variant='contained' onClick={(e) => { e.preventDefault(); logoutRequest(); }}>
                                <img src={'/images/exitmenu.png'} alt='exit icon' />
                                <Typography sx={{ marginRight: '0.2rem' }} component='span'>خروج</Typography>
                            </Button>
                        </>
                    }
                </div >
            }

            {
                !authTokens &&
                <>
                    <Button varient='contained' className={classes.auth__btn} onClick={handleOpen}><img src={'/images/user.png'} alt='user icon' style={{ marginLeft: 10 }} />ورود به حساب کاربری</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                    >
                        <Box sx={style}>
                            <Stack direction='row' >
                                <img src={'/images/userauth.png'} alt='auth icon' />
                                <Typography sx={{ marginRight: 2, color: '#1f1f1f' }} variant='h6' component='span'>ورود به حساب کاربری</Typography>
                            </Stack>
                            {
                                level == 0 &&
                                <>
                                    <Typography sx={{ mt: 2, color: '#525252', fontSize: '0.9rem' }}>
                                        برای تجربه بهتر و استفاده از همه ی امکانات سایت لطفا وارد شوید.
                                        <br />
                                        بعد از وارد کردن شماره موبایل خود پیامی حاوی کد تائید برای شما ارسال میشود.
                                    </Typography>
                                    <Stack sx={{ '&:hover': { borderColor: 'blue' } }} alignItems={'center'} direction={'row'} mb={2} mt={3} borderRadius={'0.5rem'} overflow={'hidden'} border={'1px solid #525252'} >
                                        <Input autoFocus="autoFocus" ref={phoneRef} onKeyDown={enterPressed} fullWidth disableUnderline sx={{ direction: !changedLevel && phoneInput ? 'ltr' : 'rtl', letterSpacing: !changedLevel && phoneInput ? '4px' : 'normal', marginRight: '1rem', color: '#525252' }} placeholder='شماره موبایل خود را وارد کنید' onChange={(e) => { setChangedLevel(false); setPhoneInput(e.target.value) }} />
                                        <Typography sx={{ background: '#e7e7e7', direction: 'ltr', padding: '0.6rem', marginRight: '0.5rem', color: '#525252' }} component={'span'}>+98</Typography>
                                    </Stack>
                                    <Typography sx={{ mt: 2, mb: 2, color: '#525252', fontSize: '0.8rem', fontWeight: '600' }}>عضویت در سایت به معنی پذیرش <Button sx={{ color: '#FF5959', textDecoration: 'underline', fontSize: '0.8rem', fontWeight: '600', p: 0, '&:hover': { background: 'none' } }} disableRipple component='span'>قوانین و شرایط حفظ حریم خصوصی</Button> سایت پت کو می باشد.</Typography>
                                    <Button ref={submitRef} type='submit' variant='contained' sx={{ paddingX: 4, backgroundColor: '#FF5959', color: 'white', '&:hover': { 'backgroundColor': '#1f1f1f' }, borderRadius: '0.5rem' }} onClick={() => codeRequest(phoneInput, setL, reset, setS, changedLevel, setCh)}>تایید</Button>
                                </>
                            }
                            {
                                level == 1 &&
                                <>
                                    <Typography sx={{ mt: 2, color: '#525252', fontSize: '0.9rem' }}>کد تایید به شماره {'0' + phoneInput} ارسال شد.</Typography>
                                    <Input ref={codeInput} onKeyDown={enterPressed} maxLength={'4'} sx={{ mt: 3, mb: 3, borderRadius: '0.5rem', border: '1px #515151' }} placeholder='کد تائید 4 رقمی را اینجا وارد کنید' onChange={(e) => setCode(e.target.value)} />
                                    <Button variant='contained' sx={{ borderRadius: '1.5rem', backgroundColor: '#E7E7E7', color: '#949494', '&:hover': { 'color': 'white' }, alignSelf: 'flex-end', p: '0.3rem' }} onClick={(e) => {setLevel(0); phoneRef.current.focus()}}>تغییر شماره موبایل</Button>

                                    {
                                        seconds === 0 && minutes === 0 ? <Button sx={{ mb: 2, alignSelf: 'flex-start', '&:hover': { 'color': '#FF5959' } }} onClick={() => codeRequest(phoneInput, setL, reset, setS)}>درخواست مجدد</Button> :
                                            <Typography sx={{ mt: 2, mb: 2, color: '#525252', fontSize: '0.8rem', fontWeight: '600' }}>درخواست مجدد تا ({minutes}:{seconds} ثانیه دیگر)</Typography>

                                    }

                                    <Button ref={submitRef} variant='contained' sx={{ paddingX: 4, backgroundColor: '#FF5959', color: 'white', '&:hover': { 'backgroundColor': '#1f1f1f' }, borderRadius: '0.5rem' }} onClick={(e) => { e.preventDefault(); setClick(false); verifyRequest(phoneInput, code, handleClose); }}>ورود</Button>
                                </>
                            }

                        </Box>
                    </Modal>
                </>
            }

        </>
    );
};

export default Auth;