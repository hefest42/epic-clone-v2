import React, { useState } from "react";

import { WishlistButton } from "./CoverAndWishlistButton";

const GameItem = ({ game }) => {
    const [showCover, setShowCover] = useState(false);
    const [showWishlistButton, setShowWishlistButton] = useState(false);

    const mouseEnterWishlistButtonHandler = () => {
        setShowWishlistButton(true);
        setShowCover(false);
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
                    onMouseEnter={() => setShowCover(true)}
                    onMouseLeave={() => setShowCover(false)}
                >
                    <>
                        <img src={game.posterSmall} alt={`${game.name} poster`} />
                        {showCover && <div className="game-cover"></div>}
                    </>
                </div>
                <div className="game-info">
                    <div className="game-info__name">{game.name}</div>
                    <div className="game-info__price">${game.price}</div>
                </div>
            </a>
            {showWishlistButton && <WishlistButton mouseEnter={mouseEnterWishlistButtonHandler} />}
        </>
    );
};

export default GameItem;
