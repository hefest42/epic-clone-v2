import React, { useState } from "react";

import LoadingSpinner from "../UI/LoadingSpinner";

import { AiOutlineClose } from "react-icons/ai";
import { SiEpicgames } from "react-icons/si";

const ChangeEmailAddressModal = ({ setShowChangeEmailAddressModal }) => {
    const [stepper, setStepper] = useState(1);
    const [isPasswordActive, setIsPasswordActive] = useState(false);
    const [passwordValue, setPasswordValue] = useState("");
    const [isEmailActive, setIsEmailActive] = useState(false);
    const [emailValue, setEmailValue] = useState("");

    const confirmPasswordHandler = (e) => {
        e.preventDefault();

        setStepper(2);
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
                                    <button className="email-modal__buttons-cancel">CANCEL</button>
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

                            <form onSubmit={confirmPasswordHandler} className="email-modal__form">
                                <div
                                    className={
                                        isEmailActive
                                            ? "settings-modal__input settings-modal__input-active"
                                            : "settings-modal__input"
                                    }
                                >
                                    <div className="settings-modal__input-desc">
                                        <label htmlFor="password">New Email Address</label>
                                    </div>

                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        autoComplete="no"
                                        onClick={() => setIsEmailActive(true)}
                                        onChange={(e) => setEmailValue(e.target.value)}
                                        onBlur={() => !emailValue && setIsEmailActive(false)}
                                        value={emailValue}
                                    />
                                </div>

                                <div className="email-modal__buttons">
                                    <button className="email-modal__buttons-continue">CONFIRM</button>
                                    <button className="email-modal__buttons-cancel">CANCEL</button>
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
