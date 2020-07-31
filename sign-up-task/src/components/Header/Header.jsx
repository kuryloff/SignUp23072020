import React from 'react';
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {useStyles} from "../common/useStyles/headerStyles";

const Header = () => {
    const classes = useStyles();
    return (
        <div
            className={classes.headerWrapper}>
            <h1>SUP - 4 - redux - immutable</h1>
            <NavLink to={'/signUp'} className={classes.item}>
                <Button variant="contained" color="primary">
                    Sign Up
                </Button>
            </NavLink>

            <NavLink to={'/signIn'} className={classes.item}>
                <Button variant="contained" color="primary">
                    Sign In
                </Button>
            </NavLink>
        </div>

    );
}


export default Header;

