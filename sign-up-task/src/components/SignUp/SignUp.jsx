import React, {useState} from 'react';
import {SignUpForm} from "./SignUpForm";
import {fieldValidator} from "../../Utils/validators";
import {connect} from "react-redux";
import {setClearForm, setValue} from "../../redux/signUp-reducer";
import {getEmail, getFirstName, getLastName, getPassword} from "../../redux/signUp-selectors";
import {usersAPI} from "../../api/api";


const SignUp = (props) => {
    const [confirmPassword, setConfirmPassword] = useState(false)
    const [emailExists, setEmailExists] = useState(false)
    const [success, setSuccess] = useState(false)
    const [touched, setTouched] = useState(false)


    const firstNameError = fieldValidator("firstName", props.values.firstName);
    const lastNameError = fieldValidator("lastName", props.values.lastName);
    const emailError = fieldValidator("email", props.values.email);
    const passwordError = fieldValidator("password", props.values.password);
    const confirmPasswordError = fieldValidator("confirmPassword", props.values.password, confirmPassword);


    const handleChange = (field, firstNameError, lastNameError, emailError, passwordError, confirmPasswordError) => (e) => {
        setSuccess(false);
        setTouched(value =>{touched:{[field]=true}})
        (field === "confirmPassword")
            ? setConfirmPassword(e.target.value)
            : props.setValue(field, e.target.value)
    };



    const handleSubmit = () => {
        (firstNameError || lastNameError || emailError || passwordError || confirmPasswordError)
            ? setSuccess(false)
            : checkEmailDB(props.values)
    }

    const checkEmailDB = async (values) => {
        let users = await usersAPI.getUsers()
            .then(res => res.data)
            .catch(err => alert(err));
        if (users.some(u => u.email === values.email)) {
            setEmailExists(true);
        } else {
            setEmailExists(false);
            setSuccess(true);
            await usersAPI.setUser(props.values)
        }
    }

    const clearFormFields = () => {
        props.setClearForm();
    }

    return (
        <SignUpForm
            touched={touched}
            submitError={emailExists}
            success={success}
            handleChange={handleChange}
            values={props.values}
            confirmPassword={confirmPassword}
            onClick={clearFormFields}
            firstNameError={firstNameError}
            lastNameError={lastNameError}
            emailError={emailError}
            passwordError={passwordError}
            confirmPasswordError={confirmPasswordError}
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