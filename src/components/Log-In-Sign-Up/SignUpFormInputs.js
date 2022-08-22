import React, { useState } from "react";

//TODO change Input names to be more descriptive
const SignUpFormInputs = ({
    firstNameValue,
    changeFirstNameValue,
    lastNameValue,
    changeLastNameValue,
    displayNameValue,
    changeDisplayNameValue,
    emailAddressvalue,
    changeEmailAddressValue,
    passwordValue,
    changePasswordValue,
}) => {
    const [isFirstNameInputActive, setIsFirstNameInputActive] = useState(false);
    const [isLastNameInputActive, setIsLastNameInputActive] = useState(false);
    const [isDisplayNameInputActive, setIsDisplayNameInputActive] = useState(false);
    const [isEmailInputActive, setIsEmailInputActive] = useState(false);
    const [isPasswordInputActive, setIsPasswordInputActive] = useState(false);

    return (
        <div className="sign-up__inputs">
            <div className="sign-up__names space-between">
                <div className={isFirstNameInputActive ? "form-input form-input__active" : "form-input"}>
                    <div className="form-input__desc">
                        <label htmlFor="fname">First Name</label>
                    </div>

                    <input
                        type="text"
                        id="fname"
                        name="fname"
                        onClick={() => setIsFirstNameInputActive(true)}
                        onChange={(e) => changeFirstNameValue(e.target.value)}
                        onBlur={() => !firstNameValue && setIsFirstNameInputActive(false)}
                    />
                </div>

                <div className={isLastNameInputActive ? "form-input form-input__active" : "form-input"}>
                    <div className="form-input__desc">
                        <label htmlFor="lname">Last Name</label>
                    </div>

                    <input
                        type="text"
                        id="lname"
                        name="lname"
                        onClick={() => setIsLastNameInputActive(true)}
                        onChange={(e) => changeLastNameValue(e.target.value)}
                        onBlur={() => !lastNameValue && setIsLastNameInputActive(false)}
                    />
                </div>
            </div>

            <div className={isDisplayNameInputActive ? "form-input form-input__active" : "form-input"}>
                <div className="form-input__desc">
                    <label htmlFor="dname">Display Name</label>
                </div>

                <input
                    type="text"
                    id="dname"
                    name="dname"
                    onClick={() => setIsDisplayNameInputActive(true)}
                    onChange={(e) => changeDisplayNameValue(e.target.value)}
                    onBlur={() => !displayNameValue && setIsDisplayNameInputActive(false)}
                />
            </div>

            <div className={isEmailInputActive ? "form-input form-input__active" : "form-input"}>
                <div className="form-input__desc">
                    <label htmlFor="email">Email Address</label>
                </div>

                <input
                    type="email"
                    id="email"
                    name="email"
                    onClick={() => setIsEmailInputActive(true)}
                    onChange={(e) => changeEmailAddressValue(e.target.value)}
                    onBlur={() => !emailAddressvalue && setIsEmailInputActive(false)}
                />
            </div>

            <div className={isPasswordInputActive ? "form-input form-input__active" : "form-input"}>
                <div className="form-input__desc">
                    <label htmlFor="password">Password</label>
                </div>

                <input
                    type="password"
                    id="password"
                    name="password"
                    onClick={() => setIsPasswordInputActive(true)}
                    onChange={(e) => changePasswordValue(e.target.value)}
                    onBlur={() => !passwordValue && setIsPasswordInputActive(false)}
                />
            </div>
        </div>
    );
};

export default SignUpFormInputs;
