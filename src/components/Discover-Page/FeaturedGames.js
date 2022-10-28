import React, { useEffect, useState, useMemo } from "react";

import { useNavigate } from "react-router-dom";
import { IoMdAddCircle, IoMdCheckmarkCircle } from "react-icons/io";

import { DUMMY_CAROUSEL_GAMES } from "../../Helpers/DummyGames";

import { useDispatch, useSelector } from "react-redux";
import { addGameToWishlist, removeGameFromWishlist } from "../../store/AccountSlice";

//TODO add links to the games ergo fix clickOnFeaturedListItemHandler
const FeaturedGames = () => {
    const dispatch = useDispatch();
    const isAccountLoggedIn = useSelector((state) => state.account.isAccountLoggedIn);
    const account = useSelector((state) => state.account.account);
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

    const wishlistButtonHandler = (game) => {
        if (!isAccountLoggedIn)
            return (
                <button className="center" onClick={() => dispatch(addGameToWishlist(game))}>
                    <IoMdAddCircle /> ADD TO WISHLIST
                </button>
            );

        if (isAccountLoggedIn) {
            return account.wishlist.slice(1).filter((wishlistGame) => wishlistGame.name === game.name).length === 0 ? (
                <button className="center" onClick={() => dispatch(addGameToWishlist(game))}>
                    <IoMdAddCircle /> ADD TO WISHLIST
                </button>
            ) : (
                <button className="center" onClick={() => dispatch(removeGameFromWishlist(game))}>
                    <IoMdCheckmarkCircle /> ADDED TO WISHLIST
                </button>
            );
        }
    };

    const buyButtonTextHandler = (releaseDate) => {
        const gameReleaseDate = new Date(releaseDate);

        if (currentDate.getTime() >= gameReleaseDate.getTime()) return "BUY NOW";
        else return "PRE-PURCHASE";
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
                                    <button onClick={() => console.log("bought the game")}>
                                        {buyButtonTextHandler(game.releaseDate)}
                                    </button>
                                </div>
                                <div className="featured-cover__info-wishlist">{wishlistButtonHandler(game)}</div>
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
