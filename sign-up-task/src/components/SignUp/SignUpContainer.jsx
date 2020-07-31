import React from 'react';
import {SignUpForm} from "./SignUpForm";
import {fieldValidator} from "../../Utils/validators";

export const SignUpContainer = () => {
    const [values, setValues] = React.useState({
        firstName:'',
        lastName:'',
        password:'',
        confirmPassword:''
    });
    const [errors, setErrors] = React.useState(false);
    const [helperText, setHelperText] = React.useState(false);


    const handleChange = (prop) => (event) => {
        event.persist();
        setValues(values => ({...values, [prop]: event.target.value}));
        let validation = fieldValidator(prop, event.target.value, values.password)
        setErrors(values => ({...values, [prop]: validation.error}));
        setHelperText(values => ({...values, [prop]: validation.helperText}));
    };

    const handleSubmit = () => {
        (formValid()) ?
            alert(`--SUBMITTING--
               // First Name: ${values.firstName}
               // Last Name: ${values.lastName}
               // Email: ${values.email}
               // Password: ${values.password}
               // Confirmed Password ${values.confirmPassword}`)
            : console.error("FORM INVALID");
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

    return (
        <SignUpForm
            handleChange={handleChange}
            values={values}
            onClick={() => {
                setValues(false);
                setErrors(false);
                setHelperText(false)
            }}
            errors={errors}
            helperText={helperText}
            handleSubmit={handleSubmit}
        />
    )
}