import React, { useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";

import { FaUser, FaWallet } from "react-icons/fa";
import { ImKey } from "react-icons/im";

const AccountCategories = () => {
    const location = useLocation();

    const [activeCategory, setActiveCategory] = useState("");

    useEffect(() => {
        const path = location.pathname.split("/")[location.pathname.split("/").length - 1];

        setActiveCategory(path);
    }, [location.pathname]);

    return (
        <div className="account-categories">
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
                to="settings"
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
