import React, { useState } from "react";

import LoadingSpinner from "../UI/LoadingSpinner";
import Input from "../UI/Input";

import { AiOutlineClose } from "react-icons/ai";
import { SiEpicgames } from "react-icons/si";
import { BiErrorCircle } from "react-icons/bi";

import { useSelector, useDispatch } from "react-redux";
import { logOutAccount } from "../../store/AccountSlice";

import { useNavigate } from "react-router-dom";

import { API_URL } from "../../Helpers/HelperFunctions";

const ChangeFirstNameModal = ({ setShowChangeFirstNameModal }) => {
    const naviagate = useNavigate();
    const dispatch = useDispatch();
    const account = useSelector((state) => state.account.account);
    const [stepper, setStepper] = useState(1);
    const [passwordValue, setPasswordValue] = useState("");
    const [newFirstNameValue, setFirstNameValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const confirmPasswordHandler = (e) => {
        e.preventDefault();

        const password = passwordValue;
        const accountPassword = account.password;

        if (password !== accountPassword) {
            setErrorMessage("Your password does not match. Please try again.");
            return;
        }

        setStepper(2);
        setErrorMessage("");

        const tick = setTimeout(() => {
            setStepper(3);
        }, 500);
    };

    const emailChangeHandler = async (e) => {
        e.preventDefault();

        try {
            const response = fetch(`${API_URL}/accounts/${account.accountId}.json`, {
                method: "PATCH",
                body: JSON.stringify({ firstName: newFirstNameValue }),
                headers: {
                    "CONTENT-TYPE": "application/json",
                },
            });
        } catch (error) {
            console.error(error);
            setErrorMessage("Oops.. Something went wrong. Please wait a bit and try again.");
        }

        setShowChangeFirstNameModal(false);
        dispatch(logOutAccount());
        naviagate("/log-in");
    };

    return (
        <div className="email-modal center">
            <div className="email-modal__inner">
                <div className="settings-modal__close">
                    <AiOutlineClose onClick={() => setShowChangeFirstNameModal(false)} />
                </div>

                <div className="settings-modal__logo center">
                    <SiEpicgames />
                </div>

                {errorMessage !== "" && (
                    <div className="form-error center">
                        <div className="form-error__svg center">
                            <BiErrorCircle />
                        </div>
                        <div className="form-error__message ">{errorMessage}</div>
                    </div>
                )}

                <div className="center-column">
                    {stepper === 1 && (
                        <>
                            <div className="account-title">Change your First Name</div>
                            <div className="email-modal__info">
                                In order to change your name, you must first enter your password
                            </div>

                            <form onSubmit={confirmPasswordHandler} className="email-modal__form">
                                <div>
                                    <Input
                                        inputType="password"
                                        inputName="Current Password"
                                        inputId="password"
                                        inputValue={passwordValue}
                                        setInputValue={setPasswordValue}
                                        autocomplete="yes"
                                        theme="light"
                                    />
                                </div>

                                <div className="email-modal__buttons mt-1">
                                    <button className="email-modal__buttons-continue">CONTINUE</button>
                                    <button
                                        className="email-modal__buttons-cancel"
                                        onClick={() => setShowChangeFirstNameModal(false)}
                                    >
                                        CANCEL
                                    </button>
                                </div>
                            </form>
                        </>
                    )}

                    {stepper === 2 && (
                        <div className="email-modal__loading center">
                            <LoadingSpinner />
                        </div>
                    )}

                    {stepper === 3 && (
                        <>
                            <div className="account-title">Change your First Name</div>
                            <div className="email-modal__info">Enter your new first name.</div>

                            <form onSubmit={emailChangeHandler} className="email-modal__form">
                                <div>
                                    <Input
                                        inputType="text"
                                        inputName="New First Name"
                                        inputId="new-first-name"
                                        inputValue={newFirstNameValue}
                                        setInputValue={setFirstNameValue}
                                        autocomplete="yes"
                                        theme="light"
                                    />
                                </div>

                                <div className="email-modal__buttons mt-1">
                                    <button type="submit" className="email-modal__buttons-continue">
                                        CONFIRM
                                    </button>

                                    <button
                                        type="button"
                                        className="email-modal__buttons-cancel"
                                        onClick={(e) => setShowChangeFirstNameModal(false)}
                                    >
                                        CANCEL
                                    </button>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChangeFirstNameModal;
