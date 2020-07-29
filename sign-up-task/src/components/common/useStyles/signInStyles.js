import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '100ch',
    },
    input: {
        margin: theme.spacing(1),
    },
    email: {
        margin: theme.spacing(1),
        width: '100ch',
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '500px',
        justifyContent: 'space-between',
        boxShadow: "0px 5px 10px #555"
    },
    header: {
        width: "100%",
        textAlign: 'center',
        fontFamily: "Roboto",
    },
    button: {
        width: '100%',
        margin: theme.spacing(1),

    },
    error: {
        color: '#f44336',
        fontFamily: 'Roboto',
        fontSize: "12px",
        margin: "3px 14px 0px",

    },
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


