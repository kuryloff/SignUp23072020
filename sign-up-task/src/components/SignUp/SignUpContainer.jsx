import React, {useEffect, useState} from 'react';
import {SignUpForm} from "./SignUpForm";
import {fieldValidator, formValidator} from "../../Utils/validators";
import {connect} from "react-redux";
import {checkEmailDB, fieldOnChange, setClearForm, setValue} from "../../redux/signUp-reducer";
import {
    getEmail,
    getFirstName,
    getLastName, getPassword,

} from "../../redux/signUp-selectors";


const SignUpContainer = (props) => {
const [error, setError] = useState();
const [helperText, setHelperText] = useState();


    const handleChange = (field) => (e) => {
        props.setValue(field, e.target.value)
        let validation = fieldValidator(field, e.target.value, props.password)
        setError(error:{field :validation.error})
        setHelperText(field, validation.helperText)
    };

    const handleSubmit = () => {
        let isValid = formValidator(props.errors, props.values);
        isValid && props.checkEmailDB(props.values);
        !isValid && console.log("INVALID");
    }


    return (
        <SignUpForm
            // submitError={props.emailExist}
            handleChange={handleChange}
            values={props.values}
            // onClick={props.setClearForm}
            // errors={props.errors}
            // helperText={props.helperText}
            // handleSubmit={handleSubmit}
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
    {setValue, setClearForm, fieldOnChange})(SignUpContainer);