import React, { useState } from "react";

import { IoMdAddCircle } from "react-icons/io";

const PromotedGames = ({ games }) => {
    const [showGameCoverIdx, setShowGameCoverIdx] = useState("");
    const [showGameWishlistBtn, setShowWishlistBtn] = useState("");
    const [showAddToWishlistInfo, setShowAddToWishlistInfo] = useState(false);

    return (
        <div className="promoted">
            {games.map((game, i) => (
                <div key={i} className="promoted-inner center-column" data-items={games.length}>
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
                        <div
                            className="promoted-inner__wishlist center-column"
                            onMouseEnter={() => setShowWishlistBtn(i)}
                        >
                            <div
                                className="promoted-inner__wishlist__info"
                                style={{
                                    opacity: `${showAddToWishlistInfo ? "100" : "0"}`,
                                }}
                            >
                                Add to Wishlist
                            </div>

                            <button
                                onClick={() => console.log("wishlist")}
                                onMouseEnter={() => setShowAddToWishlistInfo(true)}
                                onMouseLeave={() => setShowAddToWishlistInfo(false)}
                            >
                                <IoMdAddCircle />
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default PromotedGames;
