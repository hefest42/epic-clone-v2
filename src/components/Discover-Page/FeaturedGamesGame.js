import React, { useMemo } from "react";

import { gameReleaseDate, buyButtonTextHandler } from "../../Helpers/FeaturedGamesUtils";
import { IoMdAddCircle, IoMdCheckmarkCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addGameToWishlist, removeGameFromWishlist } from "../../store/AccountSlice";

const FeaturedGamesGame = ({ game, index, activeListItem }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isAccountLoggedIn, account } = useSelector((state) => state.account);

    const gameDateRelease = useMemo(() => gameReleaseDate(game.releaseDate), [game.releaseDate]);
    const buyButtonText = useMemo(() => buyButtonTextHandler(game.releaseDate), [game.releaseDate]);

    const wishlistButtonHandler = (game, account) => {
        if (!isAccountLoggedIn)
            return (
                <button className="center" onClick={() => navigate("/log-in")}>
                    <IoMdAddCircle /> ADD TO WISHLIST
                </button>
            );

        if (isAccountLoggedIn && !account.wishlist.some((g) => g.name === game.name)) {
            return (
                <button className="center" onClick={() => dispatch(addGameToWishlist(game))}>
                    <IoMdAddCircle /> ADD TO WISHLIST
                </button>
            );
        }

        if (isAccountLoggedIn && account.wishlist.some((g) => g.name === game.name)) {
            return (
                <button className="center" onClick={() => dispatch(removeGameFromWishlist(game))}>
                    <IoMdCheckmarkCircle /> ADDED TO WISHLIST
                </button>
            );
        }
    };

    const wishlistButton = useMemo(() => wishlistButtonHandler(game, account), [game, account]);

    return (
        <div className={activeListItem === index ? "featured-poster" : "featured-poster featured-hidden"}>
            <img src={`${game.posterBig}`} alt="poster" />
            <div className="featured-cover" onClick={() => console.log("link to the game")}></div>
            <div className="featured-cover__info">
                <div className="featured-cover__info-logo">
                    <img src={`${game.logo}`} alt="logo" />
                </div>
                <div className="featured-cover__info-description">
                    <p>{gameDateRelease}</p>
                    <div>{game.shortDescription}</div>
                </div>
                <div className="featured-cover__info-buttons">
                    <div className="featured-cover__info-buy">
                        <p>{game.price === "0" ? "Free to Play" : `$${game.price}`}</p>
                        <button onClick={() => navigate(`/store/game/${game.name}`, { state: game })}>
                            {buyButtonText}
                        </button>
                    </div>
                    <div className="featured-cover__info-wishlist">{wishlistButton}</div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedGamesGame;
