import React, { useState, useRef } from "react";

import Input from "../UI/Input";

//TODO make css for LogIn & SignUp more uniform

const SignUpFormInputs = ({}) => {
    const [firstNameValue, setFirstNameValue] = useState("");
    const [lastNameValue, setLastNameValue] = useState("");
    const [displayNameValue, setDisplayNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const newsRef = useRef();
    const termsOfServiceRef = useRef();

    const buttonDisable =
        !firstNameValue.length < 0 ||
        !lastNameValue.length < 0 ||
        !displayNameValue.length < 0 ||
        !emailValue.length < 0 ||
        passwordValue.length < 5;

    const handleFormSubmit = (e) => {
        console.log("hello");
    };

    return (
        <form onSubmit={handleFormSubmit} className="sign-up__inputs">
            <div className="sign-up__names">
                <div className="sign-up__name">
                    <Input
                        inputType="text"
                        inputName="First Name"
                        inputId="first-name"
                        inputValue={firstNameValue}
                        setInputValue={setFirstNameValue}
                        autocomplete="no"
                    />
                </div>
                <div className="sign-up__name">
                    <Input
                        inputType="text"
                        inputName="Last Name"
                        inputId="last-name"
                        inputValue={lastNameValue}
                        setInputValue={setLastNameValue}
                        autocomplete="no"
                    />
                </div>
            </div>

            <div className="sign-up__inputs">
                <Input
                    inputType="text"
                    inputName="Display Name"
                    inputId="display-name"
                    inputValue={displayNameValue}
                    setInputValue={setDisplayNameValue}
                    autocomplete="no"
                />
            </div>

            <div className="sign-up__inputs">
                <Input
                    inputType="email"
                    inputName="Email"
                    inputId="email"
                    inputValue={emailValue}
                    setInputValue={setEmailValue}
                    autocomplete="yes"
                />
            </div>
            <div className="sign-up__inputs">
                <Input
                    inputType="password"
                    inputName="Password"
                    inputId="password"
                    inputValue={passwordValue}
                    setInputValue={setPasswordValue}
                    autocomplete="yes"
                />
            </div>

            <div className="sign-up__check">
                <div className="sign-up__check-container">
                    <div>
                        <input type="checkbox" name="offers" id="offers" ref={newsRef} />
                    </div>
                    <div>
                        <label htmlFor="offers">
                            I would like to receive news, surveys and special offers from Game Store
                        </label>
                    </div>
                </div>
                <div className="sign-up__check-container">
                    <div>
                        <input type="checkbox" name="terms" id="terms" ref={termsOfServiceRef} />
                    </div>
                    <div>
                        <label htmlFor="terms">I have read and agree to the terms of service</label>
                    </div>
                </div>
            </div>

            <button className="button-blue" disabled={buttonDisable}>
                SIGN UP
            </button>
        </form>
    );
};

export default SignUpFormInputs;
