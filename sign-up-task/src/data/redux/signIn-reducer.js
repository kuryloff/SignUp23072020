import SignInUserDTO from "../immutableEntities/SignInUserDTO";

const SET_VALUE = 'sign-up-task/signIn/SET_VALUE';
const SET_CLEAR_FORM = 'sign-up-task/signIn/SET_CLEAR_FORM';

const values = new SignInUserDTO();

const signInReducer = (state = values, action) => {
    switch (action.type) {
        case SET_VALUE:
            return state.set(action.field, action.value)
        case SET_CLEAR_FORM:
            return new SignInUserDTO();
        default:
            return state;
    }
};

export const setValue = (field, value) => ({type: SET_VALUE, field, value})
export const setClearForm = () => ({type: SET_CLEAR_FORM})


export default signInReducer;