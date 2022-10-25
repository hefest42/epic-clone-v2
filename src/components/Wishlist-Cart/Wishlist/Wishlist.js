import React, { useEffect, useState } from "react";

import WishlistItem from "./WishlistItem";
import FilterBrowser from "../../UI/FilterBrowser";
import useComponentVisible from "../../../Helpers/useComponentVisible";

import { AiOutlineDown } from "react-icons/ai";
import { compareTwoArrays, calculateDiscount } from "../../../Helpers/HelperFunctions";

import { useSelector } from "react-redux";

const SORT_BY_ITEMS = ["Date Added", "Alphabetical", "Price: Low to High", "Price: High to Low"];

//TODO fix media query

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

    useEffect(() => {
        setWishlistedGames(account.wishlist.slice(1));
    }, [account.wishlist]);

    useEffect(() => {
        if (priceFilter === "" && activeFilters.length === 0) {
            setWishlistedGames(account.wishlist.slice(1));
            return;
        }

        const filteredGames = account.wishlist.slice(1).filter((game) => {
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
                                    <li key={item} onClick={() => setSortByText(item)}>
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

            <div className="wishlist-right">
                <FilterBrowser
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
