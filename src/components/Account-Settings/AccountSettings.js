import React, { useEffect } from "react";

import { FiEdit2 } from "react-icons/fi";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AccountSettings = () => {
    const navigate = useNavigate();
    const isAccountLoggedIn = useSelector((state) => state.account.isAccountLoggedIn);
    const account = useSelector((state) => state.account.account);

    useEffect(() => {
        if (!isAccountLoggedIn) {
            navigate("/log-in");
            return;
        }
    });

    return (
        <div className="account-settings">
            <div>
                <div className="account-settings__title">ACCOUNT SETTINGS</div>
                <div className="account-settings__subtitle">Manage your accounts's details.</div>
            </div>

            <div className="account-settings__section">
                <div className="account-settings__title">ACCOUNT INFORMATION</div>

                <div className="account-settings__id">
                    <span>ID:</span> {account.accountId}
                </div>
            </div>

            <div className="account-settings__section space-between">
                <div className="account-settings__inputs-container">
                    <div className={isAccountLoggedIn ? "account-settings__input" : "account-settings__input"}>
                        <label htmlFor="">DISPLAY NAME</label>
                        <div className="account-settings__input-filler"></div>
                        <input type="text" defaultValue={isAccountLoggedIn ? account.displayName : ""} />
                    </div>
                    <button className="account-settings__button">
                        <FiEdit2 />
                    </button>
                </div>

                <div className="account-settings__inputs-container">
                    <div className={isAccountLoggedIn ? "account-settings__input" : "account-settings__input"}>
                        <label htmlFor="">EMAIL ADDRESS</label>
                        <div className="account-settings__input-filler"></div>
                        <input type="text" defaultValue={isAccountLoggedIn ? account.emailAddress : ""} />
                    </div>
                    <button className="account-settings__button">
                        <FiEdit2 />
                    </button>
                </div>
            </div>

            <div>
                <div className="account-settings__title">PERSONAL DETAILS</div>
                <div className="account-settings__subtitle">
                    Manage your personal information. These personal details are private and will not be displayed to
                    other users.
                </div>
            </div>

            <div className="account-settings__section space-between">
                <div className="account-settings__inputs-container">
                    <div className={isAccountLoggedIn ? "account-settings__input" : "account-settings__input"}>
                        <label htmlFor="">FIRST NAME</label>
                        <div className="account-settings__input-filler"></div>
                        <input type="text" defaultValue={isAccountLoggedIn ? account.firstName : ""} />
                    </div>
                    <button className="account-settings__button">
                        <FiEdit2 />
                    </button>
                </div>

                <div className="account-settings__inputs-container">
                    <div className={isAccountLoggedIn ? "account-settings__input" : "account-settings__input"}>
                        <label htmlFor="">LAST NAME</label>
                        <div className="account-settings__input-filler"></div>
                        <input type="text" defaultValue={isAccountLoggedIn ? account.lastName : ""} />
                    </div>
                    <button className="account-settings__button">
                        <FiEdit2 />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AccountSettings;
