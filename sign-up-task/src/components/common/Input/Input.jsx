import React from 'react';
import {useStyles} from "../useStyles/signUpStyles";
import TextField from "@material-ui/core/TextField";


export const Input = (props) => {
    const classes = useStyles();
     return (
        <TextField
            className={props.classes}
            id="outlined-basic-firstName"
            label={props.label}
            variant="outlined"
            value = {props.value || ""}
            type={props.type}
            placeholder={props.placeholder}
            error={props.error}
            helperText={props.helperText}
            autoComplete={props.autocomplete || ""}
            onChange={props.handleChange}
        />
    );
}
