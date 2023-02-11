import React, { useEffect, useState, Suspense } from "react";

import { useLocation } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";

const GamePageReviews = () => {
    const location = useLocation();
    const [gameReviews, setGameReviews] = useState([]);

    const gameScoreHandler = (type, score) => {
        if (type === "No Verdict") return `No Verdict`;

        if (type === "0 to 100, whole numbers") return `${score} / 100`;

        if (type === "0 to 20, whole numbers") return `${score / 5} / 20`;

        if (type === "0 to 10 incl decimals" || type === "0 to 10, whole numbers") return `${score / 10} / 10`;

        if (type === "0 to 5 stars, incl half stars" || type === "0 to 5, incl decimals") return `${score / 20} / 5`;
    };

    useEffect(() => {
        const { name } = location.state;

        const fetchGameReviews = async () => {
            try {
                const response = await fetch(`https://opencritic-api.p.rapidapi.com/game/search?criteria=${name}`, {
                    method: "GET",
                    headers: {
                        "X-RapidAPI-Key": "a3d147fab7msh00956640f11a890p1c1f32jsn7faec2c28528",
                        "X-RapidAPI-Host": "opencritic-api.p.rapidapi.com",
                    },
                });

                const data = await response.json();

                const gameID = data[0].id;

                // no longer working???
                const reviewResponse = await fetch(`https://opencritic-api.p.rapidapi.com/review/game/${gameID}`, {
                    method: "GET",
                    headers: {
                        "X-RapidAPI-Key": "a3d147fab7msh00956640f11a890p1c1f32jsn7faec2c28528",
                        "X-RapidAPI-Host": "opencritic-api.p.rapidapi.com",
                    },
                });

                const reviewData = await reviewResponse.json();

                setGameReviews(reviewData.slice(0, 3));
            } catch (error) {
                console.log(error);
            }
        };

        fetchGameReviews();
    }, [location.pathname]);

    return (
        <>
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
                        <a href={review.externalUrl} target="_blank" rel="noreferrer">
                            READ THE FULL REVIEW
                        </a>
                        <FiExternalLink />
                    </div>
                </div>
            ))}
        </>
    );
};

export default GamePageReviews;
