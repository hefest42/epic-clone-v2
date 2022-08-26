import React from "react";

import { NavLink } from "react-router-dom";

import { RiAccountCircleLine } from "react-icons/ri";
import { SiEpicgames } from "react-icons/si";

//TODO make logo link to the home/discover page
const Header = () => {
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
                <NavLink to="/log-in">
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
