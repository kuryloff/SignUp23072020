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

export const signUpFormValidator = async (newUser, email) => {
    let users = await signUpAPI.getUsers();
    let isUser = users.some(user => user.email === email)
    isUser && signUpAPI.setUser(newUser)
    return isUser;
}

export const signInFormValidator = async (input, email, password) => {
    let users = await signUpAPI.getUsers();
    let user = emailValidator(users, email) || ""
    let correctEmail = users.some(user => user.email === email)
    let correctPassword = passwordValidator(user, password)

    return {
        email: correctEmail,
        password: correctPassword
    }
}

const emailValidator = (users, email) => {
    let userToCheck;
    users.forEach(user => user.email === email && (userToCheck = user))
    return userToCheck;
};


const passwordValidator = (user, password) => (user.password === password)
