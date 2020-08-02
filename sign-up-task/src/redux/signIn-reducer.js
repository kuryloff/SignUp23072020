import {fieldValidator} from "../Utils/validators";
import {usersAPI} from "../api/api";

const SET_VALUE = 'sign-up-task/signIn/SET_VALUE';
const SET_ERROR = 'sign-up-task/signIn/SET_ERROR';
const SET_HELPER_TEXT = 'sign-up-task/signIn/SET_HELPER_TEXT';
const SET_CLEAR_FORM = 'sign-up-task/signIn/SET_CLEAR_FORM';
const SET_CORRECT_PASSWORD = 'sign-up-task/signIn/SET_CORRECT_PASSWORD';
const SET_CORRECT_EMAIL = 'sign-up-task/signIn/SET_CORRECT_EMAIL';
const SET_LOGIN_SUCCESS = 'sign-up-task/signIn/SET_LOGIN_SUCCESS';

let initialState = {
    values: {
        email: "",
        password: '',
    },
    errors: {
        email: false,
        password: false,
    },
    helperText: {
        email: "",
        password: ''
    },
    correctEmail: true,
    correctPassword: true,
    loginSuccess: false,
};

const signInReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VALUE:
            return {
                ...state,
                values: {...state.values, [action.field]: action.value}
            }
        case SET_ERROR:
            return {
                ...state,
                errors: {...state.errors, [action.prop]: action.error}
            }
        case SET_HELPER_TEXT:
            return {
                ...state,
                helperText: {...state.helperText, [action.prop]: action.text}
            }
        case SET_CORRECT_EMAIL:
            return {
                ...state,
                correctEmail: action.value,
            }
        case SET_CORRECT_PASSWORD:
            return {
                ...state,
                correctPassword: action.value,
            }
        case SET_LOGIN_SUCCESS:
            return {
                ...state,
                loginSuccess: action.value,
            }
        case SET_CLEAR_FORM:
            return {
                ...state,
                values: "",
            }
        default:
            return state;
    }
};


const setValue = (field, value) => ({type: SET_VALUE, field, value})
const setError = (prop, error) => ({type: SET_ERROR, prop, error})
const setCorrectPassword = (value) => ({type: SET_CORRECT_PASSWORD, value})
const setCorrectEmail = (value) => ({type: SET_CORRECT_EMAIL, value})
const setHelperText = (prop, text) => ({type: SET_HELPER_TEXT, prop, text})
const setLoginSuccess = (value) => ({type: SET_LOGIN_SUCCESS, value})


export const setClearForm = () => ({type: SET_CLEAR_FORM})

export const fieldOnChange = (field, value, password) => (dispatch) => {
    dispatch(setValue(field, value));
    let validation = fieldValidator(field, value, password)
    dispatch(setError(field, validation.error))
    dispatch(setHelperText(field, validation.helperText))
}

export const checkUserDB = (loginUser) => async (dispatch) => {
    let users = await usersAPI.getUsers();
    let emailMatch = users.some(u => u.email === loginUser.email)
    let passwordMatch = users.some(u => u.password === loginUser.password)
    !emailMatch
        ? dispatch(setCorrectEmail(false))
        : dispatch(setCorrectEmail(true))
    !passwordMatch
        ? dispatch(setCorrectPassword(false))
        : dispatch(setCorrectPassword(true))
    emailMatch && passwordMatch
        ? dispatch(setLoginSuccess(true))
        : dispatch(setLoginSuccess(false))
}


export default signInReducer;