import React, { useState } from "react";

import Input from "../UI/Input";

import { BiErrorCircle } from "react-icons/bi";

import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { logOutAccount } from "../../store/AccountSlice";

import { API_URL } from "../../Helpers/HelperFunctions";

const PasswordSettings = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const account = useSelector((state) => state.account.account);
    const [currentPasswordValue, setCurrentPasswordValue] = useState("");
    const [newPasswordValue, setNewPasswordValue] = useState("");
    const [retypeNewPasswordValue, setRetypeNewPasswordValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const clearAllFields = () => {
        setCurrentPasswordValue("");
        setNewPasswordValue("");
        setRetypeNewPasswordValue("");
    };

    const changePasswordHandler = async (e) => {
        e.preventDefault();

        const password = account.password;

        if (!currentPasswordValue || !newPasswordValue || !retypeNewPasswordValue) {
            setErrorMessage("Please fill out all fields before continuing.");
            clearAllFields();
            return;
        }
        if (currentPasswordValue !== password) {
            setErrorMessage("Password don't match. Please try again.");
            clearAllFields();
            return;
        }

        if (newPasswordValue !== retypeNewPasswordValue) {
            setErrorMessage("Password don't match. Please try again. test");
            clearAllFields();
            return;
        }

        try {
            const response = fetch(`${API_URL}/accounts/${account.accountId}.json`, {
                method: "PATCH",
                body: JSON.stringify({ password: retypeNewPasswordValue }),
                headers: {
                    "CONTENT-TYPE": "application/json",
                },
            });
        } catch (error) {
            console.error(error);
            setErrorMessage("Oops.. Something went wrong. Please wait a bit and try again.");
        }

        navigate("/log-in");
        dispatch(logOutAccount());
    };

    return (
        <div className="password-settings">
            <div>
                <div className="account-title">PASSWORD SETTINGS</div>
                <div className="account-subtitle">
                    For your security, we highly recommend that you choose a unique password that you don't use for any
                    other online account.
                </div>
            </div>

            <div className="password-settings__container center">
                <form className="password-settings__form" onSubmit={changePasswordHandler}>
                    {errorMessage !== "" && (
                        <div className="form-error center">
                            <div className="form-error__svg center">
                                <BiErrorCircle />
                            </div>
                            <div className="form-error__message ">{errorMessage}</div>
                        </div>
                    )}

                    <div className="password-settings__section">
                        <div className="password-settings__section-title">CURRENT PASSWORD</div>
                        <div className="password-settings__section-subtitle">REQUIRED</div>
                    </div>
                    <div className={""}>
                        <Input
                            inputType="password"
                            inputName="Current Password"
                            inputId="current-password"
                            inputValue={currentPasswordValue}
                            setInputValue={setCurrentPasswordValue}
                            autocomplete="yes"
                            theme="light"
                        />
                    </div>

                    <div className="password-settings__section">
                        <div className="password-settings__section-title">NEW PASSWORD</div>
                        <div className="password-settings__section-subtitle">REQUIRED</div>
                    </div>
                    <div>
                        <Input
                            inputType="password"
                            inputName="New Password"
                            inputId="new-password"
                            inputValue={newPasswordValue}
                            setInputValue={setNewPasswordValue}
                            autocomplete="no"
                            theme="light"
                        />
                    </div>

                    <div className="password-settings__section">
                        <div className="password-settings__section-title">RETYPE NEW PASSWORD</div>
                        <div className="password-settings__section-subtitle">REQUIRED</div>
                    </div>
                    <div>
                        <Input
                            inputType="password"
                            inputName="Retype New Password"
                            inputId="retype-password"
                            inputValue={retypeNewPasswordValue}
                            setInputValue={setRetypeNewPasswordValue}
                            autocomplete="no"
                            theme="light"
                        />
                    </div>

                    <div className="password-settings__buttons space-between">
                        <button className="settings-modal__buttons settings-modal__cancel" type="button">
                            DISCARD CHANGES
                        </button>
                        <button className="settings-modal__buttons settings-modal__confirm">SAVE CHANGES</button>
                    </div>
                    <div className="account-id">
                        <span>NOTE:</span> After every change you will need to log in again.
                    </div>
                </form>

                <div className="password-settings__information"></div>
            </div>
        </div>
    );
};

export default PasswordSettings;
