export const getCorrectEmail = (state) => {
    return state.signIn.correctEmail
};
export const getCorrectPassword = (state) => {
    return state.signIn.correctPassword
};

export const getValues = (state) => {
    return state.signIn.values
};

export const getErrors = (state) => {
    return state.signIn.errors
};

export const getHelperText= (state) => {
    return state.signIn.helperText
};

export const getLoginSuccess= (state) => {
    return state.signIn.loginSuccess
};
