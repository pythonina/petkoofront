import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    adsList: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    adsItem: {
        padding: 9,
        margin: 18,
        borderRadius: 24,
        display: 'flex',
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '0.5rem'
    },
    adsItem__image: {
        width: '20rem',
        height: '15.5rem',
        borderRadius: 24,
    },
    adsItem__title: {
        marginTop: '0.7rem',
        marginRight: '0.9rem',
        position: 'relative',
        fontWeight: '600',
        color: theme.palette.grey.main
    },
    adsItem__price: {
        padding: 10,
        borderRadius: 24,
        backgroundColor: theme.palette.grey.light,
        marginTop: '0.7rem',
        marginRight: '0.9rem',
        alignSelf: 'baseline',
    },
    adsItem__price__red: {
        color: theme.palette.secondary.main

    },
    adsItem__date: {
        marginTop: '0.7rem',
        marginRight: '0.9rem',
        fontSize: '0.8rem',
    },
    adsItem__icon: {
        position: 'relative',
        top: 3,
        left: 5
    },
    paginate: {
        display: 'flex',
        alignSelf: 'center',
        whiteSpace: 'nowrap'
    },
    cityFilter: {
        paddingRight: '5%',
        display: 'flex',
        alignItems: 'center',
    },
    cityFilter__btn: {
        borderRadius: '1.5rem',
        fontSize: '0.8rem',
        fontWeight: '800',
        marginRight: 15,
        color: theme.palette.secondary.main,
        background: theme.palette.grey.light,
        textDecoration: 'underline'
    }
}));

export default useStyles;