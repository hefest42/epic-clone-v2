import React, { useState } from "react";

import { Link } from "react-router-dom";

import { WishlistButton, ImageCover } from "./CoverAndWishlistButton";

import { gamePriceHandler } from "../../Helpers/HelperFunctions";

const GameItem = ({ game }) => {
    const [showImageCover, setShowImageCover] = useState(false);
    const [showWishlistButton, setShowWishlistButton] = useState(false);

    const mouseEnterWishlistButtonHandler = () => {
        setShowWishlistButton(true);
        setShowImageCover(false);
    };

    return (
        <>
            <Link
                to={`/store/game/${game.name}`}
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
            </Link>
            {showWishlistButton && <WishlistButton game={game} mouseEnter={mouseEnterWishlistButtonHandler} />}
        </>
    );
};

export default GameItem;
