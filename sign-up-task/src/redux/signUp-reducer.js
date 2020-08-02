import {fieldValidator} from "../Utils/validators";
import {usersAPI} from "../api/api";

const SET_VALUE = 'sign-up-task/signUp/SET_VALUE';
const SET_ERROR = 'sign-up-task/signUp/SET_ERROR';
const SET_HELPER_TEXT = 'sign-up-task/signUp/SET_HELPER_TEXT';
const SET_EMAIL_EXIST = 'sign-up-task/signUp/SET_EMAIL_EXIST';
const SET_CLEAR_FORM = 'sign-up-task/signUp/SET_CLEAR_FORM';

let initialState = {
    values: {
        firstName: '',
        lastName: '',
        email: "",
        password: '',
        confirmPassword: '',
    },
    errors: {
        firstName: false,
        lastName: false,
        email: false,
        password: false,
        confirmPassword: false,
    },
    helperText: {
        firstName: '',
        lastName: '',
        email: "",
        password: '',
        confirmPassword: '',
    },
    emailExist: "",
};

const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VALUE:
            return {
                ...state,
                values: {...state.values, [action.prop]: action.value}
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
        case SET_EMAIL_EXIST:
            return {
                ...state,
                emailExist: action.error,
            }
        case SET_CLEAR_FORM:
            return {
                ...state,
                values: "",
            }
        default:
            return state;
    }
}

const setValue = (prop, value) => ({type: SET_VALUE, prop, value})
const setError = (prop, error) => ({type: SET_ERROR, prop, error})
const setHelperText = (prop, text) => ({type: SET_HELPER_TEXT, prop, text})
const setEmailExist = (error) => ({type: SET_EMAIL_EXIST, error})
export const setClearForm = () => ({type: SET_CLEAR_FORM})


export const fieldOnChange = (field, value, password) => (dispatch) => {
    dispatch(setValue(field, value));
    let validation = fieldValidator(field, value, password)
    dispatch(setError(field, validation.error))
    dispatch(setHelperText(field, validation.helperText))
}

export const checkEmailDB = (values) => async (dispatch) => {
    let users = await usersAPI.getUsers();
    users.some(u => u.email === values.email)
        ? dispatch(setEmailExist(true))
        : (dispatch(setEmailExist(false)) && dispatch(setClearForm()) && await usersAPI.setUser(values))
};


export default signUpReducer;



