import React, { useState, useRef } from "react";

import Input from "../UI/Input";

//TODO make css for LogIn & SignUp more uniform

const SignUpFormInputs = ({ setErrorMessageHandler, createANewAccount }) => {
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
        e.preventDefault();

        if (!termsOfServiceRef.current.checked) {
            setErrorMessageHandler("In order to make an account, you need to agree to the terms of service.");
            return;
        }

        const account = {
            firstName: firstNameValue,
            lastNameValue: lastNameValue,
            displayName: displayNameValue,
            emailAddress: emailValue,
            password: passwordValue,
            userRecivesNews: newsRef.current.checked,
        };

        setFirstNameValue("");
        setLastNameValue("");
        setDisplayNameValue("");
        setEmailValue("");
        setPasswordValue("");

        createANewAccount(account);
    };

    return (
        <form onSubmit={handleFormSubmit} className="sign-up__inputs">
            <div className="form-names">
                <div className="form-name">
                    <Input
                        inputType="text"
                        inputName="First Name"
                        inputId="first-name"
                        inputValue={firstNameValue}
                        setInputValue={setFirstNameValue}
                        autocomplete="no"
                    />
                </div>
                <div className="form-name">
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

            <div className="form-inputs">
                <Input
                    inputType="text"
                    inputName="Display Name"
                    inputId="display-name"
                    inputValue={displayNameValue}
                    setInputValue={setDisplayNameValue}
                    autocomplete="no"
                />
            </div>

            <div className="form-inputs">
                <Input
                    inputType="email"
                    inputName="Email"
                    inputId="email"
                    inputValue={emailValue}
                    setInputValue={setEmailValue}
                    autocomplete="yes"
                />
            </div>
            <div className="form-inputs">
                <Input
                    inputType="password"
                    inputName="Password"
                    inputId="password"
                    inputValue={passwordValue}
                    setInputValue={setPasswordValue}
                    autocomplete="yes"
                />
            </div>

            <div className="form-check">
                <div className="form-check-container">
                    <div>
                        <input type="checkbox" name="offers" id="offers" ref={newsRef} />
                    </div>
                    <div>
                        <label htmlFor="offers">
                            I would like to receive news, surveys and special offers from Game Store
                        </label>
                    </div>
                </div>
                <div className="form-check-container">
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
