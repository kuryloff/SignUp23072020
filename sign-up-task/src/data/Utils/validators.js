export const fieldValidator = (fieldName, value = "", confirmPassword = '') => {
    switch (fieldName) {
        case 'firstName':
             return (value === "")
                ? 'Field is empty'
                : ((value.length > 100)
                    ? 'Maximum 100 characters allowed'
                    : undefined)
        case 'lastName':
            return (value === "")
                 ? 'Field is empty'
                : ((value.length > 100)
                    ? 'Maximum 100 characters allowed'
                    : undefined)
        case 'email':
            return (value === "")
                   ? 'Field is empty'
                : ((!value.match(
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                ))
                    ? 'Enter valid email'
                    : undefined)

        case 'password':
            return (value === "")
                  ? 'Field is empty'
                : ((!value.match(
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/)
                )
                    ? 'Password must include 8-64 characters: lowercase, uppercase, digit, symbol'
                    : undefined)
        case 'confirmPassword':
            return (value !== confirmPassword)
                ? `Confirmed password doesn't match the password`
                : undefined
        default:
    }
}