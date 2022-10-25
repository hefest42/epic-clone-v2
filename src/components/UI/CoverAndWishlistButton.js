import React from "react";
import { useState } from "react";

import { IoMdAddCircle, IoMdCheckmarkCircle } from "react-icons/io";

import { useDispatch, useSelector } from "react-redux";
import { addGameToWishlist, removeGameFromWishlist } from "../../store/AccountSlice";

export const WishlistButton = ({ game, mouseEnter }) => {
    const dispatch = useDispatch();
    const account = useSelector((state) => state.account.account);
    const [showWishlistInfo, setShowWishlistInfo] = useState(false);

    const wishlistingGameHandler = () => {
        if (account.wishlist.slice(1).filter((wishlistGame) => wishlistGame.name === game.name).length > 0)
            dispatch(removeGameFromWishlist(game));
        else dispatch(addGameToWishlist(game));
    };

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
                onClick={wishlistingGameHandler}
            >
                {account.wishlist.slice(1).filter((wishlistGame) => wishlistGame.name === game.name).length === 0 ? (
                    <IoMdAddCircle />
                ) : (
                    <IoMdCheckmarkCircle />
                )}
            </button>
        </>
    );
};

export const ImageCover = () => {
    return <div className="image-cover"></div>;
};
