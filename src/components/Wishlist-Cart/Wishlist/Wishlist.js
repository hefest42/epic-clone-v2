import React, { useState } from "react";

import WishlistItem from "./WishlistItem";
import FilterBrowser from "../../UI/FilterBrowser";
import useComponentVisible from "../../../Helpers/useComponentVisible";

import { DUMMY_CAROUSEL_GAMES } from "../../../Helpers/DummyGames";
import { AiOutlineDown } from "react-icons/ai";

const SORT_BY_ITEMS = ["Date Added", "Alphabetical", "Price: Low to High", "Price: High to Low"];

//TODO fix media query
//TODO add games/filters from users wishlist
const Wishlist = () => {
    const [sortByText, setSortByText] = useState("Date Added");
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

    return (
        <div className="wishlist">
            <div className="wishlist-left">
                <div className="wishlist-title">Wishlist</div>

                <div className="wishlist-container">
                    <div className="wishlist-sort">
                        <div className="wishlist-sort__item">
                            Sort by:
                            <button
                                className="wishlist-sort__item-button center"
                                onClick={() => setIsComponentVisible((state) => !state)}
                                ref={ref}
                            >
                                {sortByText}
                                <AiOutlineDown
                                    style={{
                                        transform: `rotate(${isComponentVisible ? "-180deg" : "0"})`,
                                    }}
                                />
                            </button>
                        </div>
                        {isComponentVisible && (
                            <ul className="wishlist-dropdown">
                                {SORT_BY_ITEMS.map((item) => (
                                    <li key={item} onClick={() => setSortByText(item)}>
                                        <button
                                            className={
                                                item === sortByText
                                                    ? "wishlist-dropdown__item wishlist-dropdown__item-active"
                                                    : "wishlist-dropdown__item"
                                            }
                                        >
                                            {item}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div>
                        <WishlistItem />
                    </div>
                </div>
            </div>
            <div className="wishlist-right">
                <FilterBrowser games={DUMMY_CAROUSEL_GAMES} />
            </div>
        </div>
    );
};

export default Wishlist;
