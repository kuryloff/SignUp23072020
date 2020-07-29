import React from 'react';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useStyles} from "../common/useStyles/loginStyles";
import {fieldValidator} from "../../Utils/validators";
import SignUpForm from "../SignUp/SignUpForm";
import SignInForm from "./SignIpForm";


export default function SignInContainer() {
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
            alert(`--Log IN--
               // First Name: ${values.firstName}
               // Last Name: ${values.lastName}
               // Email: ${values.email}
               // Password: ${values.password}
               // Confirmed Password ${values.confirmPassword}`)
            : console.error("FORM INVALID");
    }

    const formValid = () => {
        let valid = false
        Object.values(errors).map(x => {
            (x === "") ? valid = true : valid = false
        });
        Object.values(values).map(x => {
            (x === "") ? valid = false : valid = true
        })
        console.log(valid)
        return valid;
    }

    return (
        <SignInForm
            handleChange={handleChange}
            values={values}
            onClick={() => {
                setValues(false)
            }}
            errors={errors}
            helperText={helperText}
            handleSubmit={handleSubmit}
        />
    )
}