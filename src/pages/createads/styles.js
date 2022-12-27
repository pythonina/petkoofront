import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        maxWidth: '1600px',
        marginRight: 'auto',
        marginLeft: 'auto',
        justifyContent: 'space-evenly'
    },
    logo: {
        display: 'flex',
        alignItems: 'center'
    },
    logo__text: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    logo__text__blue: {
        color: theme.palette.primary.main,
        fontWeight: '600'
    },
    input: {
        border: '1px solid #525252 !important',
        borderRadius: '0.5rem !important'
    },
    '&:before': {
        border: '0'
    },
    '&:after': {
        border: '0'
    },
    cat__item: {
        textAlign: 'right'
    },
    cat__icon: {
        position: 'relative',
        width: '2.5rem',
        height: '2.5rem',
        borderRadius: '50%',
        border: '1px solid #929292',
        overflow: 'hidden',
        padding: '3px',
        '& img': {
            width: '100%',
            height: '100%',
        }
    },
}));

export default useStyles;