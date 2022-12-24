import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

import { useSelector } from "react-redux";

import { DUMMY_CAROUSEL_GAMES } from "../../Helpers/DummyGames";

const SubHeader = () => {
    const isAccountLoggedIn = useSelector((state) => state.account.isAccountLoggedIn);
    const cart = useSelector((state) => state.cart.cart);
    const [searchResulInput, setSearchResultInput] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    const highlightString = (input) => {
        if (input === "") {
            setSearchResult([]);
            return;
        }

        const searchInput = new RegExp(input, "gi");

        const searchResultGames = DUMMY_CAROUSEL_GAMES.filter((game) => game.name.toLowerCase().includes(input)).slice(
            0,
            5
        );

        const highlightedSearchResults = searchResultGames.map((game) =>
            game.name.replace(searchInput, function (str) {
                return "<span>" + str + "</span>";
            })
        );

        setSearchResult(highlightedSearchResults);
    };

    return (
        <div className="subHeader space-between">
            <div className="subHeader-left center">
                <div className="subHeader-left__form center">
                    <FiSearch />
                    <form>
                        <input
                            type="text"
                            placeholder="Search the store"
                            onChange={(e) => highlightString(e.target.value)}
                        />
                    </form>

                    {searchResult.length > 0 && (
                        <ul className="subHeader-left__form-search">
                            {searchResult.map((result, i) => (
                                <Link
                                    key={i}
                                    to={`/store/game/${result.replace(/\s*\<.*?\>\s*/g, "")}`} // .replace until i figure out a better way
                                    className="subHeader-left__form-search-item"
                                >
                                    <div
                                        onClick={() => setSearchResult([])}
                                        dangerouslySetInnerHTML={{ __html: result }}
                                    ></div>
                                </Link>
                            ))}
                        </ul>
                    )}
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

// const reg = new RegExp(searchValue, "gi");

// const response = string.replace(reg, function (str) {
//     return "<span style='fontWeight: bold;'>" + str + "</span>";
// });
