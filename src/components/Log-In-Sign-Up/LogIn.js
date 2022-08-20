import React, { useRef } from "react";

import { Link } from "react-router-dom";
import { SiEpicgames } from "react-icons/si";
import { useState } from "react";

const LogIn = () => {
    const [emailInputActive, setEmailInputActive] = useState(false);
    const [emailInputValue, setEmailInputValue] = useState("");
    const emailRef = useRef();

    const [passwordInputActive, setPasswordInputActive] = useState(false);
    const [passwordInputValue, setPasswordInputValue] = useState("");
    const passwordRef = useRef();

    return (
        <form className="log-in center-column">
            <div className="log-in__inner">
                <div className="log-in__logo center-column">
                    <Link to="/">
                        <SiEpicgames />
                    </Link>
                    <h3>Sign in with a Game Store Account</h3>
                </div>

                <div className="log-in__inputs">
                    <div
                        className={emailInputActive ? "log-in__input log-in__input-active" : "log-in__input"}
                        onClick={() => {
                            setEmailInputActive(true);
                            emailRef.current.focus();
                        }}
                    >
                        <div className="log-in__input-desc">
                            <p>Email Address</p>
                        </div>
                        <input
                            type="email"
                            ref={emailRef}
                            onChange={(e) => setEmailInputValue(e.target.value)}
                            onBlur={() => {
                                emailInputValue === "" && setEmailInputActive(false);
                            }}
                        />
                    </div>

                    <div
                        className={passwordInputActive ? "log-in__input log-in__input-active" : "log-in__input"}
                        onClick={() => {
                            setPasswordInputActive(true);
                            passwordRef.current.focus();
                        }}
                    >
                        <div className="log-in__input-desc">
                            <p>Password</p>
                        </div>
                        <input
                            type="password"
                            ref={passwordRef}
                            onChange={(e) => setPasswordInputValue(e.target.value)}
                            onBlur={() => {
                                passwordInputValue === "" && setPasswordInputActive(false);
                            }}
                            autoComplete="yes"
                        />
                    </div>
                </div>

                <div
                    className={
                        emailInputValue && passwordInputValue
                            ? "log-in__button log-in__button-active"
                            : "log-in__button"
                    }
                >
                    <button>LOG IN NOW</button>
                </div>

                <div className="log-in__link center">
                    <div>Don't have an Game Store Account?</div>
                    <Link to="sign-up">Sign Up</Link>
                </div>
            </div>
        </form>
    );
};

export default LogIn;
