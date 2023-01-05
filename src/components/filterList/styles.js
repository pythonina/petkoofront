import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        overflow: 'hidden',
        marginRight: '54%',
        '@media screen and (max-width: 1550px)': {
            marginRight: '50%',
        },
        '@media screen and (max-width: 1400px)': {
            marginRight: '40%',
        },
        '@media screen and (max-width: 1200px)': {
            marginRight: '34%',
        },
        '@media screen and (max-width: 1050px)': {
            marginRight: '32%',
        },
        '@media screen and (max-width: 992px)': {
            marginRight: '46%',
        },
        '@media screen and (max-width: 768px)': {
            marginRight: '57%',
        },
        '@media screen and (max-width: 576px)': {
            marginTop: '17%',
            marginRight: '0',
        },
    },
    root2: {
        display: 'flex',
        marginTop: '2.2rem',
        marginBottom: '2rem',
        '@media screen and (max-width: 992px)': {
            overflow: 'auto',
            paddingBottom: '10px'
        },
        '@media screen and (max-width: 576px)': {
            paddingBottom: '10px',
            marginBottom: '0',
            paddingTop: '10px'
        },
        '@media screen and (max-width: 460px)': {
            paddingTop: '20px'
        },
        '@media screen and (max-width: 380px)': {
            paddingTop: '30px'
        },
        
    },
    filterBtn: {
        whiteSpace: 'nowrap',
        minWidth: 'auto',
    },
    
}));

export default useStyles;