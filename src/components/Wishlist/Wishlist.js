import React, { useState } from "react";

import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const SORT_BY_ITEMS = ["Date Added", "Alphabetical", "Price: Low to High", "Price: High to Low"];
const Wishlist = () => {
    const [showSortByList, setSortByList] = useState(false);
    const [sortBy, setSortBy] = useState("Date Added");

    return (
        <div className="wishlist">
            <div className="wishlist-left">
                <div className="wishlist-title">Wishlist</div>

                <div className="wishlist-container">
                    <div className="wishlist-sort">
                        <div className="wishlist-sort__item">
                            <div>Sort by: {sortBy}</div>
                            <AiOutlineDown />
                        </div>
                        {showSortByList && (
                            <ul className="wishlist-sort__list">
                                {SORT_BY_ITEMS.map((item) => (
                                    <li
                                        key={item}
                                        className={
                                            item === sortBy
                                                ? "wishlist-sort__list-idle wishlist-sort__list-active"
                                                : "wishlist-sort__list-idle"
                                        }
                                        onClick={() => {
                                            setSortBy(item);
                                        }}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
            <div className="wishlist-right"></div>
        </div>
    );
};

export default Wishlist;
