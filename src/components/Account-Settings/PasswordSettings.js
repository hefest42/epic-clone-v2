import React, { useState } from "react";

import { useSelector } from "react-redux";

const PasswordSettings = () => {
    const account = useSelector((state) => state.account.account);

    const [isCurrentPasswordActive, setIsCurrentPasswordActive] = useState(false);
    const [currentPasswordValue, setCurrentPasswordValue] = useState("");
    const [isNewPasswordActive, setIsNewPasswordActive] = useState(false);
    const [newPasswordValue, setNewPasswordValue] = useState("");
    const [isRetypePasswordActive, setIsRetypePasswordActive] = useState(false);
    const [retypePasswordValue, setRetypePasswordValue] = useState("");

    const changePasswordHandler = async (e) => {
        e.preventDefault();

        const currentPassword = currentPasswordValue;
        const newPassword = newPasswordValue;
        const retypedNewPassword = retypePasswordValue;
    };

    return (
        <div className="password-settings">
            <div>
                <div className="account-settings__title">PASSWORD SETTINGS</div>
                <div className="account-settings__subtitle">
                    For your security, we highly recommend that you choose a unique password that you don't use for any
                    other online account.
                </div>
            </div>

            <div className="password-settings__container center">
                <form className="password-settings__form" onSubmit={changePasswordHandler}>
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
                            <label htmlFor="password">Current Password</label>
                        </div>

                        <input
                            type="password"
                            id="password"
                            name="password"
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
                            <label htmlFor="password">Current Password</label>
                        </div>

                        <input
                            type="password"
                            id="password"
                            name="password"
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
                            <label htmlFor="password">Current Password</label>
                        </div>

                        <input
                            type="password"
                            id="password"
                            name="password"
                            autoComplete="no"
                            onClick={() => setIsRetypePasswordActive(true)}
                            onChange={(e) => setRetypePasswordValue(e.target.value)}
                            onBlur={() => !retypePasswordValue && setIsRetypePasswordActive(false)}
                            value={retypePasswordValue}
                        />
                    </div>

                    <div className="password-settings__buttons space-between">
                        <button className="settings-modal__buttons settings-modal__cancel">DISCARD CHANGES</button>
                        <button className="settings-modal__buttons settings-modal__confirm" type="button">
                            SAVE CHANGES
                        </button>
                    </div>
                    <div className="account-settings__id">
                        <span>NOTE:</span> After every change you will need to log in again.
                    </div>
                </form>

                <div className="password-settings__information"></div>
            </div>
        </div>
    );
};

export default PasswordSettings;
