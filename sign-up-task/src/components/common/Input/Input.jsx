import React from 'react';
import TextField from "@material-ui/core/TextField";
// import {useStyles} from "../useStyles/signUpStyles";

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(1),
    },
    textField: {
        width: '100ch',
        marginTop: theme.spacing(1),
    },
    input: {
        margin: theme.spacing(1),
    },
    email: {
        margin: theme.spacing(1),
        width: '100ch',
    },

    error: {
        color: '#f44336',
        fontFamily: 'Roboto',
        fontSize: "12px",
        margin: "3px 14px 0px",

    }
}));

export const Input = (props) => {
    const classes = useStyles();
    return (
        <TextField
            className={props.classes}
            id={`outlined-basic-${props.label}`}
            label={props.label}
            variant="outlined"
            value = {props.value}
            type={props.type}
            placeholder={props.placeholder}
            error={props.error}
            helperText={props.helperText}
            autoComplete={props.autocomplete || ""}
            onChange={props.handleChange}
        />
    );
}
