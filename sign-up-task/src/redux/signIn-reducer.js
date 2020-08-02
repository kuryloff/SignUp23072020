const SET_USER_TO_LOG_IN = 'sign-up-task/signUp/SET_USERS';

let initialState = {
    values: {
        email: "",
        password: '',
    },
    errors: false,
    helperText: false,
    emailCheckError: false,
    passwordCheckError: false,
    newUser: {}
};

const signInReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_TO_LOG_IN:
            return {
                ...state,
                newUser: action.user,
            }
        default:
            return state;
    }
};

export const setUserToLogIn = (user) => ({type: SET_USER_TO_LOG_IN, user});

export default signInReducer;