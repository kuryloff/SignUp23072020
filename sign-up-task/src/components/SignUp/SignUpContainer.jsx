import React, {useEffect} from 'react';
import {SignUpForm} from "./SignUpForm";
import { formValidator} from "../../Utils/validators";
import {connect} from "react-redux";
import {checkEmailDB, fieldOnChange, setClearForm} from "../../redux/signUp-reducer";
import {
    getEmailExist,
    getErrors,
    getHelperText,
    getIsValidForm,
    getValues
} from "../../redux/signUp-selectors";


const SignUpContainer = (props) => {

    const handleChange = (field) => (e) => {
        let password = props.values.password;
        let value = e.target.value
        props.fieldOnChange(field, value, password)
    };

    const handleSubmit = () => {
        let isValid = formValidator(props.errors, props.values);
        isValid && props.checkEmailDB(props.values);
        !isValid && console.log("INVALID")
    }


    return (
        <SignUpForm
            submitError={props.emailExist}
            handleChange={handleChange}
            values={props.values}
            onClick={props.setClearForm}
            errors={props.errors}
            helperText={props.helperText}
            handleSubmit={handleSubmit}
            buttonText="Sign Up"
            clearForm='Clear form'
        />
    )
};

let mapStateToProps = (state) => {

    return {
        emailExist: getEmailExist(state),
        values: getValues(state),
        errors: getErrors(state),
        helperText: getHelperText(state),
        isValidForm: getIsValidForm(state),
    }
};


export default connect(mapStateToProps,
    {fieldOnChange, checkEmailDB, setClearForm})(SignUpContainer);