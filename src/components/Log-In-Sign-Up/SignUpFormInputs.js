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
    const [firstNameInputActive, setFirstNameInputActive] = useState(false);
    const [lastNameInputActive, setLastNameInputActive] = useState(false);
    const [displayNameInputActive, setDisplayNameInputActive] = useState(false);
    const [emailInputActive, setEmailInputActive] = useState(false);
    const [passwordInputActive, setpasswordInputActive] = useState(false);

    return (
        <div className="sign-up__inputs">
            <div className="sign-up__names space-between">
                <div className={firstNameInputActive ? "form-input form-input__active" : "form-input"}>
                    <div className="form-input__desc">
                        <label htmlFor="fname">First Name</label>
                    </div>

                    <input
                        type="text"
                        id="fname"
                        name="fname"
                        onClick={() => setFirstNameInputActive(true)}
                        onChange={(e) => changeFirstNameValue(e.target.value)}
                        onBlur={() => !firstNameValue && setFirstNameInputActive(false)}
                    />
                </div>

                <div className={lastNameInputActive ? "form-input form-input__active" : "form-input"}>
                    <div className="form-input__desc">
                        <label htmlFor="lname">Last Name</label>
                    </div>

                    <input
                        type="text"
                        id="lname"
                        name="lname"
                        onClick={() => setLastNameInputActive(true)}
                        onChange={(e) => changeLastNameValue(e.target.value)}
                        onBlur={() => !lastNameValue && setLastNameInputActive(false)}
                    />
                </div>
            </div>

            <div className={displayNameInputActive ? "form-input form-input__active" : "form-input"}>
                <div className="form-input__desc">
                    <label htmlFor="dname">Display Name</label>
                </div>

                <input
                    type="text"
                    id="dname"
                    name="dname"
                    onClick={() => setDisplayNameInputActive(true)}
                    onChange={(e) => changeDisplayNameValue(e.target.value)}
                    onBlur={() => !displayNameValue && setDisplayNameInputActive(false)}
                />
            </div>

            <div className={emailInputActive ? "form-input form-input__active" : "form-input"}>
                <div className="form-input__desc">
                    <label htmlFor="email">Email Address</label>
                </div>

                <input
                    type="email"
                    id="email"
                    name="email"
                    onClick={() => setEmailInputActive(true)}
                    onChange={(e) => changeEmailAddressValue(e.target.value)}
                    onBlur={() => !emailAddressvalue && setEmailInputActive(false)}
                />
            </div>

            <div className={passwordInputActive ? "form-input form-input__active" : "form-input"}>
                <div className="form-input__desc">
                    <label htmlFor="password">Password</label>
                </div>

                <input
                    type="password"
                    id="password"
                    name="password"
                    onClick={() => setpasswordInputActive(true)}
                    onChange={(e) => changePasswordValue(e.target.value)}
                    onBlur={() => !passwordValue && setpasswordInputActive(false)}
                />
            </div>
        </div>
    );
};

export default SignUpFormInputs;
