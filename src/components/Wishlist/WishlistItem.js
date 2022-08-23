import React from "react";

import { DUMMY_CAROUSEL_GAMES } from "../../Helpers/DummyGames";

import { AiFillWindows } from "react-icons/ai";

const WishlistItem = () => {
    const GAME = DUMMY_CAROUSEL_GAMES[0];

    return (
        <div className="wishlist-item center">
            <div className="wishlist-item__inner space-between">
                <div className="wishlist-item__image center">
                    <img src={GAME.posterSmall} alt={`${GAME.name} poster`} />
                </div>
                <div className="wishlist-item__info space-between-column">
                    <div className="wishlist-item__info-container space-between">
                        <div>{GAME.name}</div>
                        <div>{GAME.price}</div>
                    </div>
                    <div className="wishlist-item__info-container space-between">
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishlistItem;
