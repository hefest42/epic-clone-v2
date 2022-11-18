import React, { useState } from "react";

import { IoMdAddCircle, IoMdCheckmarkCircle } from "react-icons/io";

import { useDispatch, useSelector } from "react-redux";
import { addGameToWishlist, removeGameFromWishlist } from "../../store/AccountSlice";

export const WishlistButton = ({ game, mouseEnter }) => {
    const dispatch = useDispatch();
    const isAccountLoggedIn = useSelector((state) => state.account.isAccountLoggedIn);
    const account = useSelector((state) => state.account.account);
    const [showWishlistInfo, setShowWishlistInfo] = useState(false);

    const wishlistingGameHandler = () => {
        if (!isAccountLoggedIn) return;

        if (account.wishlist?.filter((wishlistGame) => wishlistGame.name === game.name).length > 0)
            dispatch(removeGameFromWishlist(game));
        else dispatch(addGameToWishlist(game));
    };

    const wishlistButtonHandler = (wishlist) => {
        if (!isAccountLoggedIn || !wishlist) return <IoMdAddCircle />;

        return wishlist.filter((wishlistGame) => wishlistGame.name === game.name).length === 0 ? (
            <IoMdAddCircle />
        ) : (
            <IoMdCheckmarkCircle />
        );
    };

    return (
        <>
            {isAccountLoggedIn && (
                <div
                    className="wishlist-info"
                    style={{
                        opacity: `${showWishlistInfo ? "100" : "0"}`,
                    }}
                >
                    Add to Wishlist
                </div>
            )}

            {isAccountLoggedIn && (
                <button
                    className="wishlist-button"
                    onMouseEnter={() => {
                        setShowWishlistInfo(true);
                        mouseEnter();
                    }}
                    onMouseLeave={() => setShowWishlistInfo(false)}
                    onClick={wishlistingGameHandler}
                >
                    {wishlistButtonHandler(account.wishlist)}
                </button>
            )}
        </>
    );
};

export const ImageCover = () => {
    return <div className="image-cover"></div>;
};
