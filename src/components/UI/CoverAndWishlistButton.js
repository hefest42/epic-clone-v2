import React from "react";
import { useState } from "react";

import { IoMdAddCircle } from "react-icons/io";

export const WishlistButton = ({ top, left, right }) => {
    const [showWishlistInfo, setShowWishlistInfo] = useState(false);

    return (
        <div
            className="wishlist-button center-column"
            style={{
                top: `${top}%`,
                left: `${left}%`,
                right: `${right}%`,
            }}
        >
            <div
                className="wishlist-button__info"
                style={{
                    opacity: `${showWishlistInfo ? "100" : "0"}`,
                }}
            >
                Add to Wishlist
            </div>
            <button onMouseEnter={() => setShowWishlistInfo(true)} onMouseLeave={() => setShowWishlistInfo(false)}>
                <IoMdAddCircle />
            </button>
        </div>
    );
};
