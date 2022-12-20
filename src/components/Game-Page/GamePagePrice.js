import React from "react";

import { IoMdAddCircle, IoMdCheckmarkCircle } from "react-icons/io";
import { AiFillWindows } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import { addGameToWishlist } from "../../store/AccountSlice";

import { gamePriceHandler } from "../../Helpers/HelperFunctions";

const GamePagePrice = ({ game, setShowConfirmGamePurchase }) => {
    const dispatch = useDispatch();
    const isAccountLoggedIn = useSelector((state) => state.account.isAccountLoggedIn);
    const account = useSelector((state) => state.account.account);

    const wishlistButtonHandler = () => {
        if (!isAccountLoggedIn || !account.wishlist) return;

        return account.wishlist.filter((g) => g.name === game.name).length === 0 ? (
            <IoMdAddCircle />
        ) : (
            <IoMdCheckmarkCircle />
        );
    };

    const addGameToWishlistHandler = (game) => {
        if (account.wishlist?.filter((g) => g.name === game.name).length === 1) return;

        dispatch(addGameToWishlist(game));
    };

    const releaseDateHandler = (gameDate) => {
        const gameReleaseDate = new Date(gameDate);
        return `${gameReleaseDate.getDate()}/${gameReleaseDate.getMonth() + 1}/${gameReleaseDate.getFullYear()}`;
    };

    return (
        <div className="game-page__right">
            <div className="game-page__price">
                <div className="game-page__price-logo center">
                    <div className="game-page__price-logo-container center">
                        <img src={game.logo} alt="logo" />
                    </div>
                </div>
                <div className="game-page__price-prices">
                    {gamePriceHandler(game.gameOnSale, game.price, game.discount)}
                </div>
                <div className="game-page__buttons center-column">
                    <button className="game-page__buttons-buy" onClick={() => setShowConfirmGamePurchase(true)}>
                        BUY NOW
                    </button>
                    <button className="game-page__buttons-cart">ADD TO CART</button>
                    <button
                        className="game-page__buttons-wishlist center"
                        onClick={() => addGameToWishlistHandler(game)}
                    >
                        {wishlistButtonHandler()}
                        <p>ADD TO WISHLIST</p>
                    </button>
                </div>
                <div className="game-page__information">
                    <div className="game-page__information-container">
                        <div className="game-page__information-key">Developer</div>
                        <div className="game-page__information-value">{game.developer}</div>
                    </div>
                    <div className="game-page__information-container">
                        <div className="game-page__information-key">Publisher</div>
                        <div className="game-page__information-value">{game.publisher}</div>
                    </div>
                    <div className="game-page__information-container">
                        <div className="game-page__information-key">Release Date</div>
                        <div className="game-page__information-value">{releaseDateHandler(game.releaseDate)}</div>
                    </div>
                    <div className="game-page__information-container">
                        <div className="game-page__information-key">Platform</div>
                        <div className="game-page__information-value">
                            <AiFillWindows />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GamePagePrice;
