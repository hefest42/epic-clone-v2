import React from "react";

import { NavLink } from "react-router-dom";

import { RiAccountCircleLine } from "react-icons/ri";

const Header = () => {
    return (
        <header className="header space-between">
            <div className="header-left center">
                <div className="header-logo">
                    <div className="header-logo__text"></div>
                </div>

                <NavLink to="/" className={({ isActive }) => (isActive ? "header-item header-active" : "header-item")}>
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
                <NavLink to="/sign-in">
                    <div className="header-right__sign center">
                        <div>
                            <RiAccountCircleLine />
                        </div>
                        <p>SIGN IN</p>
                    </div>
                </NavLink>
                <div className="header-right__download center">DOWNLOAD</div>
            </div>
        </header>
    );
};

export default Header;
