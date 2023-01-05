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
        zIndex: '3',
        '@media screen and (max-width: 825px)': {
            marginRight: 'auto',
        },
        '@media screen and (max-width: 605px)': {
            marginLeft: 'auto',
        },
        '@media screen and (max-width: 380px)': {
            width: '100%',
            borderRadius: 0
        },

    },
    auth__item: {
        '&>img': {
            marginLeft: '0.5rem'
        },
        display: 'flex',
        padding: 10,
        borderRadius: 8,
        '@media screen and (max-width: 825px)': {
            order: 1,
            margin: '1rem !important'
        }
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
    },
    side_bar: {
        '@media screen and (max-width: 991.98px)': {
            marginRight: '1rem',
        },
        '@media screen and (max-width: 825px)': {
            justifyContent: 'flex-start',
            flexDirection: 'row',
            flexWrap: 'wrap',
        },
        '@media screen and (max-width: 575.98px)': {
            marginRight: 0,
        }
    },
    search_root: {
        '@media screen and (max-width: 825px)': {
            backgroundColor: 'transparent',
            marginTop: '0rem !important',
            alignSelf: 'center',
            marginLeft: 'auto !important',
        },
        '@media screen and (max-width: 605px)': {
            width: '100%',
            marginTop: '1rem !important'
        },
    },
    search_root2: {
        '@media screen and (max-width: 825px)': {
            marginBottom: '0',
        },
    },
    search_text: {
        '@media screen and (max-width: 825px)': {
            display: 'none'
        }
    },
    radio_group: {
        '@media screen and (max-width: 825px)': {
            flexDirection: 'row',
            width: '200%',
            margin: '2.5rem -100% 0 0'
        }
    }
}));

export default useStyles;