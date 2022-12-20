import React, { useState } from "react";

import { Link } from "react-router-dom";

import { WishlistButton, ImageCover } from "../UI/CoverAndWishlistButton";
import { gamePriceHandler } from "../../Helpers/HelperFunctions";

const GameItemHorizontal = ({ game, clickHandler }) => {
    const [showImageCover, setShowImageCover] = useState(false);
    const [showWishlistButton, setShowWishlistButton] = useState(false);

    const mouseEnterWishlistButtonHandler = () => {
        setShowWishlistButton(true);
        setShowImageCover(false);
    };

    return (
        <div
            to={`/store/game/${game.name}`}
            className="game-horizontal center-column"
            onClick={(e) => clickHandler(e, game)}
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
