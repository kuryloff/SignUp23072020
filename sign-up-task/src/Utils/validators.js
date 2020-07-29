export const fieldValidator = (fieldName, value = '', passwordValue = '') => {
    let errors;
    switch (fieldName) {
        case 'firstName':
        case 'lastName':
            return errors = (value === "")
                ? {error: true, helperText: 'Field is empty'}
                : ((value.length > 100)
                    ? {error: true, helperText: 'Maximum 100 characters allowed'}
                    : {error: false, helperText: ''})

        case 'email':
            return errors = (value === "")
                ? {error: true, helperText: 'Field is empty'}
                : ((!value.match(
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                ))
                    ? {error: true, helperText: 'Enter valid email'}
                    : {error: false, helperText: ''})

        case 'password':

            return errors = (value === "")
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
            return errors = (value !== passwordValue)
                ? {error: true, helperText: `Confirmed password doesn't match the password`}
                : {error: false, helperText: ``}

        default:
    }

}
