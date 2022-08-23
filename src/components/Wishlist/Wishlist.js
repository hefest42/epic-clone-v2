import React, { useState, useRef, useEffect } from "react";

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
                                className="center"
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
                                        <button>{item}</button>
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
