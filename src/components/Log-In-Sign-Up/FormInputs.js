import React, { useRef, useState } from "react";

const FormInputs = ({ emailValue, changeEmailValue, emailRef, passwordValue, changePasswordValue, passwordRef }) => {
    const [emailInputActive, setEmailInputActive] = useState(false);
    const [passwordInputActive, setPasswordInputActive] = useState(false);

    return (
        <div className="form-inputs">
            <div
                className={emailInputActive ? "form-input form-input__active" : "form-input"}
                onClick={() => {
                    setEmailInputActive(true);
                    emailRef.current.focus();
                }}
            >
                <div className="form-input__desc">
                    <p>Email Address</p>
                </div>
                <input
                    type="email"
                    ref={emailRef}
                    onChange={(e) => changeEmailValue(e.target.value)}
                    onFocus={() => setEmailInputActive(true)}
                    onBlur={() => {
                        emailValue === "" && setEmailInputActive(false);
                    }}
                />
            </div>

            <div
                className={passwordInputActive ? "form-input form-input__active" : "form-input"}
                onClick={() => {
                    setPasswordInputActive(true);
                    passwordRef.current.focus();
                }}
            >
                <div className="form-input__desc">
                    <p>Password</p>
                </div>
                <input
                    type="password"
                    ref={passwordRef}
                    onChange={(e) => changePasswordValue(e.target.value)}
                    onFocus={() => setPasswordInputActive(true)}
                    onBlur={() => {
                        passwordValue === "" && setPasswordInputActive(false);
                    }}
                    autoComplete="yes"
                />
            </div>
        </div>
    );
};

export default FormInputs;
