import React, { useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { SiEpicgames } from "react-icons/si";
import { BiErrorCircle } from "react-icons/bi";

import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { logOutAccount } from "../../store/AccountSlice";

import { API_URL } from "../../Helpers/HelperFunctions";

const ChangeDisplayNameModal = ({ setShowDisplayNameModal }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const account = useSelector((state) => state.account.account);
    const [errorMessage, setErrorMessage] = useState("");
    const [isDisplayNameActive, setIsDisplayNameActive] = useState(false);
    const [displayNameValue, setDisplayNameValue] = useState("");
    const [isConfirmDisplayNameActive, setIsConfirmDisplayNameActive] = useState(false);
    const [confirmDisplayNameValue, setConfirmDisplayNameValue] = useState("");

    const displayNameChangeHandler = async (e) => {
        e.preventDefault();

        const newDisplayName = displayNameValue;
        const confirmNewDisplayName = confirmDisplayNameValue;

        if (newDisplayName !== confirmNewDisplayName) {
            setErrorMessage("Please check if the input fields match.");
            return;
        }

        try {
            const response = fetch(`${API_URL}/accounts/${account.accountId}.json`, {
                method: "PATCH",
                body: JSON.stringify({ displayName: confirmDisplayNameValue }),
                headers: {
                    "CONTENT-TYPE": "application/json",
                },
            });
        } catch (error) {
            console.error(error);
            setErrorMessage("Oops.. Something went wrong. Please wait a bit and try again.");
        }

        dispatch(logOutAccount());
        navigate("/log-in");
    };

    return (
        <div className="settings-modal center">
            <div className="settings-modal__inner">
                <div className="settings-modal__close">
                    <AiOutlineClose onClick={() => setShowDisplayNameModal(false)} />
                </div>
                <div className="settings-modal__logo center">
                    <SiEpicgames />
                </div>
                <div className="account-settings__title">Confirm display name change</div>
                <div className="settings-modal__accent">
                    <span>Current Display Name:</span> {account.displayName}
                </div>

                {errorMessage !== "" && (
                    <div className="form-error center">
                        <div className="form-error__svg center">
                            <BiErrorCircle />
                        </div>
                        <div className="form-error__message ">{errorMessage}</div>
                    </div>
                )}
                <form className="settings-modal__form" onSubmit={displayNameChangeHandler}>
                    <div
                        className={
                            isDisplayNameActive
                                ? "settings-modal__input settings-modal__input-active"
                                : "settings-modal__input"
                        }
                    >
                        <div className="settings-modal__input-desc">
                            <label htmlFor="newName">New Display Name</label>
                        </div>

                        <input
                            type="text"
                            id="newName"
                            name="newName"
                            onClick={() => setIsDisplayNameActive(true)}
                            onChange={(e) => setDisplayNameValue(e.target.value)}
                            onBlur={() => !displayNameValue && setIsDisplayNameActive(false)}
                            value={displayNameValue}
                        />
                    </div>

                    <div
                        className={
                            isConfirmDisplayNameActive
                                ? "settings-modal__input settings-modal__input-active"
                                : "settings-modal__input"
                        }
                    >
                        <div className="settings-modal__input-desc">
                            <label htmlFor="confirmNewName">Confirm Display Name</label>
                        </div>

                        <input
                            type="text"
                            id="confirmNewName"
                            name="confirmNewName"
                            onClick={() => setIsConfirmDisplayNameActive(true)}
                            onChange={(e) => setConfirmDisplayNameValue(e.target.value)}
                            onBlur={() => !confirmDisplayNameValue && setIsConfirmDisplayNameActive(false)}
                            value={confirmDisplayNameValue}
                        />
                    </div>

                    <div className="space-between">
                        <button
                            className="settings-modal__buttons settings-modal__cancel"
                            onClick={() => setShowDisplayNameModal(false)}
                        >
                            CANCEL
                        </button>
                        <button className="settings-modal__buttons settings-modal__confirm ">CONFIRM</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChangeDisplayNameModal;
