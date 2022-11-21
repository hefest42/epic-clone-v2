import React from "react";

const GamePageLeft = ({ game }) => {
    return (
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

            <div className="game-page__info-reviews">
                <div className="game-page__info-reviews-review">
                    <div className="game-page__info-reviews-author">
                        <div>Eurogamer</div>
                        <div>by Martin Robinson</div>
                    </div>
                    <div className="game-page__info-reviews-score">
                        <div>Recommended</div>
                        <p>{`"A standalone expansion for 2018's excellent original, with enchanced action and an irresistible new lead."`}</p>
                    </div>

                    <div>READ THE FULLREVIEW</div>
                </div>
                <div className="game-page__info-reviews-review"></div>
                <div className="game-page__info-reviews-review"></div>
            </div>
        </div>
    );
};

export default GamePageLeft;
