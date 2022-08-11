import React, { useState } from "react";

import { IoMdAddCircle } from "react-icons/io";

import { DUMMY_CAROUSEL_GAMES } from "../../Helpers/DummyGames";

const PromotedGames = () => {
    const GAMES = DUMMY_CAROUSEL_GAMES.slice(0, 3);
    const [showGameCoverIdx, setShowGameCoverIdx] = useState("");
    const [showGameWishlistBtn, setShowWishlistBtn] = useState("");

    return (
        <div className="promoted">
            {GAMES.map((game, i) => (
                <div key={i} className="promoted-inner center-column" data-items={GAMES.length}>
                    <div
                        className="promoted-inner__image"
                        onMouseEnter={() => {
                            setShowWishlistBtn(i);
                            setShowGameCoverIdx(i);
                        }}
                        onMouseLeave={() => {
                            setShowWishlistBtn("");
                            setShowGameCoverIdx("");
                        }}
                        onClick={() => console.log("game link")}
                    >
                        <img src={game.posterBig} alt={`${game.name} poster`} />
                        {showGameCoverIdx === i && <div className="promoted-inner__cover"></div>}
                    </div>
                    <div className="promoted-inner__info">
                        <h2>{game.name}</h2>
                        <div>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt totam impedit libero!
                            Sapiente voluptate ut minus, veritatis iusto unde qui?
                        </div>
                        <h2>${game.price}</h2>
                    </div>
                    {showGameWishlistBtn === i && (
                        <button
                            className="promoted-inner__wishlist"
                            onMouseEnter={() => setShowWishlistBtn(i)}
                            onClick={() => console.log("wishlist")}
                        >
                            <IoMdAddCircle />
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
};

export default PromotedGames;
