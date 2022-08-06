import React, { useState } from "react";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { IoMdAddCircle } from "react-icons/io";

import { DUMMY_CAROUSEL_GAMES } from "../../Helpers/DummyGames";

const calculateDiscount = (price, discount) => {
    return (price - price * (discount / 100)).toFixed(2);
};

const NUMBER_OF_SLIDES_PER_PAGE = 6;

//TODO change which price is being dispalyed based on whether the game is on sale or not
//TODO make the carousel item a link to the game page
//TODO change css to make it scale with page size
const GameCarousel = ({ title }) => {
    const [carouselItem, setCarouselItem] = useState(0);
    const [pageNumber, setPageNumber] = useState(0);
    const [imageCoverIndex, setImageCoverIndex] = useState("");
    const [wishlistButtonIndex, setWishlistButtonIndex] = useState("");
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
                    <div
                        className={
                            pageNumber === 0
                                ? "carousel-top__navigation-inactive center"
                                : "carousel-top__navigation-active center"
                        }
                        onClick={moveCarouselLeft}
                    >
                        <AiOutlineLeft />
                    </div>
                    <div
                        className={
                            numberOfPages === pageNumber
                                ? "carousel-top__navigation-inactive center"
                                : "carousel-top__navigation-active center"
                        }
                        onClick={moveCarouselRight}
                    >
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
                            transform: `translateX(${(i + carouselItem) * 100}%)`,
                        }}
                        onMouseEnter={() => setWishlistButtonIndex(i)}
                        onMouseLeave={() => setWishlistButtonIndex("")}
                    >
                        <div className="carousel-item">
                            <div
                                className="carousel-item__image"
                                onMouseEnter={() => setImageCoverIndex(i)}
                                onMouseLeave={() => setImageCoverIndex("")}
                            >
                                <img src={game.posterSmall} alt="poster" />
                                {imageCoverIndex === i && <div className="carousel-item__cover"></div>}
                            </div>
                            <div className="carousel-item__name">
                                {game.name}
                                {i}
                            </div>
                            <div className="carousel-item__price">
                                <div className="carousel-item__price-discount">-{game.discount}%</div>
                                <div className="carousel-item__price-original">${game.price}</div>
                                <div className="carousel-item__price-discounted">
                                    ${calculateDiscount(game.price, +game.discount)}
                                </div>
                            </div>
                        </div>

                        {wishlistButtonIndex === i && (
                            <div className="carousel-item__wishlist">
                                <IoMdAddCircle />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GameCarousel;
