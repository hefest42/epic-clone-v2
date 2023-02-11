import React, { lazy, Suspense } from "react";

import { Link } from "react-router-dom";

import LoadingSpinner from "../UI/LoadingSpinner";
const GamePageReviews = lazy(() => import("./GamePageReviews"));

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
                <div className="game-page__info-reviews">
                    <Suspense
                        fallback={["0", "1", "2"].map((_, i) => (
                            <div key={i} className="game-page__info-reviews-loading">
                                <LoadingSpinner />
                            </div>
                        ))}
                    >
                        <GamePageReviews />
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default GamePageLeft;
