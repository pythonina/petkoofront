import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        maxWidth: '1600px',
        marginRight: 'auto',
        marginLeft: 'auto',
        justifyContent: 'space-evenly',
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
    },
    logo__text: {
        display: 'none',
        '@media screen and (min-width: 992px)': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'right',
        },
    },
    logo__text__blue: {
        color: theme.palette.primary.main,
        fontWeight: '600'
    }
}));

export default useStyles;