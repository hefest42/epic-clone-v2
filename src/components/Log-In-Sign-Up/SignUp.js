import React, { useState } from "react";

import SignUpFormInputs from "./SignUpFormInputs";

import { Link } from "react-router-dom";
import { SiEpicgames } from "react-icons/si";
import { BiErrorCircle } from "react-icons/bi";
import { API_URL } from "../../Helpers/HelperFunctions";

const SignUp = () => {
    const [errorMessage, setErrorMessage] = useState("");

    const setErrorMessageHandler = (msg) => setErrorMessage(msg);

    const createANewAccount = async (account) => {
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
    };

    return (
        <div className="form center-column">
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
                    setErrorMessageHandler={setErrorMessageHandler}
                    createANewAccount={createANewAccount}
                />

                <div className="form-link center">
                    <div>Have an Game Store Account?</div>
                    <Link to="/log-in">Log In</Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
