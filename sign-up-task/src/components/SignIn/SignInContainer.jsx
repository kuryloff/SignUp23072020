import React from 'react';
import {fieldValidator, signInFormValidator, userDBValidator} from "../../Utils/validators";
import {SignInForm} from "./SignInForm";

export const SignInContainer = () => {
    const [values, setValues] = React.useState({
        email: "",
        password: '',
    });
    const [errors, setErrors] = React.useState(false);
    const [helperText, setHelperText] = React.useState(false);
    const [emailCheckError, setEmailCheckError] = React.useState(false);
    const [passwordCheckError, setPasswordCheckError] = React.useState(false);

    const handleChange = (prop) => (event) => {
        event.persist();
        setValues(values => ({...values, [prop]: event.target.value}));
        let validation = fieldValidator(prop, event.target.value, values.password)
        setErrors(values => ({...values, [prop]: validation.error}));
        setHelperText(values => ({...values, [prop]: validation.helperText}));
    };

    const handleSubmit = () => {
        (formValid())
            ? checkUser({
                "email": `${values.email}`,
                "password": `${values.password}`
            })
            : console.error("FORM INVALID");
    }


    const checkUser = async (user) => {
        setEmailCheckError(false);
        setPasswordCheckError(false);

        let isUser = await userDBValidator(values.email, values.password);

        !isUser.email && setEmailCheckError(true);
        !isUser.password && setPasswordCheckError(true);
        (isUser.email && isUser.password) && clearFormFields();
        isUser.email && isUser.password && alert("Login Success");
    }




    const formValid = () => {
        let valid = false
        let valueError = true;
        let noError = true;

        Object.values(errors).forEach(x => x=== true && (valueError=!valueError));
        Object.values(values).forEach(x => x === "" && (noError =!noError));

        valueError && noError && (valid=!valid)

        return valid;
    }

    const clearFormFields = () => {
        setValues(false);
        setErrors(false);
        setHelperText(false)
    }

    return (
        <SignInForm
            handleChange={handleChange}
            values={values}
            onClick={clearFormFields}
            errors={errors}
            helperText={helperText}
            handleSubmit={handleSubmit}
            emailCheckError={emailCheckError}
            passwordCheckError={passwordCheckError}
            buttonText="Sign In"
            clearForm = 'Clear form'
        />
    )
}