import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.secondary.main,
        paddingRight: 70,
        paddingLeft: 70,
    },
}));

export default useStyles;