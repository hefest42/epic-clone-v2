import React, { useState } from "react";

import LoadingSpinner from "../UI/LoadingSpinner";

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
    const [isPasswordActive, setIsPasswordActive] = useState(false);
    const [passwordValue, setPasswordValue] = useState("");
    const [isEmailActive, setIsEmailActive] = useState(false);
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
                            <div className="account-settings__title">Change your Email Address</div>
                            <div className="email-modal__info">
                                In order to change your Email Address, you must first enter your password
                            </div>

                            <form onSubmit={confirmPasswordHandler} className="email-modal__form">
                                <div
                                    className={
                                        isPasswordActive
                                            ? "settings-modal__input settings-modal__input-active"
                                            : "settings-modal__input"
                                    }
                                >
                                    <div className="settings-modal__input-desc">
                                        <label htmlFor="password">Your Password</label>
                                    </div>

                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        autoComplete="no"
                                        onClick={() => setIsPasswordActive(true)}
                                        onChange={(e) => setPasswordValue(e.target.value)}
                                        onBlur={() => !passwordValue && setIsPasswordActive(false)}
                                        value={passwordValue}
                                    />
                                </div>

                                <div className="email-modal__buttons">
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
                            <div className="account-settings__title">Change your Email Address</div>
                            <div className="email-modal__info">Enter your new Email Address</div>

                            <form onSubmit={emailChangeHandler} className="email-modal__form">
                                <div
                                    className={
                                        isEmailActive
                                            ? "settings-modal__input settings-modal__input-active"
                                            : "settings-modal__input"
                                    }
                                >
                                    <div className="settings-modal__input-desc">
                                        <label htmlFor="email">New Email Address</label>
                                    </div>

                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        autoComplete="no"
                                        onClick={() => setIsEmailActive(true)}
                                        onChange={(e) => setEmailValue(e.target.value)}
                                        onBlur={() => !emailValue && setIsEmailActive(false)}
                                        value={emailValue}
                                    />
                                </div>

                                <div className="email-modal__buttons">
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
