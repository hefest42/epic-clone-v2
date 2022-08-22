import React from "react";
import { useState } from "react";

const SignUpFormInputs = () => {
    const [firstNameInputActive, setFirstNameInputActive] = useState(false);
    const [lastNameInputActive, setLastNameInputActive] = useState(false);
    const [displayNameInputActive, setDisplayNameInputActive] = useState(false);
    const [emailInputActive, setEmailInputActive] = useState(false);
    const [passwordInputActive, setpasswordInputActive] = useState(false);

    return (
        <div>
            <div className="center">
                <div className={firstNameInputActive ? "form-input form-input__active" : "form-input"}>
                    <div className="form-input__desc">
                        <label htmlFor="email">First Name</label>
                    </div>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        onClick={() => {}}
                        onChange={(e) => {}}
                        onFocus={() => {}}
                        onBlur={() => {}}
                    />
                </div>

                <div className={lastNameInputActive ? "form-input form-input__active" : "form-input"}>
                    <div className="form-input__desc">
                        <label htmlFor="email">First Name</label>
                    </div>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        onClick={() => {}}
                        onChange={(e) => {}}
                        onFocus={() => {}}
                        onBlur={() => {}}
                    />
                </div>
            </div>

            <div className={displayNameInputActive ? "form-input form-input__active" : "form-input"}>
                <div className="form-input__desc">
                    <label htmlFor="email">First Name</label>
                </div>

                <input
                    type="email"
                    id="email"
                    name="email"
                    onClick={() => {}}
                    onChange={(e) => {}}
                    onFocus={() => {}}
                    onBlur={() => {}}
                />
            </div>

            <div className={emailInputActive ? "form-input form-input__active" : "form-input"}>
                <div className="form-input__desc">
                    <label htmlFor="email">First Name</label>
                </div>

                <input
                    type="email"
                    id="email"
                    name="email"
                    onClick={() => {}}
                    onChange={(e) => {}}
                    onFocus={() => {}}
                    onBlur={() => {}}
                />
            </div>

            <div className={passwordInputActive ? "form-input form-input__active" : "form-input"}>
                <div className="form-input__desc">
                    <label htmlFor="email">First Name</label>
                </div>

                <input
                    type="email"
                    id="email"
                    name="email"
                    onClick={() => {}}
                    onChange={(e) => {}}
                    onFocus={() => {}}
                    onBlur={() => {}}
                />
            </div>
        </div>
    );
};

export default SignUpFormInputs;
