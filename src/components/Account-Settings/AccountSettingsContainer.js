import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";

import Header from "../Front-Page/Header";
import Footer from "../Front-Page/Footer";
import AccountSettings from "./AccountSettings";
import AccountCategories from "./AccountCategories";
import ChangeDisplayNameModal from "./ChangeDisplayNameModal";

const AccountSettingsContainer = () => {
    const [showChangeDisplayNameModal, setShowDisplayNameModal] = useState(false);

    return (
        <div className="account center-column">
            <Header />

            <div className="account-container space-between">
                <AccountCategories />

                <div className="account-information">
                    <Routes>
                        <Route
                            path="settings"
                            element={<AccountSettings setShowDisplayNameModal={setShowDisplayNameModal} />}
                        />
                    </Routes>
                </div>
            </div>

            {showChangeDisplayNameModal && <ChangeDisplayNameModal setShowDisplayNameModal={setShowDisplayNameModal} />}

            <Footer />
        </div>
    );
};

export default AccountSettingsContainer;
