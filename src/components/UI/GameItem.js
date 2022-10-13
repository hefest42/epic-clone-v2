import React, { useState } from "react";

import { WishlistButton, ImageCover } from "./CoverAndWishlistButton";

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
                    <span>14</span>
                    <span>15</span>
                    <span>17</span>
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
