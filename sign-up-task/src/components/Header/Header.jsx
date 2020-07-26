import React from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";

const Header = (props) => {
    return (
        <div className={classes.wrapper}>
            <NavLink to={'/signUp'}  className={classes.item}>
                <Button variant="contained" color="primary">
                    Sign Up
                </Button>
            </NavLink>

            <NavLink to={'/signIn'}  className={classes.item}>
                <Button variant="contained" color="primary">
                    Sign In
                </Button>
            </NavLink>
        </div>

    );
}


export default Header;

