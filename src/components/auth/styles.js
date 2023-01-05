import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    auth: {
        position: 'absolute',
        top: '2.2rem',
        right: '4.5rem',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        color: theme.palette.grey.main,
        fontWeight: '600',
        backgroundColor: 'white',
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 20,
        paddingLeft: 10,
        display: 'flex',
        borderRadius: 8,
        boxShadow: '0 0 5px #a99b9b',
        zIndex: '3',
        '@media screen and (max-width: 1199.98px)': {
            right: '2.5rem'
        },
        '@media screen and (max-width: 1100px)': {
            right: '1.5rem',
            padding: '5px 5px'
        },
        '@media screen and (max-width: 1030px) and (min-width: 992px)': {
            right: '0.7rem',
        },
        '@media screen and (max-width: 620px) and (min-width: 576px)': {
            right: '0.7rem',
        },
        '@media screen and (max-width: 460px)': {
            right: '50%',
            transform: 'translate(50%)',
            whiteSpace: 'nowrap'
        },
    },
    auth__item: {
        marginBottom: '0.5rem',
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 15,
        borderRadius: 8,
    },
    auth__btn: {
        position: 'absolute',
        top: '2.2rem',
        right: '5%',
        backgroundColor: 'white',
        color: theme.palette.grey.main,
        fontWeight: '600',
        backgroundColor: 'white',
        border: '1px solid',
        borderColor: theme.palette.grey.main,
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 50,
        paddingLeft: 50,
        '@media screen and (min-width: 992px) and (max-width: 1050px)': {
            right: '2%'
        },
        '@media screen and (max-width: 460px)': {
            right: '50%',
            transform: 'translate(50%)',
            whiteSpace: 'nowrap'
        }
    },
    auth__arrowback: {
        justifySelf: 'flex-end',
        position: 'relative',
        backgroundColor: theme.palette.grey.main,
        width: '2rem',
        height: '2rem',
        borderRadius: 8
    },
    auth__arrow: {
        position: 'absolute',
        width: 11,
        height: 2,
        top: '60%',
        borderRadius: 20,
        backgroundColor: 'white',
        transformOrigin: 'right'
    },
    auth__create: {
        color: 'white',
        backgroundColor: '#43BB65',
    },
    inputPhone: {
        margin: '1.5rem 0 1rem 0',
        '@media screen and (max-width: 575.98px)': {
            margin: '1rem 0 0',
        }
    },
}));

export default useStyles;