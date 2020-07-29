import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    headerWrapper: {
        gridArea: "1 / 1 / 2 / 6",
        backgroundColor: "#dbe0f6",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
    },

    item: {
        margin: "20px",
        textDecoration: "none",
        textAlign: "center",
    }
}));


