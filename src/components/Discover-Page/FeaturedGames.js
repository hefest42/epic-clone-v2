import React, { useEffect, useState, useMemo } from "react";

import FeaturedGamesGame from "./FeaturedGamesGame";

import { useNavigate } from "react-router-dom";
import { IoMdAddCircle, IoMdCheckmarkCircle } from "react-icons/io";

import { gameReleaseDate } from "../../Helpers/FeaturedGamesUtils";
import { DUMMY_CAROUSEL_GAMES } from "../../Helpers/DummyGames";

import { useDispatch, useSelector } from "react-redux";
import { addGameToWishlist, removeGameFromWishlist } from "../../store/AccountSlice";

//TODO add links to the games ergo fix clickOnFeaturedListItemHandler
const FeaturedGames = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAccountLoggedIn = useSelector((state) => state.account.isAccountLoggedIn);
    const account = useSelector((state) => state.account.account);
    const [activeListItem, setActiveListItem] = useState(0);
    const GAMES = useMemo(() => DUMMY_CAROUSEL_GAMES.slice(0, 6), [DUMMY_CAROUSEL_GAMES]);
    const currentDate = useMemo(() => new Date(), []);

    const clickOnFeaturedListItemHandler = (index, game) => {
        if (index === activeListItem) navigate(`/store/game/${game.name}`, { state: game });
        else setActiveListItem(index);
    };

    const wishlistButtonHandler = (game) => {
        if (!isAccountLoggedIn)
            return (
                <button className="center" onClick={() => navigate("/log-in")}>
                    <IoMdAddCircle /> ADD TO WISHLIST
                </button>
            );

        if (isAccountLoggedIn) {
            return account.wishlist?.filter((wishlistGame) => wishlistGame.name === game.name).length === 0 ? (
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
                    <FeaturedGamesGame
                        key={i}
                        game={game}
                        index={i}
                        activeListItem={activeListItem}
                        setActiveListItem={setActiveListItem}
                    />
                ))}
            </div>

            <div className="featured-list">
                {GAMES.map((game, i) => (
                    <div
                        key={i}
                        className={
                            activeListItem === i ? "featured-item featured-active featured-fill" : "featured-item"
                        }
                        onClick={() => clickOnFeaturedListItemHandler(i, game)}
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
