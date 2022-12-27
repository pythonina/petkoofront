import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        display: 'flex',
        height: 'auto',
        maxWidth: '1600px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    content: {
        display: 'flex',
        flexDirection: 'column'
    },
    parentWait: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0
    },
    footer: {
        textAlign: 'center',
        color: theme.palette.grey.main,
        fontSize: '0.8rem',
        marginBottom: 50,
        marginTop: 40
    },
}));

export default useStyles;