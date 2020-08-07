import React from 'react';
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
    error: {
        color: '#f44336',
        fontFamily: 'Roboto',
        fontSize: "12px",
        margin: "3px 14px 0px",
    },
    header: {
        width: "100%",
        textAlign: 'center',
        fontFamily: "Roboto",
    },
    errorSubmit: {
        color: "red",
        width: "100%",
        textAlign: "center"
    }
}));

export const SignInForm = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {(!props.correctEmail) &&
            <h4 className={classes.errorSubmit}> This email is not registered. Please enter correct email or Sign
                In</h4>}
            {(!props.correctPassword) && <h4 className={classes.errorSubmit}> Wrong password</h4>}
            {(props.loginSuccess) && <h4 className={classes.errorSubmit}> !!! Successful LOGIN !!!</h4>}

            <form className={classes.form} onSubmit={props.handleSubmit}>
                <h1 className={classes.header}>Please Sign In</h1>

                <Input
                    classes={classes.email}
                    label="Email"
                    placeholder={`example@gmail.com`}
                    type='email'
                    value={props.values.email}
                    error={!!props.emailError}
                    helperText={props.emailError}
                    handleChange={props.handleChange('email')}
                />

                <PasswordInput
                    label='Password'
                    placeholder='Password'
                    value={props.values.password}
                    error={!!props.passwordError}
                    helperText={props.passwordError}
                    labelWidth={60}
                    handleChange={props.handleChange("password")}
                />

                <ButtonMaterial
                    variant='contained'
                    color="primary"
                    type="submit"
                    buttonText={props.buttonText}
                />

                <ButtonMaterial
                    variant='outlined'
                    color="primary"
                    type="button"
                    onClick={props.onClick}
                    buttonText={props.clearForm}

                />
            </form>
        </div>
    );
}