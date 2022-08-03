import React from "react";

import { NavLink } from "react-router-dom";

import { FiSearch } from "react-icons/fi";

const SubHeader = () => {
    return (
        <div className="subHeader space-between">
            <div className="subHeader-left center">
                <div className="subHeader-left__form center">
                    <FiSearch />
                    <form action="">
                        <input type="text" placeholder="Search the store" />
                    </form>
                </div>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "subHeader-left__item subHeader-active" : "subHeader-left__item"
                    }
                >
                    Discover
                </NavLink>
                <NavLink
                    to="/browse"
                    className={({ isActive }) =>
                        isActive ? "subHeader-left__item subHeader-active" : "subHeader-left__item"
                    }
                >
                    Browse
                </NavLink>
                <NavLink
                    to="/news"
                    className={({ isActive }) =>
                        isActive ? "subHeader-left__item subHeader-active" : "subHeader-left__item"
                    }
                >
                    News
                </NavLink>
            </div>

            <div className="subHeader-right"></div>
        </div>
    );
};

export default SubHeader;
