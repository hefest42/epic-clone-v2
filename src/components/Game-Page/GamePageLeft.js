import React from "react";

import { FiExternalLink } from "react-icons/fi";

const GamePageLeft = ({ game, gameReviews }) => {
    const gameScoreHandler = (type, score) => {
        if (type === "No Verdict") return `No Verdict`;

        if (type === "0 to 100, whole numbers") return `${score}/100`;

        if (type === "0 to 10 incl decimals" || type === "0 to 10, whole numbers") return `${score / 10} / 10`;

        if (type === "0 to 5 stars, incl half stars") return `${score / 20} / 5`;
    };

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
                    <div className="center">
                        <p>Action</p>
                        <p>Action-Adventure</p>
                        <p>Action-Adventure</p>
                    </div>
                </div>

                {gameReviews.length > 0 && (
                    <div className="game-page__info-reviews">
                        {gameReviews.map((review, i) => (
                            <div key={i} className="game-page__info-reviews-review">
                                <div className="game-page__info-reviews-author">
                                    <div>{review.Outlet.name}</div>
                                    {review.Authors[0] ? (
                                        <div>{`by ${review.Authors[0].name}`}</div>
                                    ) : (
                                        <div className="game-page__info-reviews-author-empty"></div>
                                    )}
                                </div>
                                <div className="game-page__info-reviews-score">
                                    <div>{gameScoreHandler(review.ScoreFormat.name, review.score)}</div>
                                    <p>{`"${review.snippet.split(".")[0]}."`}</p>
                                </div>

                                <div className="game-page__info-reviews-link center">
                                    <a href={review.externalUrl} target="_blank">
                                        READ THE FULLREVIEW
                                    </a>
                                    <FiExternalLink />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default GamePageLeft;
