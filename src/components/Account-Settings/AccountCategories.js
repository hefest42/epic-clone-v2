import React, { useState } from "react";

import { Link } from "react-router-dom";

import { FaUser, FaWallet } from "react-icons/fa";
import { ImKey } from "react-icons/im";

const AccountCategories = () => {
    const [activeCategory, setActiveCategory] = useState("settings");

    return (
        <div className="account-container__left">
            <Link
                to="settings"
                className={
                    activeCategory === "settings"
                        ? "account-categories__item account-categories__active"
                        : "account-categories__item"
                }
                onClick={() => setActiveCategory("settings")}
            >
                <div>
                    <FaUser />
                </div>
                <div>ACCOUNT SETTINGS</div>
            </Link>

            <Link
                to="password"
                className={
                    activeCategory === "password"
                        ? "account-categories__item account-categories__active"
                        : "account-categories__item"
                }
                onClick={() => setActiveCategory("password")}
            >
                <div>
                    <ImKey />
                </div>
                <div>PASSWORD & SECURITY </div>
            </Link>

            <Link
                to="transaction"
                className={
                    activeCategory === "transaction"
                        ? "account-categories__item account-categories__active"
                        : "account-categories__item"
                }
                onClick={() => setActiveCategory("transaction")}
            >
                <div>
                    <FaWallet />
                </div>
                <div>TRANSACTIONS</div>
            </Link>
        </div>
    );
};

export default AccountCategories;
