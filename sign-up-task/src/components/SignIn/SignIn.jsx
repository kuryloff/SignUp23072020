import React, {useState} from 'react';
import {SignInForm} from "./SignInForm";
import {connect} from "react-redux";
import {setClearForm, setValue} from "../../data/redux/signIn-reducer";
import {fieldValidator} from "../../data/Utils/validators";
import {getEmail, getPassword} from "../../data/redux/signIn-selectors";
import {usersAPI} from "../../data/api/api";
import {SignUpForm} from "../SignUp/SignUpForm";

const SignIn = (props) => {

    const [correctEmail, setCorrectEmail] = useState(true);
    const [correctPassword, setCorrectPassword] = useState(true);
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [incorrectForm, setIncorrectForm] = useState(false)
    const [touched, setTouched] = useState(false)

    const emailError = fieldValidator("email", props.values.email);
    const passwordError = fieldValidator("password", props.values.password);

    const handleChange = (field) => (e) => {
        setTouched(touched => ({...touched, [field]: true}));
        props.setValue(field, e.target.value)
    };

    const handleSubmit = () => {
        (emailError || passwordError)
            ? setIncorrectForm(true)
            : checkUserDB(props.values);
    }

    const checkUserDB = async (loginUser) => {
        let users = await usersAPI.getUsers()
            .then(res => res.data)
            .catch(err => alert(err));
        let emailMatch = users.some(u => u.email === loginUser.email);
        let passwordMatch = users.some(u => u.password === loginUser.password);
        !emailMatch
            ? setCorrectEmail(false)
            : setCorrectEmail(true)
        !passwordMatch
            ? setCorrectPassword(false)
            : setCorrectPassword(true)
        emailMatch && passwordMatch
            ? setLoginSuccess(true)
            : setLoginSuccess(false)
    }

    const clearFormFields = () => {
        props.setClearForm();
        setCorrectEmail(true);
        setCorrectPassword(true);
        setLoginSuccess(false)
        setIncorrectForm(false)
    }

    return (
        <SignInForm
            incorrectForm={incorrectForm}
            touched={touched}
            handleChange={handleChange}
            values={props.values}
            onClick={clearFormFields}
            emailError={emailError}
            passwordError={passwordError}
            handleSubmit={handleSubmit}
            correctEmail={correctEmail}
            correctPassword={correctPassword}
            buttonText="Sign In"
            clearForm='Clear form'
            loginSuccess={loginSuccess}
        />
    )
}

let mapStateToProps = (state) => {
    return {
        values: {
            email: getEmail(state),
            password: getPassword(state),
        }
    }
};

export default connect(mapStateToProps, {setValue, setClearForm})(SignIn);