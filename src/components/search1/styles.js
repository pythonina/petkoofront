import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    search1: {
        position: 'relative',
        display: 'none',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 7,
        paddingBottom: 7,
        paddingRight: 20,
        paddingLeft: 10,
        borderRadius: 24,
        backgroundColor: theme.palette.grey.light,
        '@media screen and (max-width: 575.98px)': {
            width: '100%',
            borderRadius: 0,
            paddingRight: 0,
        },
    },
    search1__btn: {
        marginLeft: 5
    },
    search1__cat: {
        marginRight: 10,
        '@media screen and (min-width: 576px) and (max-width: 600px)': {
            marginRight: 0
        },
        '@media screen and (max-width: 575.98px)': {
            marginRight: 0
        },
        whiteSpace: 'nowrap'
    },
    searchBtn: {
        color: '#949494',
        fontWeight: '700',
        '@media screen and (min-width: 768px)': {
            marginRight: '2rem',
        }
    },
    searchBtn2: {
        color: '#949494',
        fontWeight: '700',
        flex: 3,
        background: '#f3f3f3',
        borderRadius: '0.2rem',
        '@media screen and (min-width: 365px) and (max-width: 419.98px)': {
            marginRight: '1rem',
        },
        '@media screen and (min-width: 420px) and (max-width: 575.98px)': {
            marginRight: '4rem',
        },
        '&:hover': {
            backgroundColor: '#f3f3f3'
        },
    },
    close_btn: {
        position: 'absolute',
        bottom: '-43%',
        right: 0,
        backgroundColor: '#ebebeb',
        zIndex: '9999',
        padding: '2px'
    }
}));

export default useStyles;