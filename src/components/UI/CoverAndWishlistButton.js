import React from "react";
import { useState } from "react";

import { IoMdAddCircle } from "react-icons/io";

export const WishlistButton = ({ mouseEnter }) => {
    const [showWishlistInfo, setShowWishlistInfo] = useState(false);

    return (
        <>
            <div
                className="wishlist-info"
                style={{
                    opacity: `${showWishlistInfo ? "100" : "0"}`,
                }}
            >
                Add to Wishlist
            </div>
            <button
                className="wishlist-button"
                onMouseEnter={() => {
                    setShowWishlistInfo(true);
                    mouseEnter();
                }}
                onMouseLeave={() => setShowWishlistInfo(false)}
                onClick={() => console.log("WISHLIST")}
            >
                <IoMdAddCircle />
            </button>
        </>
    );
};

export const ImageCover = () => {
    return <div className="image-cover"></div>;
};
