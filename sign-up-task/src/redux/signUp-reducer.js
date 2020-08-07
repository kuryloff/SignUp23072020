const {Record} = require('immutable');
const SET_VALUE = 'sign-up-task/signUp/SET_VALUE';

const SET_CLEAR_FORM = 'sign-up-task/signUp/SET_CLEAR_FORM';


const  CreateUserDTO = Record({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
});
const values = new CreateUserDTO();

const signUpReducer = (state = values, action) => {
    switch (action.type) {
        case SET_VALUE:
            return state.set(action.prop, action.value)
        case SET_CLEAR_FORM:
            return new CreateUserDTO();
         default:
            return state;
    }
}

export const setValue = (prop, value) => ({type: SET_VALUE, prop, value});

export const setClearForm = () => ({type: SET_CLEAR_FORM});


export default signUpReducer;



