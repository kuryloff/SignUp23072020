import React from 'react';
import {SignUpForm} from "./SignUpForm";
import {fieldValidator, signUpFormValidator} from "../../Utils/validators";


export const SignUpContainer = () => {
    const [values, setValues] = React.useState({
        firstName: '',
        lastName: '',
        email: "",
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = React.useState(false);
    const [helperText, setHelperText] = React.useState(false);
    const [submitError, setSubmitError] = React.useState(false);


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
                "firstName": `${values.firstName}`,
                "lastName": `${values.lastName}`,
                "email": `${values.email}`,
                "password": `${values.password}`
            })
            : console.error("FORM INVALID");
    }

    const checkUser = async (newUser) => {
        setSubmitError(false);
        let isUser = await signUpFormValidator(newUser, values.email).then(res => res)
        isUser ? setSubmitError(true) : clearFormFields();
        !isUser && alert(`NEW USER
               FIRST NAME -  ${values.firstName}
               LAST NAME -  ${values.lastName}
               EMAIL -  ${values.email}
               PASSWORD -  ${values.password}
        `)
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

            <SignUpForm
                submitError={submitError}
                handleChange={handleChange}
                values={values}
                onClick={clearFormFields}
                errors={errors}
                helperText={helperText}
                handleSubmit={handleSubmit}
            />
    )
}