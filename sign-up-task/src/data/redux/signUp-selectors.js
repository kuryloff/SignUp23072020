export const getFirstName = (state) => {
    return state.signUp.getIn(['userData','firstName'])
};
export const getLastName = (state) => {
    return state.signUp.getIn( ['userData', 'lastName'])
};
export const getEmail = (state) => {
    return state.signUp.getIn(['userData', 'email'])
};
export const getPassword = (state) => {
    return state.signUp.getIn(['userData', 'password'])
};

export const getConfirmPassword = (state) => {
    return state.signUp.getIn(['confirmPassword', 'value'])
};


