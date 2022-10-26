import React from "react";

import { Link } from "react-router-dom";

import { AiFillWindows } from "react-icons/ai";

import { useDispatch } from "react-redux";
import { removeGameFromWishlist } from "../../../store/AccountSlice";
import { addGameToCart } from "../../../store/CartSlice";

const WishlistItem = ({ game }) => {
    const dispatch = useDispatch();

    const addToCartHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();

        dispatch(addGameToCart(game));
        dispatch(removeGameFromWishlist(game));
    };

    const removeGameFromWishlistHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();

        dispatch(removeGameFromWishlist(game));
    };

    return (
        <Link to="/store" className="wishlist-item center">
            <div className="wishlist-item__inner space-between">
                <div className="wishlist-item__image center">
                    <img src={game.posterSmall} alt={`${game.name} poster`} />
                </div>
                <div className="wishlist-item__info space-between-column">
                    <div className="wishlist-item__info-container space-between">
                        <div className="wishlist-item__info-name">{game.name}</div>
                        <div className="wishlist-item__info-price">${game.price}</div>
                    </div>
                    <div className="wishlist-item__info-container space-between">
                        <div>
                            <AiFillWindows />
                        </div>
                        <div>
                            <button className="wishlist-item__info-remove" onClick={removeGameFromWishlistHandler}>
                                Remove
                            </button>
                            <button className="wishlist-item__info-cart" onClick={addToCartHandler}>
                                ADD TO CART
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default WishlistItem;
