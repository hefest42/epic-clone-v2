import React, { useState } from "react";

import { WishlistButton } from "../UI/CoverAndWishlistButton";
import GameItem from "../UI/GameItem";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { IoMdAddCircle } from "react-icons/io";

import { DUMMY_CAROUSEL_GAMES } from "../../Helpers/DummyGames";

const NUMBER_OF_SLIDES_PER_PAGE = 6;

//TODO change which price is being dispalyed based on whether the game is on sale or not
const GameCarousel = ({ title }) => {
    const [carouselItem, setCarouselItem] = useState(0);
    const [pageNumber, setPageNumber] = useState(0);
    const numberOfPages = Math.floor(DUMMY_CAROUSEL_GAMES.length / NUMBER_OF_SLIDES_PER_PAGE);

    const moveCarouselRight = () => {
        if (pageNumber === numberOfPages) return;

        if (pageNumber === numberOfPages - 1) {
            const remainderOfCarouselItems = DUMMY_CAROUSEL_GAMES.length - NUMBER_OF_SLIDES_PER_PAGE * numberOfPages;

            setCarouselItem((state) => state - remainderOfCarouselItems);
            setPageNumber((state) => state + 1);
            return;
        }

        setCarouselItem(carouselItem - NUMBER_OF_SLIDES_PER_PAGE);
        setPageNumber((state) => state + 1);
    };

    const moveCarouselLeft = () => {
        if (pageNumber === 0) return;

        if (pageNumber === numberOfPages) {
            const remainderOfCarouselItems = DUMMY_CAROUSEL_GAMES.length - NUMBER_OF_SLIDES_PER_PAGE * numberOfPages;

            setCarouselItem((state) => state + remainderOfCarouselItems);
            setPageNumber((state) => state - 1);
            return;
        }

        setCarouselItem(carouselItem + NUMBER_OF_SLIDES_PER_PAGE);
        setPageNumber((state) => state - 1);
    };

    return (
        <div className="carousel center-column">
            <div className="carousel-top space-between">
                <div className="carousel-top__title center">{title}</div>
                <div className="carousel-top__navigation center">
                    <button
                        className={
                            pageNumber === 0
                                ? "carousel-top__navigation-inactive center"
                                : "carousel-top__navigation-active center"
                        }
                        onClick={moveCarouselLeft}
                    >
                        <AiOutlineLeft />
                    </button>
                    <button
                        className={
                            numberOfPages === pageNumber
                                ? "carousel-top__navigation-inactive center"
                                : "carousel-top__navigation-active center"
                        }
                        onClick={moveCarouselRight}
                    >
                        <AiOutlineRight />
                    </button>
                </div>
            </div>

            <div className="carousel-bottom">
                {DUMMY_CAROUSEL_GAMES.map((game, i) => (
                    <div
                        key={i}
                        className="carousel-inner"
                        style={{
                            transform: `translateX(${(i + carouselItem) * 100}%)`,
                        }}
                    >
                        <div className="carousel-item">
                            <GameItem game={game} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GameCarousel;
