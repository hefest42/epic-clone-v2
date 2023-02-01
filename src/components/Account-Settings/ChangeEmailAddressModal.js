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

const ChangeEmailAddressModal = ({ setShowChangeEmailAddressModal }) => {
    const naviagate = useNavigate();
    const dispatch = useDispatch();
    const account = useSelector((state) => state.account.account);
    const [stepper, setStepper] = useState(1);
    const [passwordValue, setPasswordValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
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

        const newEmailAddress = emailValue;

        if (!newEmailAddress.includes("@")) {
            setErrorMessage("Please enter a valid email address.");
            return;
        }

        try {
            const response = fetch(`${API_URL}/accounts/${account.accountId}.json`, {
                method: "PATCH",
                body: JSON.stringify({ emailAddress: newEmailAddress }),
                headers: {
                    "CONTENT-TYPE": "application/json",
                },
            });
        } catch (error) {
            console.error(error);
            setErrorMessage("Oops.. Something went wrong. Please wait a bit and try again.");
        }

        setShowChangeEmailAddressModal(false);
        dispatch(logOutAccount());
        naviagate("/log-in");
    };

    return (
        <div className="email-modal center">
            <div className="email-modal__inner">
                <div className="settings-modal__close">
                    <AiOutlineClose onClick={() => setShowChangeEmailAddressModal(false)} />
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
                            <div className="account-title">Change your Email Address</div>
                            <div className="email-modal__info">
                                In order to change your Email Address, you must first enter your password
                            </div>

                            <form onSubmit={confirmPasswordHandler} className="email-modal__form">
                                <Input
                                    inputType="password"
                                    inputName="Confirm Password"
                                    inputId="confirm-password"
                                    inputValue={passwordValue}
                                    setInputValue={setPasswordValue}
                                    autocomplete="yes"
                                    theme="light"
                                />

                                <div className="email-modal__buttons mt-1">
                                    <button className="email-modal__buttons-continue">CONTINUE</button>
                                    <button
                                        className="email-modal__buttons-cancel"
                                        onClick={() => setShowChangeEmailAddressModal(false)}
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
                            <div className="account-title">Change your Email Address</div>
                            <div className="email-modal__info">Enter your new Email Address</div>

                            <form onSubmit={emailChangeHandler} className="email-modal__form">
                                <div>
                                    <Input
                                        inputType="email"
                                        inputName="New Email"
                                        inputId="new-email"
                                        inputValue={emailValue}
                                        setInputValue={setEmailValue}
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
                                        onClick={(e) => setShowChangeEmailAddressModal(false)}
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

export default ChangeEmailAddressModal;
