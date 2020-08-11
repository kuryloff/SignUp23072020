export const getEmail = (state) => {
    return state.signIn.get('email')
};
export const getPassword = (state) => {
    return state.signIn.get('password')
};