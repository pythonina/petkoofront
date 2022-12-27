import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    btnPaginate: {
        position: 'relative',
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
        borderRadius: 20,
        backgroundColor: theme.palette.primary.main,
        transformOrigin: 'left'
    },
    btnPaginate__arrow__top: {
        left: 35,
        transform: 'translateY(-2px) rotate(45deg)'
    },
    btnPaginate__arrow__bottom: {
        left: 35,
        transform: 'rotate(-45deg)',
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
    }
}));

export default useStyles;