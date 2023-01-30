import React, { useState } from "react";

import Input from "../UI/Input";

const FormInputs = ({ logInAccountHandler }) => {
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    const isButtonDisabled = !emailValue.length > 0 || !passwordValue.length > 0;

    const submitLoginInformation = (e) => {
        e.preventDefault();

        logInAccountHandler({ email: emailValue, password: passwordValue });
    };

    return (
        <form className="form-inputs" onSubmit={submitLoginInformation}>
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

            <button className="button-blue sign-up__inputs" disabled={isButtonDisabled}>
                LOG IN NOW
            </button>
        </form>
    );
};

export default FormInputs;
