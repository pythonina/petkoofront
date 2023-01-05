import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        width: '95%',
        display: 'flex',
        alignSelf: 'center',
        alignItems: 'center',
        '@media screen and (max-width: 991.98px)': {
            flexWrap: 'wrap',
        },
        '@media screen and (min-width: 768px)': {
            paddingRight: '2rem',
            paddingLeft: '2rem',
        },
        '@media screen and (min-width: 576px) and (max-width: 590px)': {
            marginRight: '-1.5rem',
        },
    },
    images: {
        display: 'flex',
        flexDirection: 'column',
        '@media screen and (max-width: 575.98px)': {
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
            order: 1
        }
    },
    ads__image: {
        width: '30%',
        height: '30rem',
        flex: 'none',
        borderRadius: 24,
        margin: 20,
        overflow: 'hidden',
        '& img': {
            width: '100%',
            height: '100%'
        },
        '@media screen and (max-width: 991.98px)': {
            flex: 'auto',
        },
        '@media screen and (max-width: 575.98px)': {
            width: '100%',
            height: '25rem',
        },
        '@media screen and (max-width: 476px)': {
            height: '20rem',
        }
    },
    paper: {
        width: '7rem',
        height: '7rem',
        borderRadius: 24,
        margin: 20,
        cursor: 'pointer',
        overflow: 'hidden',
        '& img': {
            width: '100%',
            height: '100%'
        },
        '@media screen and (max-width: 465px)': {
            margin: '20px 10px',
        },
        '@media screen and (max-width: 400px)': {
            margin: '20px 5px',
        },
    },
    texts: {
        alignSelf: 'stretch',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 10,
        flex: 1,
        '@media screen and (max-width: 575.98px)': {
            order: 2
        }
    },
    ads__title: {
        position: 'relative',
        fontSize: '1.5rem',
        fontWeight: '700',
        color: theme.palette.grey.main,
        marginLeft: 'auto'
    },
    ads__price: {
        padding: 10,
        borderRadius: 24,
        backgroundColor: theme.palette.grey.light,
        marginRight: '0.9rem',
        justifySelf: 'flex-end',
        whiteSpace: 'nowrap'
    },
    ads__price__red: {
        color: theme.palette.secondary.main
    },

    ads__date: {
        marginBottom: '1rem',
        marginTop: '0.7rem',
        marginRight: '0.9rem',
        fontSize: '0.8rem',
    },
    ads__icon: {
        position: 'relative',
        top: 3,
        left: 5,
        whiteSpace: 'nowrap'
    },
    ads__desc: {
        textAlign: 'justify',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
        paddingLeft: '0.9rem',
        marginRight: '0.9rem',
        marginBottom: 'auto',
    },
    ads__btns: {
        display: 'flex',
        marginRight: '1.3rem',
        justifyContent: 'flex-end',
        whiteSpace: 'nowrap',
        '@media screen and (min-width: 992px) and (max-width: 1050px)': {
            fontSize: '14px'
        },
        '@media screen and (max-width: 575.98px)': {
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
        },
        '@media screen and (max-width: 450px)': {
            justifyContent: 'center',
        },
        '@media screen and (max-width: 991.98px)': {
            marginTop: '3rem',
        },
    },
    ads__btn: {
        padding: '0.7rem 2.5rem',
        marginBottom: '2rem',
        marginLeft: '1rem',
        color: 'white',
        backgroundColor: '#43BB65',
        alignSelf: 'center',
        borderRadius: 24,
        fontWeight: '600',
        '@media screen and (min-width: 992px) and (max-width: 1110px)': {
            padding: '0.7rem 1rem',
        },
        '@media screen and (max-width: 991.98px)': {
            marginBottom: '1rem',
        },
        '@media screen and (max-width: 575.98px)': {
            padding: '0.7rem 0.5rem'
        },
    },
    ads__btn__blue: {
        backgroundColor: theme.palette.primary.main,
        paddingRight: '1.5rem',
        paddingLeft: '1.5rem',
    },
    ads__btn__red: {
        backgroundColor: theme.palette.secondary.main,
        paddingRight: '1.5rem',
        paddingLeft: '1.5rem',
    },
    btn: {
        position: 'relative',
        paddingRight: 20,
        marginBottom: 20,
        marginTop: 20,
        fontSize: '1.2rem'
    },
    btn__arrow: {
        position: 'absolute',
        width: 10,
        height: 4,
        right: -5,
        borderRadius: 20,
        backgroundColor: theme.palette.primary.main,
        transformOrigin: 'left'
    },
    btn__arrow__top: {
        transform: 'translateY(-2px) rotate(125deg)'
    },
    btn__arrow__bottom: {
        transform: 'rotate(-125deg)'
    },
    arrow: {
        position: 'absolute',
        width: 10,
        height: 4,
        right: -10,
        borderRadius: 20,
        backgroundColor: theme.palette.grey.main,
        transformOrigin: 'left'
    },
    arrow__top: {
        transform: 'translateY(-2px) rotate(45deg)'
    },
    arrow__bottom: {
        transform: 'rotate(-45deg)'
    },
    city: {
        display: 'flex',
        alignItems: 'center',
        paddingRight: '5%'
    },
    city__item: {
        position: 'relative',
        marginRight: 10,
        marginLeft: 10,
    },
    footer: {
        alignSelf: 'center',
        color: theme.palette.grey.main,
        fontSize: '0.9rem',
        marginBottom: 50
    },
}));

export default useStyles;