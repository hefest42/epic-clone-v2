import React from "react";

import { FiEdit2 } from "react-icons/fi";

const AccountSettingsInput = ({ name, isAccountLoggedIn, value, showModal }) => {
    return (
        <div className="account-settings__inputs-container">
            <div className={"account-settings__input"}>
                <label htmlFor="">{name}</label>
                <div className="account-settings__input-filler"></div>
                <input type="text" defaultValue={isAccountLoggedIn ? value : ""} />
            </div>
            <button className="account-settings__button" onClick={() => showModal(true)}>
                <FiEdit2 />
            </button>
        </div>
    );
};

export default AccountSettingsInput;
