import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.secondary.main,
        whiteSpace: 'nowrap',
        '@media screen and (min-width: 576px) and (max-width: 767.98px)': {
            display: 'none',
        },
        '@media screen and (min-width: 768px)': {
            paddingRight: 40,
            paddingLeft: 40,
        },
        '@media screen and (min-width: 1070px)': {
            paddingRight: 70,
            paddingLeft: 70,
        }
    },
    root2: {
        backgroundColor: theme.palette.secondary.main,
        whiteSpace: 'nowrap',
        '@media screen and (min-width: 576px) and (max-width: 585px)': {
            paddingRight: 12,
            paddingLeft: 12,
        },
        '@media screen and (min-width: 768px)': {
            paddingRight: 40,
            paddingLeft: 40,
            display: 'none',
        },
        '@media screen and (max-width: 575.98px)': {
            display: 'none',
        },
        '@media screen and (min-width: 1070px)': {
            paddingRight: 70,
            paddingLeft: 70,
        }
    },
    linkRoot: {
        '@media screen and (max-width: 575.98px)': {
            flex: 2,
            margin: '0 15px 0 25px'
        },
        '@media screen and (max-width: 360px)': {
            margin: '0 8px 0 25px'
        },
        '@media screen and (min-width: 576px) and (max-width: 650px)': {
            width: '145px',
            marginRight: '10px'
        }
    }
}));

export default useStyles;