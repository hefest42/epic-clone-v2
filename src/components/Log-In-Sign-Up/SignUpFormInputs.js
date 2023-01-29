import React, { useState } from "react";

import Input from "../UI/Input";

const SignUpFormInputs = ({}) => {
    const [firstNameValue, setFirstNameValue] = useState("");
    const [lastNameValue, setLastNameValue] = useState("");
    const [displayNameValue, setDisplayNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    return (
        <div className="sign-up__inputs">
            <div className="sign-up__names">
                <div className="sign-up__name">
                    <Input
                        inputType="text"
                        inputName="First Name"
                        inputId="first-name"
                        inputValue={firstNameValue}
                        setInputValue={setFirstNameValue}
                    />
                </div>
                <div className="sign-up__name">
                    <Input
                        inputType="text"
                        inputName="Last Name"
                        inputId="last-name"
                        inputValue={lastNameValue}
                        setInputValue={setLastNameValue}
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
                />
            </div>

            <div className="sign-up__inputs">
                <Input
                    inputType="email"
                    inputName="Email"
                    inputId="email"
                    inputValue={emailValue}
                    setInputValue={setEmailValue}
                />
            </div>
            <div className="sign-up__inputs">
                <Input
                    inputType="password"
                    inputName="Password"
                    inputId="password"
                    inputValue={passwordValue}
                    setInputValue={setPasswordValue}
                />
            </div>
        </div>
    );
};

export default SignUpFormInputs;
