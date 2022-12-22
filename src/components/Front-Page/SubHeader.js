import React, { useState, useEffect } from "react";

import { Link, NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

import { useSelector } from "react-redux";

const SubHeader = () => {
    const isAccountLoggedIn = useSelector((state) => state.account.isAccountLoggedIn);
    const cart = useSelector((state) => state.cart.cart);
    const [searchInput, setSearchInput] = useState("");

    const highlightString = (string) => {
        const searchValue = searchInput;

        const reg = new RegExp(searchValue, "gi");

        const response = string.replace(reg, function (str) {
            return "<span style='fontWeight: bold;'>" + str + "</span>";
        });

        // console.log(reg);
        console.log(response);

        return response;
    };

    useEffect(() => {
        highlightString("UNCHARTED: Legacy of Thieves Collection");
    }, [searchInput]);

    return (
        <div className="subHeader space-between">
            <div className="subHeader-left center">
                <div className="subHeader-left__form center">
                    <FiSearch />
                    <form>
                        <input
                            type="text"
                            placeholder="Search the store"
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                    </form>

                    <ul className="subHeader-left__form-search">
                        <Link to="/store" className="subHeader-left__form-search-item">
                            {highlightString("UNCHARTED: Legacy of Thieves Collection")}
                        </Link>
                        <Link to="/store" className="subHeader-left__form-search-item">
                            UNCHARTED: Legacy of Thieves Collection
                        </Link>
                        <Link to="/store" className="subHeader-left__form-search-item">
                            UNCHARTED: Legacy of Thieves Collection
                        </Link>
                        <Link to="/store" className="subHeader-left__form-search-item">
                            UNCHARTED: Legacy of Thieves Collection
                        </Link>
                        <Link to="/store" className="subHeader-left__form-search-item">
                            UNCHARTED: Legacy of Thieves Collection
                        </Link>
                    </ul>
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
                    to="browse"
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
                {isAccountLoggedIn && (
                    <NavLink
                        to="wishlist"
                        className={({ isActive }) =>
                            isActive ? "subHeader-left__item subHeader-active" : "subHeader-left__item"
                        }
                    >
                        Wishlist
                    </NavLink>
                )}

                {isAccountLoggedIn && (
                    <NavLink
                        to="cart"
                        className={({ isActive }) =>
                            isActive ? "subHeader-left__item subHeader-active" : "subHeader-left__item"
                        }
                    >
                        {cart.length === 0 ? "Cart" : `Cart(${cart.length})`}
                    </NavLink>
                )}
            </div>
        </div>
    );
};

export default SubHeader;
