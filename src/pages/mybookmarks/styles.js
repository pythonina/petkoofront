import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
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
    bookmark__image: {
        width: '5.5rem',
        height: '5.5rem',
        borderRadius: '1.5rem',
        margin: '0.5rem',
        overflow: 'hidden',
        '& img': {
            width: '100%',
            height: '100%'
        }
    },
    bookmark__icon: {
        height: '100%',
        width: '4rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.primary.main,
        borderTopRightRadius: '1.5rem',
        borderTopLeftRadius: '1.5rem',
        borderBottomLeftRadius: '1.5rem',
        '&:hover': {
            backgroundColor: '#FF5959'
        },
        '@media screen and (max-width: 460px)': {
            borderRadius: '0 1.5rem 1.5rem 0'
        }
    },
    adsItem__price: {
        marginBottom: '0.5rem',
        marginTop: '0.5rem',
        paddingBottom: '0.2rem',
        paddingTop: '0.2rem',
        paddingRight: '0.5rem',
        paddingLeft: '0.5rem',
        borderRadius: 24,
        backgroundColor: theme.palette.grey.light,
        alignSelf: 'baseline',
        fontSize: '0.8rem'
    },
    adsItem__price__red: {
        color: theme.palette.secondary.main
    },
    paginate: {
        position: 'relative',
        display: 'flex',
        alignSelf: 'center'
    },
    btnPaginate: {
        alignSelf: 'center',
        borderBottomWidth: 2,
        borderStyle: 'solid',
        borderColor: '#adacac',
        paddingRight: 50,
        paddingLeft: 50,
    },
    btnPaginate__light: {
        color: theme.palette.primary.light,
    },
    btnPaginate__arrow: {
        position: 'absolute',
        width: 9,
        height: 2,
        left: 35,
        borderRadius: 20,
        backgroundColor: theme.palette.primary.main,
        transformOrigin: 'left'
    },
    btnPaginate__arrow__top: {
        transform: 'translateY(-2px) rotate(45deg)'
    },
    btnPaginate__arrow__bottom: {
        transform: 'rotate(-45deg)'
    },
    btnPaginate__arrow__top2: {
        right: 26,
        transform: 'translateY(-2px) rotate(125deg)',
        backgroundColor: theme.palette.primary.light,
    },
    btnPaginate__arrow__bottom2: {
        right: 26,
        transform: 'rotate(-125deg)',
        backgroundColor: theme.palette.primary.light,
    },
    container: {
        display: 'flex',
        margin: '6rem',
        flexDirection: 'column',
        color: theme.palette.grey.main,
        fontWeight: '600',
        paddingBottom: '1rem',
        paddingRight: '10rem',
        paddingLeft: '10rem',
        alignItems: 'center',
        alignSelf: 'center'
    },
}));

export default useStyles;