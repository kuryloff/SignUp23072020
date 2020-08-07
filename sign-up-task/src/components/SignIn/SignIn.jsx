import React, {useState} from 'react';
import {SignInForm} from "./SignInForm";
import {connect} from "react-redux";
import {setClearForm, setValue} from "../../redux/signIn-reducer";
import {fieldValidator} from "../../Utils/validators";
import {getEmail, getPassword} from "../../redux/signIn-selectors";
import {usersAPI} from "../../api/api";

const SignIn = (props) => {

    const [correctEmail, setCorrectEmail] = useState(true);
    const [correctPassword, setCorrectPassword] = useState(true);
    const [loginSuccess, setLoginSuccess] = useState(false);

    const emailError = fieldValidator("email", props.values.email);
    const passwordError = fieldValidator("password", props.values.password);

    const handleChange = (field) => (e) => {
        props.setValue(field, e.target.value)
    };

    const handleSubmit = () => {
        !emailError && !passwordError && checkUserDB(props.values);
    }

    const checkUserDB = async (loginUser)=>{
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
    }

    return (
        <SignInForm
            handleChange={handleChange}
            values={props.values}
            onClick={clearFormFields}
            emailError={emailError}
            passwordError={passwordError}
            handleSubmit={handleSubmit}
            correctEmail={correctEmail}
            correctPassword={correctPassword}
            buttonText="Sign In"
            clearForm = 'Clear form'
            loginSuccess = {loginSuccess}
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