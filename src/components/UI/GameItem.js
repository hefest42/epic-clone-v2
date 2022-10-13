import React, { useState } from "react";

import { WishlistButton, ImageCover } from "./CoverAndWishlistButton";

const calculateDiscount = (price, discount) => {
    return (price - price * (discount / 100)).toFixed(2);
};

const GameItem = ({ game }) => {
    const [showImageCover, setShowImageCover] = useState(false);
    const [showWishlistButton, setShowWishlistButton] = useState(false);

    const mouseEnterWishlistButtonHandler = () => {
        setShowWishlistButton(true);
        setShowImageCover(false);
    };

    const gamePriceHandler = (isGameOnSale, gamePrice, gameDiscount) => {
        // game is free
        if (gamePrice === "") return "Free to Play";
        // game is on sale
        if (isGameOnSale) {
            return (
                <>
                    <span className="game-info__price-discount">{`-${gameDiscount}%`}</span>
                    <span className="game-info__price-old">{`$${game.price}`}</span>
                    <span className="game-info__price-new">{`$${calculateDiscount(gamePrice, gameDiscount)}`}</span>
                </>
            );
        }
        // game is NOT on sale
        if (!isGameOnSale) return `$${gamePrice}`;
    };

    return (
        <>
            <a
                href="test"
                target="_blank"
                className="game"
                onMouseEnter={() => setShowWishlistButton(true)}
                onMouseLeave={() => setShowWishlistButton(false)}
            >
                <div
                    className="game-image"
                    onMouseEnter={() => setShowImageCover(true)}
                    onMouseLeave={() => setShowImageCover(false)}
                >
                    <>
                        <img src={game.posterSmall} alt={`${game.name} poster`} />
                        {showImageCover && <ImageCover />}
                    </>
                </div>
                <div className="game-info">
                    <div className="game-info__name">{game.name}</div>
                    <div className="game-info__price">
                        {gamePriceHandler(game.gameOnSale, game.price, game.discount)}
                    </div>
                </div>
            </a>
            {showWishlistButton && <WishlistButton mouseEnter={mouseEnterWishlistButtonHandler} />}
        </>
    );
};

export default GameItem;
