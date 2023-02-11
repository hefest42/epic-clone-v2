import React from "react";

import GamePageReviews from "./GamePageReviews";

import { Link } from "react-router-dom";

const GamePageLeft = ({ game }) => {
    return (
        <div className="game-page__left">
            <div className="game-page__info">
                <div className="game-page__info-poster">
                    <img src={game.posterBig} alt="" />
                </div>

                <div className="game-page__info-description">
                    <p>{game.shortDescription}</p>
                </div>

                <div className="game-page__info-genres">
                    <div className="game-page__info-genre">Genres</div>
                    {game.genres && (
                        <div className="center">
                            {game.genres.map((genre) => (
                                <Link to={`/store/browse?genre=${genre}`} key={genre}>
                                    {genre}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
                <GamePageReviews />
            </div>
        </div>
    );
};

export default GamePageLeft;
