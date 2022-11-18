import React, { useState } from "react";

import AccountDropdownMenu from "./AccountDropdownMenu";

import { NavLink } from "react-router-dom";

import { RiAccountCircleLine, RiLoginBoxLine } from "react-icons/ri";
import { SiEpicgames } from "react-icons/si";

import { useSelector } from "react-redux";

const Header = () => {
    const account = useSelector((state) => state.account.account);
    const isAccountLoggedIn = useSelector((state) => state.account.isAccountLoggedIn);
    const [showDropdownMenu, setShowDropdownMenu] = useState(false);

    return (
        <header className="header space-between">
            <div className="header-left center">
                <div className="header-logo center">
                    <SiEpicgames />
                </div>

                <NavLink
                    to="/store"
                    className={({ isActive }) => (isActive ? "header-item header-active" : "header-item")}
                >
                    <div className="header-item__text center">STORE</div>
                    <div className="header-item__border"></div>
                </NavLink>

                <NavLink
                    to="/faq"
                    className={({ isActive }) => (isActive ? "header-item header-active" : "header-item")}
                >
                    <div className="header-item__text center">FAQ</div>
                    <div className="header-item__border"></div>
                </NavLink>

                <NavLink
                    to="/help"
                    className={({ isActive }) => (isActive ? "header-item header-active" : "header-item")}
                >
                    <div className="header-item__text center">HELP</div>
                    <div className="header-item__border"></div>
                </NavLink>
            </div>

            <div className="header-right center">
                <div
                    className="header-right__sign center"
                    onMouseEnter={() => setShowDropdownMenu(true)}
                    onMouseLeave={() => setShowDropdownMenu(false)}
                >
                    {!isAccountLoggedIn ? (
                        <div className="header-right__link">
                            <NavLink to="/log-in" className="header-right__link center">
                                <RiLoginBoxLine />
                                <p>SIGN IN</p>
                            </NavLink>
                        </div>
                    ) : (
                        <div className="header-right__online center">
                            <div>
                                <RiAccountCircleLine />
                            </div>
                            <p>{account.displayName}</p>
                        </div>
                    )}
                    {isAccountLoggedIn && showDropdownMenu && <AccountDropdownMenu />}
                </div>
                <div className="header-right__download center">DOWNLOAD</div>
            </div>
        </header>
    );
};

export default Header;
