import React, {useState} from 'react';
import {SignUpForm} from "./SignUpForm";
import {fieldValidator} from "../../data/Utils/validators";
import {connect} from "react-redux";
import {ClearValues, ClearConfirmPassword, setConfirmPassword, setValue} from "../../data/redux/signUp-reducer";
import {getConfirmPassword, getEmail, getFirstName, getLastName, getPassword} from "../../data/redux/signUp-selectors";
import {usersAPI} from "../../data/api/api";


const SignUp = (props) => {
    const [emailExists, setEmailExists] = useState(false)
    const [success, setSuccess] = useState(false)
    const [incorrectForm, setIncorrectForm] = useState(false)
    const [touched, setTouched] = useState(false)


    const firstNameError = fieldValidator("firstName", props.values.firstName);
    const lastNameError = fieldValidator("lastName", props.values.lastName);
    const emailError = fieldValidator("email", props.values.email);
    const passwordError = fieldValidator("password", props.values.password);
    const confirmPasswordError = fieldValidator("confirmPassword", props.values.password, props.confirmPassword);


    const handleChange = (field) => (e) => {
        setSuccess(false);
        setTouched(touched => ({...touched, [field]: true}));
        (field === "confirmPassword")
            ? props.setConfirmPassword(e.target.value)
            : props.setValue(field, e.target.value)
    };


    const handleSubmit = () => {
        setEmailExists(false);
        (firstNameError || lastNameError || emailError || passwordError || confirmPasswordError)
            ? setIncorrectForm(true)
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
        props.ClearValues();
        props.ClearConfirmPassword();
        setTouched(false);
        setIncorrectForm(false)
    }

    return (
        <SignUpForm
            incorrectForm={incorrectForm}
            touched={touched}
            submitError={emailExists}
            success={success}
            handleChange={handleChange}
            values={props.values}
            confirmPassword={props.confirmPassword}
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
        },
        confirmPassword: getConfirmPassword(state),
    }
};

export default connect(mapStateToProps,
    {setValue, ClearValues, ClearConfirmPassword, setConfirmPassword})(SignUp);