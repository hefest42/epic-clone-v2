import React, { useState } from "react";

import { BiErrorCircle } from "react-icons/bi";

import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { logOutAccount } from "../../store/AccountSlice";

import { API_URL } from "../../Helpers/HelperFunctions";

const PasswordSettings = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const account = useSelector((state) => state.account.account);
    const [isCurrentPasswordActive, setIsCurrentPasswordActive] = useState(false);
    const [currentPasswordValue, setCurrentPasswordValue] = useState("");
    const [isNewPasswordActive, setIsNewPasswordActive] = useState(false);
    const [newPasswordValue, setNewPasswordValue] = useState("");
    const [isRetypePasswordActive, setIsRetypePasswordActive] = useState(false);
    const [retypePasswordValue, setRetypePasswordValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const clearAllFields = () => {
        setCurrentPasswordValue("");
        setNewPasswordValue("");
        setRetypePasswordValue("");
    };
    const changePasswordHandler = async (e) => {
        e.preventDefault();

        const password = account.password;
        const currentPassword = currentPasswordValue;
        const newPassword = newPasswordValue;
        const retypedNewPassword = retypePasswordValue;

        if (!currentPassword || !newPassword || !retypedNewPassword) {
            setErrorMessage("Please fill out all fields before continuing.");
            clearAllFields();
            return;
        }
        if (currentPassword !== password) {
            setErrorMessage("Password don't match. Please try again.");
            clearAllFields();
            return;
        }

        if (newPassword !== retypedNewPassword) {
            setErrorMessage("Password don't match. Please try again. test");
            clearAllFields();
            return;
        }

        try {
            const response = fetch(`${API_URL}/accounts/${account.accountId}.json`, {
                method: "PATCH",
                body: JSON.stringify({ password: newPassword }),
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
                    <div
                        className={
                            isCurrentPasswordActive
                                ? "settings-modal__input settings-modal__input-active"
                                : "settings-modal__input"
                        }
                    >
                        <div className="settings-modal__input-desc">
                            <label htmlFor="currentPassword">Current Password</label>
                        </div>

                        <input
                            type="password"
                            id="currentPassword"
                            name="currentPassword"
                            autoComplete="no"
                            onClick={() => setIsCurrentPasswordActive(true)}
                            onChange={(e) => setCurrentPasswordValue(e.target.value)}
                            onBlur={() => !currentPasswordValue && setIsCurrentPasswordActive(false)}
                            value={currentPasswordValue}
                        />
                    </div>

                    <div className="password-settings__section">
                        <div className="password-settings__section-title">NEW PASSWORD</div>
                        <div className="password-settings__section-subtitle">REQUIRED</div>
                    </div>
                    <div
                        className={
                            isNewPasswordActive
                                ? "settings-modal__input settings-modal__input-active"
                                : "settings-modal__input"
                        }
                    >
                        <div className="settings-modal__input-desc">
                            <label htmlFor="newPassword">New Password</label>
                        </div>

                        <input
                            type="password"
                            id="newPassword"
                            name="newPassword"
                            autoComplete="no"
                            onClick={() => setIsNewPasswordActive(true)}
                            onChange={(e) => setNewPasswordValue(e.target.value)}
                            onBlur={() => !newPasswordValue && setIsNewPasswordActive(false)}
                            value={newPasswordValue}
                        />
                    </div>

                    <div className="password-settings__section">
                        <div className="password-settings__section-title">RETYPE NEW PASSWORD</div>
                        <div className="password-settings__section-subtitle">REQUIRED</div>
                    </div>
                    <div
                        className={
                            isRetypePasswordActive
                                ? "settings-modal__input settings-modal__input-active"
                                : "settings-modal__input"
                        }
                    >
                        <div className="settings-modal__input-desc">
                            <label htmlFor="retypePassword">Retype New Password</label>
                        </div>

                        <input
                            type="password"
                            id="retypePassword"
                            name="retypePassword"
                            autoComplete="no"
                            onClick={() => setIsRetypePasswordActive(true)}
                            onChange={(e) => setRetypePasswordValue(e.target.value)}
                            onBlur={() => !retypePasswordValue && setIsRetypePasswordActive(false)}
                            value={retypePasswordValue}
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
