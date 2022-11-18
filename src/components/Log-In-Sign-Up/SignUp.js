import React, { useState, useRef } from "react";

import SignUpFormInputs from "./SignUpFormInputs";

import { Link } from "react-router-dom";
import { SiEpicgames } from "react-icons/si";
import { BiErrorCircle } from "react-icons/bi";
import { API_URL } from "../../Helpers/HelperFunctions";

const SignUp = () => {
    const [firstNameInputValue, setFirstNameInputValue] = useState("");
    const [lastNameInputValue, setLastNameInputValue] = useState("");
    const [displayNameInputValue, setDisplayNameInputValue] = useState("");
    const [emailAdressInputValue, setEmailAdressInputValue] = useState("");
    const [passwordInputValue, setPasswordInputValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const newsRef = useRef();
    const termsOfServiceRef = useRef();

    const signUpSubmitHandler = async (e) => {
        e.preventDefault();

        const firstName = firstNameInputValue;
        const lastName = lastNameInputValue;
        const displayName = displayNameInputValue;
        const emailAddress = emailAdressInputValue;
        const password = passwordInputValue;

        if (!firstName || !lastName || !displayName || !emailAddress || !password) {
            setErrorMessage("Please make sure all input fields are filled out.");
            return;
        }

        if (!termsOfServiceRef.current.checked) {
            setErrorMessage("In order to make an Account you need to agree to our terms of service.");
            return;
        }

        const account = {
            firstName,
            lastName,
            displayName,
            emailAddress,
            password,
            userRecivesNews: newsRef.current.checked,
        };

        try {
            await fetch(`${API_URL}/accounts.json`, {
                method: "POST",
                body: JSON.stringify(account),
                headers: {
                    "CONTENT-TYPE": "application/json",
                },
            });
        } catch (error) {
            setErrorMessage("Oops. Something went wrong, please wait a bit and try again.");
        }

        setFirstNameInputValue("");
        setLastNameInputValue("");
        setDisplayNameInputValue("");
        setEmailAdressInputValue("");
        setPasswordInputValue("");
        newsRef.current.checked = false;
        termsOfServiceRef.current.checked = false;
    };

    return (
        <form className="form sign-up center-column" onSubmit={signUpSubmitHandler}>
            <div className="form-inner">
                <div className="form-logo center-column">
                    <Link to="/">
                        <SiEpicgames />
                    </Link>
                    <h3>Sign Up</h3>
                </div>

                {errorMessage && (
                    <div className="form-error center">
                        <div className="form-error__svg center">
                            <BiErrorCircle />
                        </div>
                        <div className="form-error__message ">{errorMessage}</div>
                    </div>
                )}

                <SignUpFormInputs
                    firstNameValue={firstNameInputValue}
                    changeFirstNameValue={setFirstNameInputValue}
                    lastNameValue={lastNameInputValue}
                    changeLastNameValue={setLastNameInputValue}
                    displayNameValue={displayNameInputValue}
                    changeDisplayNameValue={setDisplayNameInputValue}
                    emailAddressValue={emailAdressInputValue}
                    changeEmailAddressValue={setEmailAdressInputValue}
                    passwordValue={passwordInputValue}
                    changePasswordValue={setPasswordInputValue}
                />

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

                <div
                    className={
                        firstNameInputValue &&
                        lastNameInputValue &&
                        displayNameInputValue &&
                        emailAdressInputValue &&
                        passwordInputValue
                            ? "form-button form-button__active"
                            : "form-button"
                    }
                >
                    <button>SIGN UP</button>
                </div>

                <div className="form-link center">
                    <div>Have an Game Store Account?</div>
                    <Link to="/log-in">Log In</Link>
                </div>
            </div>
        </form>
    );
};

export default SignUp;
