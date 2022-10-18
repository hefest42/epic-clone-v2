import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";

import { DUMMY_CAROUSEL_GAMES } from "../../Helpers/DummyGames";
import { useMemo } from "react";

//TODO add links to the games ergo fix clickOnFeaturedListItemHandler
const FeaturedGames = () => {
    const [activeListItem, setActiveListItem] = useState(0);
    const GAMES = useMemo(() => DUMMY_CAROUSEL_GAMES.slice(0, 6), []);
    const currentDate = new Date();

    const clickOnFeaturedListItemHandler = (index) => {
        if (index === activeListItem) {
            console.log("LINK TO THE GAME");
            return;
        } else setActiveListItem(index);
    };

    const gameReleaseDate = (releaseDate) => {
        const gameReleaseDate = new Date(releaseDate);

        if (currentDate.getTime() >= gameReleaseDate.getTime()) return "Available Now";
        else
            return `Coming ${gameReleaseDate.getDate()}/${
                gameReleaseDate.getMonth() + 1
            }/${gameReleaseDate.getFullYear()}`;
    };

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setActiveListItem((state) => (state === 5 ? 0 : state + 1));
    //     }, 7000);

    //     return () => clearTimeout(timer);
    // }, [activeListItem]);

    return (
        <div className="featured space-between">
            <div className="featured-container">
                {GAMES.map((game, i) => (
                    <div
                        key={game.name}
                        className={activeListItem === i ? "featured-poster" : "featured-poster featured-hidden"}
                    >
                        <img src={`${game.posterBig}`} alt="poster" />
                        <div className="featured-cover" onClick={() => console.log("link to the game")}></div>
                        <div className="featured-cover__info">
                            <div className="featured-cover__info-logo">
                                <img src={`${game.logo}`} alt="logo" />
                            </div>
                            <div className="featured-cover__info-description">
                                <p>{gameReleaseDate(game.releaseDate)}</p>
                                <div>{game.shortDescription}</div>
                            </div>
                            <div className="featured-cover__info-buttons">
                                <div className="featured-cover__info-buy">
                                    <p>{game.price === "0" ? "Free to Play" : `$${game.price}`}</p>
                                    <button onClick={() => console.log("bought the game")}>PRE-PURCHASE</button>
                                </div>
                                <div className="featured-cover__info-wishlist">
                                    <button className="center" onClick={() => console.log("added to wishlist")}>
                                        <IoIosAddCircleOutline /> ADD TO WISHLIST
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="featured-list">
                {GAMES.map((game, i) => (
                    <div
                        key={i}
                        to={"/game"}
                        className={
                            activeListItem === i ? "featured-item featured-active featured-fill" : "featured-item"
                        }
                        onClick={() => clickOnFeaturedListItemHandler(i)}
                    >
                        <div className="featured-item__image">
                            <img src={`${game.posterSmall}`} alt="poster" />
                        </div>
                        <div className="featured-item__text">{game.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedGames;
