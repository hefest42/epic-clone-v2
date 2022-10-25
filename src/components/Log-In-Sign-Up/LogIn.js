import React, { useState } from "react";

import LogInFormInputs from "./LogInFormInputs";

import { Link } from "react-router-dom";
import { SiEpicgames } from "react-icons/si";
import { BiErrorCircle } from "react-icons/bi";
import { API_URL } from "../../Helpers/HelperFunctions";

import { useDispatch } from "react-redux";
import { setLoggedInAccount } from "../../store/AccountSlice";

const LogIn = () => {
    const dispatch = useDispatch();
    const [emailInputValue, setEmailInputValue] = useState("");
    const [passwordInputValue, setPasswordInputValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const resetInputValues = () => {
        setEmailInputValue("");
        setPasswordInputValue("");
    };

    const formSubmitHandler = async (e) => {
        e.preventDefault();
        const allAccounts = [];

        const email = emailInputValue;
        const password = passwordInputValue;

        try {
            const response = await fetch(`${API_URL}/accounts.json`);

            const data = await response.json();

            for (const key in data) {
                allAccounts.push(data[key]);
            }
        } catch (error) {
            setErrorMessage("Something f'd up");
        }

        const [account] = allAccounts.filter((acc) => acc.emailAddress === email);

        if (!account) {
            setErrorMessage("Check your credentials and try again.");
            resetInputValues();
            return;
        }

        if (account.password === password) {
            console.log("LOG IN ACCOUNT");
            dispatch(setLoggedInAccount(account));
        } else {
            setErrorMessage("Check your credentials and try again.");
            resetInputValues();
            return;
        }

        resetInputValues();
    };

    return (
        <form className="form log-in center-column" onSubmit={formSubmitHandler}>
            <div className="form-inner">
                <div className="form-logo center-column">
                    <Link to="/">
                        <SiEpicgames />
                    </Link>
                    <h3>Sign in with a Game Store Account</h3>
                </div>

                {errorMessage && (
                    <div className="form-error center">
                        <div className="form-error__svg center">
                            <BiErrorCircle />
                        </div>
                        <div className="form-error__message ">{errorMessage}</div>
                    </div>
                )}

                <LogInFormInputs
                    emailValue={emailInputValue}
                    changeEmailValue={setEmailInputValue}
                    passwordValue={passwordInputValue}
                    changePasswordValue={setPasswordInputValue}
                />

                <div
                    className={
                        emailInputValue && passwordInputValue ? "form-button form-button__active" : "form-button"
                    }
                >
                    <button>LOG IN NOW</button>
                </div>

                <div className="form-link center">
                    <div>Don't have an Game Store Account?</div>
                    <Link to="/sign-up">Sign Up</Link>
                </div>
            </div>
        </form>
    );
};

export default LogIn;
