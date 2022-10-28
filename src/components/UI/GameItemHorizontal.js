import React from "react";
import { useState } from "react";

import { WishlistButton, ImageCover } from "../UI/CoverAndWishlistButton";
import { gamePriceHandler } from "../../Helpers/HelperFunctions";

const GameItemHorizontal = ({ game }) => {
    const [showImageCover, setShowImageCover] = useState(false);
    const [showWishlistButton, setShowWishlistButton] = useState(false);

    const mouseEnterWishlistButtonHandler = () => {
        setShowWishlistButton(true);
        setShowImageCover(false);
    };

    return (
        <div
            className="game-horizontal center-column"
            onMouseEnter={() => setShowWishlistButton(true)}
            onMouseLeave={() => setShowWishlistButton(false)}
        >
            <div
                className="game-horizontal__image"
                onMouseEnter={() => setShowImageCover(true)}
                onMouseLeave={() => setShowImageCover(false)}
            >
                <img src={game.posterBig} alt={`${game.name} poster`} />
                {showImageCover && <ImageCover />}
            </div>
            <div className="game-horizontal__info">
                <div className="game-horizontal__info-name">{game.name}</div>
                <div className="game-horizontal__info-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id temporibus mollitia nobis possimus
                    consequatur repellendus voluptas minima est tempore assumenda?
                </div>
                <div className="game-horizontal__info-price">
                    {game.price === "0"
                        ? "Free to Play"
                        : gamePriceHandler(game.gamegameOnSale, game.price, game.discount)}
                </div>
            </div>
            {showWishlistButton && <WishlistButton game={game} mouseEnter={mouseEnterWishlistButtonHandler} />}
        </div>
    );
};

export default GameItemHorizontal;
