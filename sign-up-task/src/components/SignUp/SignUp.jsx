import React, {useState} from 'react';
import {SignUpForm} from "./SignUpForm";
import {fieldValidator, formValidator} from "../../Utils/validators";
import {connect} from "react-redux";
import {setClearForm, setValue} from "../../redux/signUp-reducer";
import {
    getEmail,
    getFirstName,
    getLastName, getPassword,

} from "../../redux/signUp-selectors";
import {usersAPI} from "../../api/api";


const SignUp = (props) => {

    const [confirmPasswordValue, setConfirmPasswordValue] = useState(false);
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState(false);
    const [emailExists, setEmailExists] = useState(false);


    const handleChange = (field) => (e) => {
        (field === "confirmPassword")
            ? setConfirmPasswordValue(e.target.value)
            : props.setValue(field, e.target.value)
        let validation = fieldValidator(field, e.target.value, props.values.password)
        // setError(values => ({...values, [field]: validation.error}));
        // setHelperText(values => ({...values, [field]: validation.helperText}));
    };

    const handleSubmit = () => {
        let isValid = formValidator(error, props.values);
        isValid && checkEmailDB(props.values);
        !isValid && console.log("INVALID");
    }

    const checkEmailDB = async (values) => {
        let users = await usersAPI.getUsers()
            .then(res => res.data)
            .catch(err => alert(err));
        if (users.some(u => u.email === values.email)) {
            setEmailExists(true)
        } else {
            setEmailExists(false);
            await usersAPI.setUser(props.values)
        }
    }

    const clearFormFields = () => {
        props.setClearForm();
        setError(false);
        setHelperText(false);
        setConfirmPasswordValue(false);
    }

    return (
        <SignUpForm
            submitError={emailExists}
            handleChange={handleChange}
            values={props.values}
            confirmPasswordValue={confirmPasswordValue}
            onClick={clearFormFields}
            errors={validation.error}
            helperText={helperText}
            handleSubmit={handleSubmit}
            buttonText="Sign Up"
            clearForm='Clear form'
        />
    )
};

let mapStateToProps = (state) => {

    return {
        values: {
            firstName: getFirstName(state),
            lastName: getLastName(state),
            email: getEmail(state),
            password: getPassword(state),
        }
    }
};


export default connect(mapStateToProps,
    {setValue, setClearForm})(SignUp);