import React, { useEffect } from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { API_URL } from "./Helpers/HelperFunctions";

import FrontPageContainer from "./components/Front-Page/FrontPageContainer";
import LogInContainer from "./components/Log-In-Sign-Up/LogInContainer";
import SignUpContainer from "./components/Log-In-Sign-Up/SignUpContainer";
import AccountSettingsContainer from "./components/Account-Settings/AccountSettingsContainer";
import TemporaryPage from "./components/UI/TemporaryPage";

function App() {
    const isAccountLoggedIn = useSelector((state) => state.account.isAccountLoggedIn);
    const account = useSelector((state) => state.account.account);

    useEffect(() => {
        if (!isAccountLoggedIn) return;

        const addWishlistedGamesToAccount = async () => {
            try {
                const response = fetch(`${API_URL}/accounts/${account.accountId}.json`, {
                    method: "PATCH",
                    body: JSON.stringify({ wishlist: account.wishlist }),
                    headers: {
                        "CONTENT-TYPE": "application/json",
                    },
                });
            } catch (error) {}
        };

        addWishlistedGamesToAccount();
    }, [account.wishlist]);

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/store" replace />} />
            <Route path="store/*" element={<FrontPageContainer />} />
            <Route path="log-in" element={<LogInContainer />} />
            <Route path="sign-up" element={<SignUpContainer />} />
            <Route path="account/*" element={<AccountSettingsContainer />} />
            <Route path="help" element={<TemporaryPage />} />
        </Routes>
    );
}

export default App;
