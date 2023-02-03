import React from "react";

import { useNavigate } from "react-router-dom";

const FeaturedGamesGame = ({ game, index, activeListItem, setActiveListItem }) => {
    const navigate = useNavigate();

    return (
        <div className={activeListItem === index ? "featured-poster" : "featured-poster featured-hidden"}>
            <img src={`${game.posterBig}`} alt="poster" />
            <div className="featured-cover" onClick={() => console.log("link to the game")}></div>
            <div className="featured-cover__info">
                <div className="featured-cover__info-logo">
                    <img src={`${game.logo}`} alt="logo" />
                </div>
                <div className="featured-cover__info-description">
                    <p>releaseDate</p>
                    <div>{game.shortDescription}</div>
                </div>
                <div className="featured-cover__info-buttons">
                    <div className="featured-cover__info-buy">
                        <p>{game.price === "0" ? "Free to Play" : `$${game.price}`}</p>
                        <button onClick={() => navigate(`/store/game/${game.name}`, { state: game })}>
                            {"buy button"}
                        </button>
                    </div>
                    <div className="featured-cover__info-wishlist">wishlist</div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedGamesGame;
