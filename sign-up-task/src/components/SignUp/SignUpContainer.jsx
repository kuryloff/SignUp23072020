import React from 'react';
import classes from './SignUpContainer.module.css'
//
//
// const formValid = (formsErrors, state) => {
//     let valid = true;
//     Object.values(formsErrors).forEach(val => {
//         val.length > 0 && (valid = false);
//         });
//     // Object.values(state).forEach(val => {
//     //     val.length === 0 && (valid = false);
//     //     alert(val.length)
//     // });
//     return valid;
// };
//
// const emailRegex = RegExp(
//     /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
// );
//
class SignUpContainer extends React.Component {
    render() {
        return (
            <div className={classes.wrapper}>
                <div className={classes.form}>
                    <h1>Please Sign Up</h1>
                    <SignUpForm/>
                </div>
            </div>
        );
    }
}

//
class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            validation: {
                firstName: false,
                lastName: false,
                email: false,
                password: false,
                confirmPassword: false,
            },
            formErrors: {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: ""
            }
        };
    }

//
//     handleSubmit = e => {
//         // e.preventDefault();
//         if (formValid(this.state.formErrors, this.state)) {
//             alert(`
//             First name ${this.state.firstName}
//             Last name ${this.state.lastName}
//             Email ${this.state.email}
//             password ${this.state.password}
//             confirm password ${this.state.confirmPassword}
//             `)
//         }
//     };
//
    handleChange = e => {
        e.preventDefault();
        const {name, value} = e.target;
        this.setState(
            {
                ...this.state,
                [name]: value
            }
        );
//         let formErrors = this.state.formErrors;
//
//         switch (name) {
//             case "firstName":
//                 if (value.length === 0) {
//                     formErrors.firstName = 'Empty field'
//                 } else {
//                     formErrors.firstName =
//                         value.length > 1 && value.length > 0
//                             ? 'maximum 100 characters are allowed'
//                             : "";
//                 }
//                 break;
//             case "lastName":
//                 if (value.length === 0) {
//                     formErrors.lastName = 'Empty field'
//                 } else {
//                     formErrors.lastName =
//                         value.length > 1 && value.length > 0
//                             ? 'maximum 100 characters are allowed'
//                             : "";
//                 }
//                 break;
//             case "email":
//                 formErrors.email =
//                     emailRegex.test(value) && value.length > 0
//                         ? ''
//                         : "Invalid email.address";
//                 break;
//             case "password":
//                 formErrors.password = value.length < 6 && value.length > 0
//                     ? 'minimum 6 characters required'
//                     : "";
//                 formErrors.password = value.length > 100
//                     ? 'maximum 100 characters are allowed'
//                     : "";
//                 break;
//             case "confirmPassword":
//                 formErrors.confirmPassword = value.length < 6 && value.length > 0
//                     ? 'minimum 6 characters required'
//                     : "";
//                 formErrors.confirmPassword = value.length > 100
//                     ? 'maximum 100 characters are allowed'
//                     : "";
//                 break;
//             default:
//                 break;
//         }
//

    };

//
    render() {
        return (
            <div className={classes.formWrapper}>
                <form onSubmit={this.handleSubmit} noValidate>
                    <div className={classes.firstName}>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            placeholder="First Name"
                            name='firstName'
                            value={this.state.firstName}
                            onChange={this.handleChange}/>
                    </div>
                    <div className={classes.lastName}>
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            placeholder="Last Name"
                            name='lastName'
                            value={this.state.lastName}
                            onChange={this.handleChange}/>
                    </div>
                    <div className={classes.email}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            placeholder="Email"
                            name='email'
                            value={this.state.email}
                            onChange={this.handleChange}/>
                    </div>
                    <div className={classes.password}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            name='password'
                            value={this.state.password}
                            onChange={this.handleChange}/>
                    </div>
                    <div className={classes.password}>
                        <label htmlFor="confirmPassword">Confirm password</label>
                        <input
                            type="password"
                            placeholder="Confirm password"
                            name='confirmPassword'
                            value={this.state.confirmPassword}
                            onChange={this.handleChange}/>
                    </div>
                    <div className={classes.signUp}>
                        <button type="submit">Sign Up</button>
                        <small>Already Have an Account?</small>
                    </div>
                </form>
            </div>

        );
    }
}


export default SignUpContainer;

