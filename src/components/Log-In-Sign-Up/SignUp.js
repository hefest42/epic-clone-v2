import React, { useState } from "react";

import SignUpFormInputs from "./SignUpFormInputs";

import { Link } from "react-router-dom";
import { SiEpicgames } from "react-icons/si";

// https://clone-c99fe-default-rtdb.europe-west1.firebasedatabase.app/

const SignUp = () => {
    const [firstNameInputValue, setFirstNameInputValue] = useState("");
    const [lastNameInputValue, setLastNameInputValue] = useState("");
    const [displayNameInputValue, setDisplayNameInputValue] = useState("");
    const [emailAdressInputValue, setEmailAdressInputValue] = useState("");
    const [passwordInputValue, setPasswordInputValue] = useState("");

    const signUpSubmitHandler = async (e) => {
        e.preventDefault();
    };

    return (
        <form className="form sign-up center-column">
            <div className="form-inner">
                <div className="form-logo center-column">
                    <Link to="/">
                        <SiEpicgames />
                    </Link>
                    <h3>Sign Up</h3>
                </div>

                <SignUpFormInputs
                    firstNameValue={firstNameInputValue}
                    changeFirstNameValue={setFirstNameInputValue}
                    lastNameValue={lastNameInputValue}
                    changeLastNameValue={setLastNameInputValue}
                    displayNameValue={displayNameInputValue}
                    changeDisplayNameValue={setDisplayNameInputValue}
                    emailAddressvalue={emailAdressInputValue}
                    changeEmailAddressValue={setEmailAdressInputValue}
                    passwordValue={passwordInputValue}
                    changePasswordValue={setPasswordInputValue}
                />

                <div className="sign-up__check">
                    <div className="sign-up__check-container">
                        <div>
                            <input type="checkbox" name="offers" id="offers" />
                        </div>
                        <div>
                            <label htmlFor="offers">
                                I would like to receive news, surveys and special offers from Game Store
                            </label>
                        </div>
                    </div>
                    <div className="sign-up__check-container">
                        <div>
                            <input type="checkbox" name="terms" id="terms" />
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
