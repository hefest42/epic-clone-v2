import React from "react";

import { Link } from "react-router-dom";

import { DUMMY_CAROUSEL_GAMES } from "../../../Helpers/DummyGames";

import { AiFillWindows } from "react-icons/ai";

const WishlistItem = () => {
    const GAME = DUMMY_CAROUSEL_GAMES[0];

    const addToCartHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();

        console.log("CLICK");
    };

    return (
        <Link to="/store" className="wishlist-cart-item center">
            <div className="wishlist-cart-item__inner space-between">
                <div className="wishlist-cart-item__image center">
                    <img src={GAME.posterSmall} alt={`${GAME.name} poster`} />
                </div>
                <div className="wishlist-cart-item__info space-between-column">
                    <div className="wishlist-cart-item__info-container space-between">
                        <div className="wishlist-cart-item__info-name">{GAME.name}</div>
                        <div className="wishlist-cart-item__info-price">{GAME.price}</div>
                    </div>
                    <div className="wishlist-cart-item__info-container space-between">
                        <div>
                            <AiFillWindows />
                        </div>
                        <div>
                            <button className="wishlist-cart-item__info-remove">Remove</button>
                            <button className="wishlist-cart-item__info-cart" onClick={addToCartHandler}>
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
