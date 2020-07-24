import React from 'react';
import classes from './Header.module.css'
import SignUpContainer from "../SignUp/SignUpContainer";
import {NavLink, Route} from "react-router-dom";
import Button from "@material-ui/core/Button";

const Header = (props) => {
    return (
        <div className={classes.wrapper}>

            {/*<div className={classes.optionLink}>*/}
            {/*    <NavLink to={'/signUp'} activeClassName={classes.activeLink}*/}
            {/*             className={classes.item}>Sign Up</NavLink>*/}
            {/*</div>*/}


                <NavLink to={'/signUp'} activeClassName={classes.activeLink} className={classes.item} >
                    <Button variant="contained" color="primary">
                    Sign Up
                    </Button>
                </NavLink>

            <NavLink to={'/signIn'} activeClassName={classes.activeLink} className={classes.item} >
                <Button variant="contained" color="primary">
                    Sign In
                </Button>
            </NavLink>


            {/*<div className={classes.optionLink}>*/}
            {/*    <NavLink to={'/signIn'} activeClassName={classes.activeLink}*/}
            {/*             className={classes.item}>Sign In</NavLink>*/}
            {/*</div>*/}

        </div>

    );
}


export default Header;

