import React from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOutAccount } from "../../store/AccountSlice";

const AccountDropdownMenu = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logOutAccountHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();

        dispatch(logOutAccount());
        navigate("/store");
    };

    const settingsHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();

        navigate("/account/settings", { state: { path: "settings" } });
    };

    return (
        <div className="header-dropdown center-column">
            <button className="header-dropdown__item center-column" onClick={(e) => settingsHandler(e)}>
                Settings
            </button>
            <button className="header-dropdown__item center-column" onClick={(e) => logOutAccountHandler(e)}>
                Sign Out
            </button>
        </div>
    );
};

export default AccountDropdownMenu;
