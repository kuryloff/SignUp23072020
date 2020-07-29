import React from 'react';
import {useStyles} from "../common/useStyles/signUpStyles";
import {ButtonMaterial} from "../common/Button/Button";
import {PasswordInput} from "../common/passwordInput/SignUpContainer";
import {Input} from "../common/Input/Input";


export const SignUpForm = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
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