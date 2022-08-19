import React from "react";

import { WishlistButton } from "../UI/CoverAndWishlistButton";

import { DUMMY_CAROUSEL_GAMES } from "../../Helpers/DummyGames";
import { useState } from "react";

//TODO add cover
//TODO fix pricing
const NewToTheStore = () => {
    const [showWishlistButtonIdx, setShowWishlistIdx] = useState("");

    return (
        <div className="new-to-store center-column">
            <div className="new-to-store-top">New To The Store</div>
            <div className="new-to-store-bottom space-between">
                {DUMMY_CAROUSEL_GAMES.slice(0, 5).map((game, i) => (
                    <div
                        key={i}
                        className="new-to-store-item"
                        onMouseEnter={() => setShowWishlistIdx(i)}
                        onMouseLeave={() => setShowWishlistIdx("")}
                    >
                        <div className="new-to-store-item__image">
                            <img src={game.posterSmall} alt={`${game.name} poster`} />
                            {showWishlistButtonIdx === i && <WishlistButton top="-9" right="-15" />}
                        </div>

                        <div className="new-to-store-item__info">
                            <div className="new-to-store-item__info-name">{game.name}</div>
                            <div className="new-to-store-item__info-tag">
                                <span>Now on the Store</span>
                            </div>
                            <div className="new-to-store-item__info-price">${game.price}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewToTheStore;
