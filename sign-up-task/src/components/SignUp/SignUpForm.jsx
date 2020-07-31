import React from 'react';
// import {useStyles} from "../common/useStyles/signUpStyles";
import {ButtonMaterial} from "../common/Button/Button";
import {PasswordInput} from "../common/passwordInput/PasswordInput";
import {Input} from "../common/Input/Input";

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
    errorSubmit: {
        color: "red",
        width: "100%",
        textAlign: "center"
    }
}));


export const SignUpForm = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {(props.submitError) &&
            <h4 className={classes.errorSubmit}> This email is already registered. Enter different email</h4>}
            <form className={classes.form} onSubmit={props.handleSubmit}>
                <h1 className={classes.header}>Please Sign Up</h1>
                <Input
                    classes={classes.input}
                    label="First Name"
                    placeholder="John"
                    type='text'
                    value={props.values.firstName}
                    error={props.errors.firstName}
                    helperText={props.helperText.firstName}
                    handleChange={props.handleChange('firstName')}
                />

                <Input
                    classes={classes.input}
                    label="Last Name"
                    placeholder="Johnson"
                    type='text'
                    value={props.values.lastName}
                    error={props.errors.lastName}
                    helperText={props.helperText.lastName}
                    handleChange={props.handleChange('lastName')}
                />

                <Input
                    classes={classes.email}
                    label="Email"
                    placeholder={`example@gmail.com`}
                    type='email'
                    value={props.values.email}
                    error={props.errors.email}
                    helperText={props.helperText.email}
                    handleChange={props.handleChange('email')}
                />

                <PasswordInput
                    label='Password'
                    placeholder='Password'
                    value={props.values.password}
                    error={props.errors.password}
                    helperText={props.helperText.password}
                    labelWidth={70}
                    handleChange={props.handleChange("password")}
                />

                <PasswordInput
                    label='Confirm Password'
                    placeholder='Confirm password'
                    value={props.values.confirmPassword}
                    error={props.errors.confirmPassword}
                    helperText={props.helperText.confirmPassword}
                    labelWidth={130}
                    handleChange={props.handleChange('confirmPassword')}
                />

                <ButtonMaterial
                    variant='contained'
                    color="primary"
                    type="submit"
                    text="Sign up"
                />

                <ButtonMaterial
                    variant='outlined'
                    color="primary"
                    type="button"
                    onClick={props.onClick}
                    text="Clear form"

                />
            </form>
        </div>
    );
}