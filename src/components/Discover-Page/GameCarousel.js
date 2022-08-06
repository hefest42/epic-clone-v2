import React, { useState } from "react";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import { DUMMY_CAROUSEL_GAMES } from "../../Helpers/DummyGames";

const calculateDiscount = (price, discount) => {
    return (price - price * (discount / 100)).toFixed(2);
};

const GameCarousel = ({ title }) => {
    const [testNumber, setTestNumber] = useState(0);

    const moveCarouselRight = () => {
        setTestNumber(-5);
    };

    const moveCarouselLeft = () => {
        setTestNumber(0);
    };

    return (
        <div className="carousel center-column">
            <div className="carousel-top space-between">
                <div className="carousel-top__title center">{title}</div>
                <div className="carousel-top__navigation center">
                    <div className="carousel-top__navigation-inactive center" onClick={moveCarouselLeft}>
                        <AiOutlineLeft />
                    </div>
                    <div className="carousel-top__navigation-active center" onClick={moveCarouselRight}>
                        <AiOutlineRight />
                    </div>
                </div>
            </div>

            <div className="carousel-bottom">
                {DUMMY_CAROUSEL_GAMES.map((game, i) => (
                    <div
                        key={i}
                        className="carousel-inner"
                        style={{
                            transform: `translateX(${(i + testNumber) * 100}%)`,
                        }}
                    >
                        <div className="carousel-item">
                            <div className="carousel-item__image">
                                <img src={game.posterSmall} alt="poster" />
                            </div>
                            <div className="carousel-item__name">{game.name}</div>
                            <div className="carousel-item__price">
                                <div className="carousel-item__price-discount">{game.discount}%</div>
                                <div className="carousel-item__price-original">${game.price}</div>
                                <div className="carousel-item__price-discounted">
                                    ${calculateDiscount(game.price, +game.discount)}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GameCarousel;
