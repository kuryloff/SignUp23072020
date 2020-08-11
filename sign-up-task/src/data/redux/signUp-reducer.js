import CreateUserDTO from "../immutableEntities/CreateUserDTO";
import ConfirmPassword from "../immutableEntities/ConfirmPassword";

const {OrderedMap} = require('immutable');
const SET_VALUE = 'sign-up-task/signUp/SET_VALUE';
const SET_CONFIRM_PASSWORD = 'sign-up-task/signUp/SET_CONFIRM_PASSWORD';
const CLEAR_VALUES = 'sign-up-task/signUp/CLEAR_VALUES';
const CLEAR_CONFIRM_PASSWORD = 'sign-up-task/signUp/CLEAR_CONFIRM_PASSWORD';

const InitialState = OrderedMap({
    userData: new CreateUserDTO(),
    confirmPassword: new ConfirmPassword(),
})


const signUpReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_VALUE:
            return state.setIn(['userData', action.prop], action.value)
        case CLEAR_VALUES:
            return  state.set('userData', new CreateUserDTO())
        case CLEAR_CONFIRM_PASSWORD:
                state.setIn(['confirmPassword', 'value'], "")
        case SET_CONFIRM_PASSWORD:
            return state.setIn(['confirmPassword', 'value'], action.value)
         default:
            return state;
    }
}

export const setValue = (prop, value) => ({type: SET_VALUE, prop, value});
export const setConfirmPassword = (value) => ({type: SET_CONFIRM_PASSWORD, value});

export const ClearValues = () => ({type: CLEAR_VALUES});
export const ClearConfirmPassword = () => ({type: CLEAR_CONFIRM_PASSWORD});


export default signUpReducer;



