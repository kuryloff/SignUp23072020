import React from 'react';
import {SignInForm} from "./SignInForm";
import {connect} from "react-redux";
import {
    getCorrectEmail,
    getCorrectPassword,
    getErrors,
    getHelperText,
    getLoginSuccess,
    getValues
} from "../../redux/signIn-selectors";
import {checkUserDB, fieldOnChange, setClearForm} from "../../redux/signIn-reducer";
import {formValidator} from "../../Utils/validators";

const SignInContainer = (props) => {

    const handleChange = (field) => (e) => {
        let password = props.values.password;
        let value = e.target.value;
        props.fieldOnChange(field, value, password);
    };

    const handleSubmit = () => {
        let isValid = formValidator(props.errors, props.values);
        isValid && props.checkUserDB(props.values);
        !isValid && console.log("INVALID SIGN IN");
    }

    return (
        <SignInForm
            handleChange={handleChange}
            values={props.values}
            onClick={props.setClearForm}
            errors={props.errors}
            helperText={props.helperText}
            handleSubmit={handleSubmit}
            correctEmail={props.correctEmail}
            correctPassword={props.correctPassword}
            buttonText="Sign In"
            clearForm = 'Clear form'
            loginSuccess = {props.loginSuccess}
        />
    )
}

let mapStateToProps = (state) => {

    return {
        values: getValues(state),
        errors: getErrors(state),
        helperText: getHelperText(state),
        correctEmail:getCorrectEmail(state),
        correctPassword: getCorrectPassword(state),
        loginSuccess: getLoginSuccess(state)
    }
};

export default connect(mapStateToProps, {fieldOnChange, setClearForm, checkUserDB})(SignInContainer);