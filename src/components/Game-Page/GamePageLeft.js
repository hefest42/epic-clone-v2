import React from "react";

const GamePageLeft = ({ game, gameReviews }) => {
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
                                    <div>Recommended</div>
                                    <p>{`"${review.snippet}"`}</p>
                                </div>

                                <a href={review.externalUrl} target="_blank">
                                    READ THE FULLREVIEW
                                </a>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default GamePageLeft;
