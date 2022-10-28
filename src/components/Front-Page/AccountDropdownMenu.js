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

    return (
        <div className="header-dropdown">
            <button className="header-dropdown__item center-column">Settings</button>
            <button className="header-dropdown__item center-column" onClick={(e) => logOutAccountHandler(e)}>
                Sign Out
            </button>
        </div>
    );
};

export default AccountDropdownMenu;
