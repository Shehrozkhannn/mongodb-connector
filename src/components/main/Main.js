import React from 'react';
import MainCss from '../main/Main.module.css';
import { useNavigate } from "react-router-dom";
const Main = () => {
    let navigate = useNavigate();
    const signUpBtn = () => {
        let signUpPath = `signUp`
        navigate(signUpPath)
    }

    const signInBtn = () => {
        let signInPath = `login`
        navigate(signInPath)
    }
    return (
            <div className={MainCss["main-body"]}>
                <div className={MainCss["our-header"]}>
                    <h2><b>CS11-Log Analysis using ELK Stack Implementation</b></h2>
                </div>
                <div className={MainCss["our-card-container"]}>
                    <div className={MainCss["our-card"]}>
                        <h2>Sign In</h2>
                        <p>Login to access the dashboard.</p>
                        <button id="signin-btn" type="button" className="btn btn-outline-primary" onClick={signInBtn}>Sign In</button>
                    </div>
                    <div className={MainCss["our-card"]}>
                        <h2>Sign Up</h2>
                        <p>Don't have an account ? Sign up to view the project.</p>
                        <button id="signup-btn" type="button" className="btn btn-outline-secondary" onClick={signUpBtn}>Sign Up</button>
                    </div>
                </div>
            </div>
    )
}

export default Main