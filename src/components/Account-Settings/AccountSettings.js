import React, { useEffect, useState } from "react";

import AccountSettingsInput from "../UI/AccountSettingsInput";

import { FiEdit2 } from "react-icons/fi";

import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

const AccountSettings = ({
    setShowDisplayNameModal,
    setShowChangeEmailAddressModal,
    setShowChangeFirstNameModal,
    setShowChangeLastNameModal,
}) => {
    const navigate = useNavigate();
    const isAccountLoggedIn = useSelector((state) => state.account.isAccountLoggedIn);
    const account = useSelector((state) => state.account.account);
    const [accountInformation, setAccountInformation] = useState({});

    const displayAccountInformation = () => {
        if (!isAccountLoggedIn) return;

        const [email, domain] = account.emailAddress.split("@");
        const splitEmail = email.split("");

        const firstName = account.firstName.split("");
        const lastName = account.lastName.split("");

        return {
            hiddenEmailAddress: `${splitEmail[0]}***${splitEmail[splitEmail.length - 1]}@${domain}`,
            hiddenFirstName: `${firstName[0]}***${firstName[firstName.length - 1]}`,
            hiddenLastName: `${lastName[0]}***${lastName[lastName.length - 1]}`,
        };
    };

    useEffect(() => {
        if (!isAccountLoggedIn) {
            navigate("/log-in");
            return;
        }

        setAccountInformation(displayAccountInformation());
    }, []);

    return (
        <div className="account-settings">
            <div>
                <div className="account-title">ACCOUNT SETTINGS</div>
                <div className="account-subtitle">Manage your accounts's details.</div>
            </div>

            <div className="account-section">
                <div className="account-title">ACCOUNT INFORMATION</div>

                <div className="account-id">
                    <span>ID:</span> {account.accountId}
                </div>
            </div>

            <div className="account-section space-between">
                <AccountSettingsInput
                    name="DISPLAY NAME"
                    isAccountLoggedIn={isAccountLoggedIn}
                    value={account.displayName}
                    showModal={setShowDisplayNameModal}
                />

                <AccountSettingsInput
                    name="EMAIL ADDRESS"
                    isAccountLoggedIn={isAccountLoggedIn}
                    value={accountInformation.hiddenEmailAddress}
                    showModal={setShowChangeEmailAddressModal}
                />
            </div>

            <div>
                <div className="account-title">PERSONAL DETAILS</div>
                <div className="account-subtitle">
                    Manage your personal information. These personal details are private and will not be displayed to
                    other users.
                </div>
            </div>

            <div className="account-section space-between">
                <AccountSettingsInput
                    name={"FIRST NAME"}
                    isAccountLoggedIn={isAccountLoggedIn}
                    value={accountInformation.hiddenFirstName}
                    showModal={setShowChangeFirstNameModal}
                />

                <AccountSettingsInput
                    name={"LAST NAME"}
                    isAccountLoggedIn={isAccountLoggedIn}
                    value={accountInformation.hiddenLastName}
                    showModal={setShowChangeLastNameModal}
                />
            </div>

            <div className="account-id">
                <span>NOTE:</span> After every change you will need to log in again.
            </div>
        </div>
    );
};

export default AccountSettings;
