import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {HashRouter, Route} from "react-router-dom";
import {withSuspense} from "./data/hoc/withSuspense";
import SignUpContainer from "./components/SignUp/SignUp";
import SignInContainer from "./components/SignIn/SignIn";
import store from "./data/redux/redux-store";
import {Provider} from "react-redux";


const App = () => {
    return (
        <HashRouter>
            <Provider store={store}>
            <div className='wrapper'>
                <Header/>
                <div className="content">
                    <h1>To proceed, please Sign In or Sign Up</h1>
                    <Route path={'/signUp'}
                           render={withSuspense(SignUpContainer)}/>
                    <Route path={'/signIn'}
                           render={withSuspense(SignInContainer)}/>
                </div>
            </div>
            </Provider>
        </HashRouter>
    )
};

export default App;

