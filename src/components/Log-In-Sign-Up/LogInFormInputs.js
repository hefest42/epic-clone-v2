import React, { useState } from "react";

const FormInputs = ({ emailValue, changeEmailValue, passwordValue, changePasswordValue }) => {
    const [emailInputActive, setEmailInputActive] = useState(false);
    const [passwordInputActive, setPasswordInputActive] = useState(false);

    return (
        <div className="form-inputs">
            <div className={emailInputActive ? "form-input form-input__active" : "form-input"}>
                <div className="form-input__desc">
                    <label for="email">Email Address</label>
                </div>

                <input
                    type="email"
                    id="email"
                    name="email"
                    onClick={() => setEmailInputActive(true)}
                    onChange={(e) => changeEmailValue(e.target.value)}
                    onFocus={() => setEmailInputActive(true)}
                    onBlur={() => {
                        emailValue === "" && setEmailInputActive(false);
                    }}
                    value={emailValue}
                />
            </div>

            <div className={passwordInputActive ? "form-input form-input__active" : "form-input"}>
                <div className="form-input__desc">
                    <label for="password">Password</label>
                </div>
                <input
                    type="password"
                    id="password"
                    name="password"
                    onClick={() => setPasswordInputActive(true)}
                    onChange={(e) => changePasswordValue(e.target.value)}
                    onFocus={() => setPasswordInputActive(true)}
                    onBlur={() => {
                        passwordValue === "" && setPasswordInputActive(false);
                    }}
                    value={passwordValue}
                    autoComplete="yes"
                />
            </div>
        </div>
    );
};

export default FormInputs;
