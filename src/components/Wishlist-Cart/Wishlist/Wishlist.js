import React, { useEffect, useState } from "react";

import WishlistItem from "./WishlistItem";
import WishlistFilters from "./WishlistFilters";
import useComponentVisible from "../../../Helpers/useComponentVisible";

import { AiOutlineDown } from "react-icons/ai";
import { compareTwoArrays, calculateDiscount } from "../../../Helpers/HelperFunctions";

import { useSelector } from "react-redux";

const SORT_BY_ITEMS = ["Date Added", "Alphabetical", "Price: Low to High", "Price: High to Low"];

//TODO fix media query
//TODO for some reason it lists uncharted price higher than spider-man price (49.99 > 59.99)????
const Wishlist = () => {
    const account = useSelector((state) => state.account.account);
    const [sortedWishlistGames, setSortedWishlistGames] = useState([]);
    const [sortByText, setSortByText] = useState("Date Added");
    const [activeFilters, setActiveFilters] = useState([]);
    const [priceFilter, setPriceFilter] = useState("");
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

    const addGenreToActiveFilters = (genre) => {
        if (activeFilters.includes(genre)) setActiveFilters((state) => state.filter((gnr) => gnr !== genre));
        else setActiveFilters((state) => [genre, ...state]);
    };

    const resetActiveFilters = () => {
        setActiveFilters([]);
        setPriceFilter("");
    };

    const sortWishlistItems = (type) => {
        setSortByText(type);

        const wishlistedGames = [...account.wishlist];

        console.log(
            wishlistedGames.sort(
                (a, b) => calculateDiscount(b.price, b.discount) - calculateDiscount(a.price, a.discount)
            )
        );

        switch (type) {
            case "Alphabetical":
                const gamesSortedAlphabetically = wishlistedGames.sort((a, b) => a.name.localeCompare(b.name));
                setSortedWishlistGames(gamesSortedAlphabetically);
                break;

            case "Price: Low to High":
                const gamesSortedByPriceLowToHigh = wishlistedGames.sort(
                    (a, b) =>
                        calculateDiscount(a.price, a.discount, a.gameOnSale) -
                        calculateDiscount(b.price, b.discount, b.gameOnSale)
                );
                setSortedWishlistGames(gamesSortedByPriceLowToHigh);

                break;

            case "Price: High to Low":
                const gamesSortedByPriceHighToLow = wishlistedGames.sort(
                    (a, b) => calculateDiscount(b.price, b.discount) - calculateDiscount(a.price, a.discount)
                );
                setSortedWishlistGames(gamesSortedByPriceHighToLow);
                break;

            default:
                setSortedWishlistGames([]);
                break;
        }
    };

    return (
        <div className="wishlist">
            <div className="wishlist-left">
                <div className="wishlist-title">Wishlist</div>

                <div className="wishlist-container">
                    <div className="wishlist-sort">
                        <div className="wishlist-sort__item">
                            Sort by:
                            <button
                                className="wishlist-sort__item-button center"
                                onClick={() => setIsComponentVisible((state) => !state)}
                                ref={ref}
                            >
                                {sortByText}
                                <AiOutlineDown
                                    style={{
                                        transform: `rotate(${isComponentVisible ? "-180deg" : "0"})`,
                                    }}
                                />
                            </button>
                        </div>

                        {isComponentVisible && (
                            <ul className="wishlist-dropdown">
                                {SORT_BY_ITEMS.map((item) => (
                                    <li key={item} onClick={() => sortWishlistItems(item)}>
                                        <button
                                            className={
                                                item === sortByText
                                                    ? "wishlist-dropdown__item wishlist-dropdown__item-active"
                                                    : "wishlist-dropdown__item"
                                            }
                                        >
                                            {item}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div>
                        {sortedWishlistGames.length === 0
                            ? account.wishlist.map((game) => <WishlistItem key={game.name} game={game} />)
                            : sortedWishlistGames.map((game) => <WishlistItem key={game.name} game={game} />)}
                    </div>
                </div>
            </div>

            <div className="wishlist-right">
                <WishlistFilters
                    wishlistGenres={account.wishlist}
                    addGenreToActiveFilters={addGenreToActiveFilters}
                    activeFilters={activeFilters}
                    resetActiveFilters={resetActiveFilters}
                    priceFilter={priceFilter}
                    setPriceFilter={setPriceFilter}
                />
            </div>
        </div>
    );
};

export default Wishlist;
