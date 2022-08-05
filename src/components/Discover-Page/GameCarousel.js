import React from "react";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

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

            <div className="carousel-bottom"></div>
        </div>
    );
};

export default GameCarousel;
