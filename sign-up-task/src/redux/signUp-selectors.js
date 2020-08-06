export const getFirstName = (state) => {
    return state.signUp.get('firstName')
};
export const getLastName = (state) => {
    return state.signUp.get('lastName')
};
export const getEmail = (state) => {
    return state.signUp.get('email')
};
export const getPassword = (state) => {
    return state.signUp.get('password')
};


