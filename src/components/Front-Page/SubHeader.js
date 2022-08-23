import React from "react";

import { NavLink } from "react-router-dom";

import { FiSearch } from "react-icons/fi";

const SubHeader = () => {
    return (
        <div className="subHeader space-between">
            <div className="subHeader-left center">
                <div className="subHeader-left__form center">
                    <FiSearch />
                    <form>
                        <input type="text" placeholder="Search the store" />
                    </form>
                </div>
                <NavLink
                    to="/store"
                    className={({ isActive }) =>
                        isActive ? "subHeader-left__item subHeader-active" : "subHeader-left__item"
                    }
                    end
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

            <div className="subHeader-right">
                <NavLink
                    to="wishlist"
                    className={({ isActive }) =>
                        isActive ? "subHeader-left__item subHeader-active" : "subHeader-left__item"
                    }
                >
                    Wishlist
                </NavLink>

                <NavLink
                    to="cart"
                    className={({ isActive }) =>
                        isActive ? "subHeader-left__item subHeader-active" : "subHeader-left__item"
                    }
                >
                    Cart
                </NavLink>
            </div>
        </div>
    );
};

export default SubHeader;
