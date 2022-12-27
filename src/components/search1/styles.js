import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    search1: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 7,
        paddingBottom: 7,
        paddingRight: 20,
        paddingLeft: 10,
        borderRadius: 24,
        backgroundColor: theme.palette.grey.light,
    },
    search1__btn: {
        marginLeft: 5
    },
    search1__cat: {
        marginRight: 10
    }

}));

export default useStyles;