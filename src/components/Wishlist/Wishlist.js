import React, { useState } from "react";

import WishlistItem from "./WishlistItem";
import WishlistGenreFilters from "./WishlistGenreFilters";
import useComponentVisible from "../../Helpers/useComponentVisible";

import { AiOutlineDown } from "react-icons/ai";

const SORT_BY_ITEMS = ["Date Added", "Alphabetical", "Price: Low to High", "Price: High to Low"];

const Wishlist = () => {
    const [sortBy, setSortBy] = useState("Date Added");
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
                                {sortBy}
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
                                    <li key={item} onClick={() => setSortBy(item)}>
                                        <button
                                            className={
                                                item === sortBy
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
                <WishlistGenreFilters />
            </div>
        </div>
    );
};

export default Wishlist;
