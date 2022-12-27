import { makeStyles } from "@mui/styles";
import { fontSize } from "@mui/system";

const useStyles = makeStyles(theme => ({
    root: {
        width: '95%',
        height: '35rem',
        paddingRight: '2rem',
        paddingLeft: '2rem',
        display: 'flex',
        alignSelf: 'center',
        alignItems: 'center'
    },
    images: {
        display: 'flex',
        flexDirection: 'column'
    },
    ads__image: {
        width: '30%',
        height: '90%',
        flex: 'none',
        borderRadius: 24,
        margin: 20,
        overflow: 'hidden',
        '& img': {
            width: '100%',
            height: '100%'
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
    },
    texts: {
        alignSelf: 'stretch',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 10,
        flex: 1
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
        justifySelf: 'flex-end'
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
        left: 5
    },
    ads__desc: {
        textAlign: 'justify',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
        paddingLeft: '0.9rem',
        marginRight: '0.9rem',
        marginBottom: 'auto'
    },
    ads__btns: {
        display: 'flex',
        marginRight: '1.3rem',
        justifyContent: 'flex-end'
    },
    ads__btn: {
        paddingTop: '0.7rem',
        paddingBottom: '0.7rem',
        paddingRight: '2.5rem',
        paddingLeft: '2.5rem',
        marginBottom: '2rem',
        marginLeft: '1rem',
        color: 'white',
        backgroundColor: '#43BB65',
        alignSelf: 'center',
        borderRadius: 24,
        fontWeight: '600'
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