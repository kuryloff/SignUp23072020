import React from 'react';
import Button from "@material-ui/core/Button";
import {useStyles} from "../useStyles/loginStyles";


export const ButtonMaterial = (props) => {
    const classes = useStyles();
    return (
        <Button className={classes.button}
                variant={props.variant}
                color={props.color}
                type={props.type}
                onClick={props.onClick}
        >
            {props.text}
        </Button>
    );
}


