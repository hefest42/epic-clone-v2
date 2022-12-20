import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { WishlistButton } from "../UI/CoverAndWishlistButton";
import { DUMMY_CAROUSEL_GAMES } from "../../Helpers/DummyGames";
import { gamePriceHandler } from "../../Helpers/HelperFunctions";

const GAMES = DUMMY_CAROUSEL_GAMES.slice(0, 5);
const DUMMY_TITLES = ["New Releases", "Top Selling", "Coming Soon"];

//TODO make the container a link to the game page
//TODO add pricing depending whether the game is on sale/free
const NewTopComingGames = () => {
    const navigate = useNavigate();
    const [columnWishlistButton, setColumnWishlistButton] = useState("");
    const [showWishlistButtonInx, setShowWishlistButtonIdx] = useState("");

    const clickHandler = (e, game) => {
        e.stopPropagation();

        navigate(`/store/game/${game.name}`);

        console.log("test");
    };

    return (
        <div className="column">
            {DUMMY_TITLES.map((title, i) => (
                <div
                    key={i}
                    className="column-container"
                    data-number={i}
                    onMouseEnter={() => setColumnWishlistButton(title)}
                    onMouseLeave={() => setColumnWishlistButton("")}
                >
                    <div className="column-inner">
                        <div className="column-inner__title space-between">
                            <h3>{title}</h3>
                            <button>VIEW MORE</button>
                        </div>
                        <div className="column-inner__games">
                            {GAMES.map((game, i) => (
                                <div
                                    key={i}
                                    className="column-item"
                                    onClick={(e) => clickHandler(e, game)}
                                    onMouseEnter={() => setShowWishlistButtonIdx(i)}
                                    onMouseLeave={() => setShowWishlistButtonIdx("")}
                                >
                                    <div className="column-item__image">
                                        <img src={game.posterSmall} alt="" />
                                        {showWishlistButtonInx === i && columnWishlistButton === title && (
                                            <WishlistButton game={game} mouseEnter={() => {}} />
                                        )}
                                    </div>
                                    <div className="column-item__info">
                                        <div>{game.name}</div>
                                        <div className="game-info__price">
                                            {gamePriceHandler(game.gameOnSale, game.price, game.discount)}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NewTopComingGames;
