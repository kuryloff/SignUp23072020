import {createStore, combineReducers, applyMiddleware} from "redux";
import signUpReducer from "./signUp-reducer"
import signInReducer from "./signIn-reducer"
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';


let reducers = combineReducers({
    signUp: signUpReducer,
    signIn: signInReducer,
})


const store = createStore(reducers, composeWithDevTools (applyMiddleware(thunk)));

export default store;