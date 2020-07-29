import React from 'react';
import TextField from "@material-ui/core/TextField";


export const Input = (props) => {
     return (
        <TextField
            className={props.classes}
            id={`outlined-basic-${props.label}`}
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
