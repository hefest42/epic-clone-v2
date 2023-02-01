import React from "react";

import { FiEdit2 } from "react-icons/fi";

const AccountSettingsInput = ({ name, isAccountLoggedIn, value, showModal }) => {
    return (
        <div className="account-settings__inputs-container">
            <div className="account-settings__input">
                <div className="account-settings__input-label">{name}</div>
                <div className="account-settings__input-value">{isAccountLoggedIn ? value : ""}</div>
            </div>
            <button className="account-settings__button" onClick={() => showModal(true)}>
                <FiEdit2 />
            </button>
        </div>
    );
};

export default AccountSettingsInput;
