import React from 'react';
import {ButtonMaterial} from "../common/Button/Button";
import {PasswordInput} from "../common/passwordInput/SignUpContainer";
import {Input} from "../common/Input/Input";
import {useStyles} from "../common/useStyles/signUpStyles";


export const SignInForm =(props)=> {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <form className={classes.form} onSubmit={props.handleSubmit}>
                <h1 className={classes.header}>Please Sign In</h1>

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
                    labelWidth={60}
                    handleChange={props.handleChange("password")}
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