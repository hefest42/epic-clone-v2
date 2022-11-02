import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";

import Header from "../Front-Page/Header";
import Footer from "../Front-Page/Footer";
import AccountSettings from "./AccountSettings";
import AccountCategories from "./AccountCategories";
import ChangeDisplayNameModal from "./ChangeDisplayNameModal";
import ChangeEmailAddressModal from "./ChangeEmailAddressModal";
import ChangeFirstNameModal from "./ChangeFirstNameModal";
import ChangeLastNameModal from "./ChangeLastNameModal";

const AccountSettingsContainer = () => {
    const [showChangeDisplayNameModal, setShowDisplayNameModal] = useState(false);
    const [showChangeEmailAddressModal, setShowChangeEmailAddressModal] = useState(false);
    const [showChangeFirstNameModal, setShowChangeFirstNameModal] = useState(false);
    const [showChangeLastNameModal, setShowChangeLastNameModal] = useState(false);

    return (
        <div className="account center-column">
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
