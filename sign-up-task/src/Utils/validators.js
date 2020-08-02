import {signUpAPI} from "../api/api";

export const fieldValidator = (fieldName, value = '', passwordValue = '') => {
    switch (fieldName) {
        case 'firstName':
        case 'lastName':
            return (value === "")
                ? {error: true, helperText: 'Field is empty'}
                : ((value.length > 100)
                    ? {error: true, helperText: 'Maximum 100 characters allowed'}
                    : {error: false, helperText: ''})

        case 'email':
            return (value === "")
                ? {error: true, helperText: 'Field is empty'}
                : ((!value.match(
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                ))
                    ? {error: true, helperText: 'Enter valid email'}
                    : {error: false, helperText: ''})

        case 'password':
            return (value === "")
                ? {error: true, helperText: 'Field is empty'}
                : ((!value.match(
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/)
                )
                    ? {
                        error: true,
                        helperText: 'Password must include 8-64 characters: lowercase, uppercase, digit, symbol'
                    }
                    : {error: false, helperText: ''})

        case 'confirmPassword':
            return (value !== passwordValue)
                ? {error: true, helperText: `Confirmed password doesn't match the password`}
                : {error: false, helperText: ``}

        default:
    }
}


export const formValidator = (errors, values) => {
    let valid = false;
   !Object.values(errors).some(x => x === true) && !Object.values(values).some(x => x === "")  && (valid = true);
    return valid
}


export const userDBValidator = async (email, password) => {
    let users = await signUpAPI.getUsers();
    let user = (emailDBValidator(users, email) || "")
    let correctEmail = users.some(user => user.email === email)
    let correctPassword = (() => (user.password === password))(user, password)

    return {
        email: correctEmail,
        password: correctPassword
    }
}

const emailDBValidator = (users, email) => {
    let userToCheck;
    users.forEach(user => user.email === email && (userToCheck = user))
    return userToCheck;
};

const passwordDBValidator = (user, password) => (user.password === password)
