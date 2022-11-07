import React, { useEffect, useState } from "react";

import { Routes, Route, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import Header from "../Front-Page/Header";
import Footer from "../Front-Page/Footer";
import AccountSettings from "./AccountSettings";
import AccountCategories from "./AccountCategories";
import PasswordSettings from "./PasswordSettings";
import ChangeDisplayNameModal from "./ChangeDisplayNameModal";
import ChangeEmailAddressModal from "./ChangeEmailAddressModal";
import ChangeFirstNameModal from "./ChangeFirstNameModal";
import ChangeLastNameModal from "./ChangeLastNameModal";

const AccountSettingsContainer = () => {
    const navigate = useNavigate();
    const isAccountLoggedIn = useSelector((state) => state.account.isAccountLoggedIn);
    const [showChangeDisplayNameModal, setShowDisplayNameModal] = useState(false);
    const [showChangeEmailAddressModal, setShowChangeEmailAddressModal] = useState(false);
    const [showChangeFirstNameModal, setShowChangeFirstNameModal] = useState(false);
    const [showChangeLastNameModal, setShowChangeLastNameModal] = useState(false);

    useEffect(() => {
        if (!isAccountLoggedIn) {
            navigate("/log-in");
            return;
        }
    });

    return (
        <div className="account">
            <Header />

            <div className="account-container space-between">
                <AccountCategories />

                <div className="account-information">
                    <Routes>
                        <Route
                            path="settings"
                            element={
                                <AccountSettings
                                    setShowDisplayNameModal={setShowDisplayNameModal}
                                    setShowChangeEmailAddressModal={setShowChangeEmailAddressModal}
                                    setShowChangeFirstNameModal={setShowChangeFirstNameModal}
                                    setShowChangeLastNameModal={setShowChangeLastNameModal}
                                />
                            }
                        />
                        <Route path="password" element={<PasswordSettings />} />
                    </Routes>
                </div>
            </div>

            {showChangeDisplayNameModal && <ChangeDisplayNameModal setShowDisplayNameModal={setShowDisplayNameModal} />}
            {showChangeEmailAddressModal && (
                <ChangeEmailAddressModal setShowChangeEmailAddressModal={setShowChangeEmailAddressModal} />
            )}
            {showChangeFirstNameModal && (
                <ChangeFirstNameModal setShowChangeFirstNameModal={setShowChangeFirstNameModal} />
            )}

            {showChangeLastNameModal && <ChangeLastNameModal setShowChangeLastNameModal={setShowChangeLastNameModal} />}

            <Footer />
        </div>
    );
};

export default AccountSettingsContainer;
