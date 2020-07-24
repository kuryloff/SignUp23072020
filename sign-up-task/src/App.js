import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {HashRouter, Route} from "react-router-dom";
import {withSuspense} from "./hoc/withSuspense";
import SignInContainer from "./components/SignIn/SignInContainer";


const SignUpContainer = React.lazy(() => import("./components/SignUp/SignUpContainer"));



const App = () => {
    return (
        <HashRouter>
            <div className='wrapper'>
                <Header/>
                <div className="content">
                    <Route path={'/signUp'}
                           render={withSuspense(SignUpContainer)}/>
                    <Route path={'/signIn'}
                           render={withSuspense(SignInContainer)}/>
                </div>

            </div>
        </HashRouter>
    )
};

export default App;

