import React from "react";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import { DUMMY_CAROUSEL_GAMES } from "../../Helpers/DummyGames";

const GameCarousel = ({ title }) => {
    return (
        <div className="carousel center-column">
            <div className="carousel-top space-between">
                <div className="carousel-top__title center">{title}</div>
                <div className="carousel-top__navigation center">
                    <div className="carousel-top__navigation-inactive center">
                        <AiOutlineLeft />
                    </div>
                    <div className="carousel-top__navigation-active center">
                        <AiOutlineRight />
                    </div>
                </div>
            </div>

            <div className="carousel-bottom">
                {DUMMY_CAROUSEL_GAMES.map((game) => (
                    <div className="carousel-item">
                        <div className="carousel-inner">
                            <div className="carousel-item__image">
                                <img src={game.posterSmall} alt="poster" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GameCarousel;
