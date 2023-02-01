import React, { useState } from "react";

import Input from "../UI/Input";

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
    const [newDisplayName, setNewDisplayName] = useState("");
    const [confirmNewDisplayName, setConfirmNewDisplayName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const displayNameChangeHandler = async (e) => {
        e.preventDefault();

        if (false) {
            setErrorMessage("Please check if the input fields match.");
            return;
        }

        // try {
        //     const response = fetch(`${API_URL}/accounts/${account.accountId}.json`, {
        //         method: "PATCH",
        //         body: JSON.stringify({ displayName: confirmDisplayNameValue }),
        //         headers: {
        //             "CONTENT-TYPE": "application/json",
        //         },
        //     });
        // } catch (error) {
        //     console.error(error);
        //     setErrorMessage("Oops.. Something went wrong. Please wait a bit and try again.");
        // }

        // dispatch(logOutAccount());
        // navigate("/log-in");
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
                <div className="account-title">Confirm display name change</div>
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
                    <Input
                        inputType="text"
                        inputName="New Display Name"
                        inputId="new-name"
                        inputValue={newDisplayName}
                        setInputValue={setNewDisplayName}
                        autocomplete="no"
                        theme="light"
                    />

                    <div className="mt-1">
                        <Input
                            inputType="password"
                            inputName="Confirm New Display Name"
                            inputId="confirm-name"
                            inputValue={confirmNewDisplayName}
                            setInputValue={setConfirmNewDisplayName}
                            autocomplete="no"
                            theme="light"
                        />
                    </div>

                    <div className="space-between mt-1">
                        <button
                            type="button"
                            className="settings-modal__buttons settings-modal__cancel"
                            onClick={() => setShowDisplayNameModal(false)}
                        >
                            CANCEL
                        </button>
                        <button className="settings-modal__buttons settings-modal__confirm">CONFIRM</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChangeDisplayNameModal;
