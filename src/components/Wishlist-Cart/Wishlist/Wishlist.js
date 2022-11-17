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
    const [wishlistedGames, setWishlistedGames] = useState([]);
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

    const filterGameByPrice = (game) => {
        if (priceFilter === "") return true;

        const priceRange = priceFilter.replace(/[^0-9.]/g, "");
        const gamePrice = game.gameOnSale ? calculateDiscount(game.price, game.discount) : game.price;

        if (priceFilter === "Free") {
            if (+gamePrice === 0) return true;
            else return false;
        }

        if (priceFilter === "$14.99 and above") {
            if (+gamePrice >= 14.99) return true;
            else return false;
        }

        if (+priceRange >= +gamePrice) return true;
        else return false;
    };

    const sortWishlistItems = (type) => {
        setSortByText(type);
        const wishlist = activeFilters.length > 0 && priceFilter !== "" ? [...wishlistedGames] : [...account.wishlist];

        console.log([...account.wishlist].sort((a, b) => a.price + b.price));

        switch (type) {
            case "Alphabetical":
                const gamesSortedAlphabetically = wishlist.sort((a, b) => a.name.localeCompare(b.name));
                setWishlistedGames(gamesSortedAlphabetically);
                break;

            case "Price: Low to High":
                const gamesSortedByPriceLowToHigh = wishlist.sort((a, b) => +a.price - +b.price);
                setWishlistedGames(gamesSortedByPriceLowToHigh);

                break;

            case "Price: High to Low":
                const gamesSortedByPriceHighToLow = wishlist.sort((a, b) => +b.price + +a.price);
                setWishlistedGames(gamesSortedByPriceHighToLow);
                break;

            default:
                setWishlistedGames(account.wishlist);
                break;
        }
    };

    useEffect(() => {
        setWishlistedGames(account.wishlist);
    }, [account.wishlist]);

    useEffect(() => {
        if (priceFilter === "" && activeFilters.length === 0) {
            setWishlistedGames(account.wishlist);
            return;
        }

        const filteredGames = account.wishlist.filter((game) => {
            if (compareTwoArrays(game.genres, activeFilters) && filterGameByPrice(game)) return game;
        });

        setWishlistedGames(filteredGames);
    }, [activeFilters, priceFilter]);

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
                        {wishlistedGames.map((game) => (
                            <WishlistItem key={game.name} game={game} />
                        ))}
                    </div>
                </div>
            </div>

            {/* different filter for wishlist games */}
            <div className="wishlist-right">
                <WishlistFilters
                    games={wishlistedGames}
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
