import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        backgroundColor: 'white',
        color: theme.palette.grey.main,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 20,
        paddingLeft: 10,
        alignItems: 'center',
        borderRadius: 8,
        boxShadow: '0 0 5px #a99b9b',
        zIndex: '3'
    },
    auth__item: {
        '&>img': {
            marginLeft: '0.5rem'
        },
        display: 'flex',
        padding: 10,
        borderRadius: 8,
    },
    auth__item__selected: {
        color: 'white',
        backgroundColor: '#0084FF',
    },
    auth__item__unselected: {
        '&:hover': {
            backgroundColor: '#ccc'
        },
        backgroundColor: 'white'
    },
    auth__btn: {
        position: 'absolute',
        top: '2.2rem',
        right: '5%',
        backgroundColor: 'white',
        color: theme.palette.grey.main,
        fontWeight: '600',
        backgroundColor: 'white',
        border: '1px solid',
        borderColor: theme.palette.grey.main,
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 50,
        paddingLeft: 50,
    },
    searchIcon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '2rem',
        height: '1.6rem',
        borderRadius: '0.5rem',
        backgroundColor: '#43BB65'
    }
}));

export default useStyles;