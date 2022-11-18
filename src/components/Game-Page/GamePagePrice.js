import React from "react";

import { gamePriceHandler } from "../../Helpers/HelperFunctions";

const GamePagePrice = ({ game }) => {
    return (
        <div className="game-page__price">
            <div className="game-page__price-logo center">
                <div className="game-page__price-logo-container center">
                    <img src={game.logo} alt="logo" />
                </div>
            </div>
            <div className="game-page__price-prices">
                {gamePriceHandler(game.gameOnSale, game.price, game.discount)}
            </div>
            <div className="game-page__buttons center-column">
                <button className="game-page__buttons-buy">BUY NOW</button>
                <button className="game-page__buttons-cart">ADD TO CART</button>
                <button className="game-page__buttons-wishlist">ADD TO WISHLIST</button>
            </div>
        </div>
    );
};

export default GamePagePrice;
