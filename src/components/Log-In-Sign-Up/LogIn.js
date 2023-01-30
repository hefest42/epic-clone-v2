import React, { useState } from "react";

import LogInFormInputs from "./LogInFormInputs";

import { Link, useNavigate } from "react-router-dom";
import { SiEpicgames } from "react-icons/si";
import { BiErrorCircle } from "react-icons/bi";
import { API_URL } from "../../Helpers/HelperFunctions";

import { useDispatch } from "react-redux";
import { setLoggedInAccount } from "../../store/AccountSlice";

const LogIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [errorMessage, setErrorMessage] = useState("");

    const logInAccountHandler = async (info) => {
        const allAccounts = [];

        const { email, password } = info;

        try {
            const response = await fetch(`${API_URL}/accounts.json`);

            const data = await response.json();

            for (const key in data) {
                allAccounts.push({ accountId: key, ...data[key] });
            }
        } catch (error) {
            setErrorMessage("Something f'd up");
        }

        // const [account] = allAccounts.filter((acc) => acc.emailAddress === email);

        // if (!account) {
        //     setErrorMessage("Check your credentials and try again.");
        //     return;
        // }

        // if (account.password === password) {
        //     dispatch(setLoggedInAccount(account));
        //     navigate("/store");
        // } else {
        //     setErrorMessage("Check your credentials and try again.");
        //     return;
        // }
    };

    return (
        <div className="form log-in center-column">
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

                <LogInFormInputs logInAccountHandler={logInAccountHandler} />

                <div className="form-link center">
                    <div>Don't have an Game Store Account?</div>
                    <Link to="/sign-up">Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
