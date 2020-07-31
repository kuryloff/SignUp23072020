import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import {fieldValidator} from "../../Utils/validators";
import {SignInForm} from "./SignInForm";

export const SignInContainer = ()=> {
    const [values, setValues] = React.useState({
        email:"",
        password:'',
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
            alert(`--Log in--
               // Email: ${values.email}
               // Password: ${values.password}`)
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
        <SignInForm
            handleChange={handleChange}
            values={values}
            onClick={() => {
                setValues(false)
                setErrors(false)
                setHelperText(false)
            }}
            errors={errors}
            helperText={helperText}
            handleSubmit={handleSubmit}
        />
    )
}