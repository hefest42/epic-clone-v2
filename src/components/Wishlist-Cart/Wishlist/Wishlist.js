import React, { useEffect, useState } from "react";

import WishlistItem from "./WishlistItem";
import WishlistFilters from "./WishlistFilters";
import WishlistSortDropdownMenu from "./WishlistSortDropdownMenu";

import { useSelector } from "react-redux";
import { compareTwoArrays, calculateDiscount } from "../../../Helpers/HelperFunctions";

//TODO not happy with solution, try again tomorrow
//TODO try to seperate genre from price filtering
const Wishlist = () => {
    const account = useSelector((state) => state.account.account);
    const [sortedWishlistGames, setSortedWishlistGames] = useState([]);
    const [activeFilters, setActiveFilters] = useState([]);
    const [priceFilter, setPriceFilter] = useState("");
    const [sortByText, setSortByText] = useState("Date Added");

    const addGenreToActiveFilters = (filter) => {
        if (activeFilters.includes(filter)) setActiveFilters((state) => state.filter((gnr) => gnr !== filter));
        else setActiveFilters((state) => [filter, ...state]);
    };

    const resetActiveFilters = () => {
        setActiveFilters([]);
        setPriceFilter("");
    };

    useEffect(() => {
        setSortedWishlistGames(account.wishlist);
    }, []);

    useEffect(() => {
        if (activeFilters.length === 0 && priceFilter === "") setSortedWishlistGames(account.wishlist);

        const priceNumber = priceFilter === "" ? 1000000 : priceFilter.replace(/^\D+/g, "");

        const filteredGames = account.wishlist.filter((game) => {
            if (
                compareTwoArrays(game.genres, activeFilters) &&
                calculateDiscount(game.price, game.discount, game.gameOnSale) <= +priceNumber
            )
                return game;
        });

        setSortedWishlistGames(filteredGames);
    }, [activeFilters, priceFilter]);

    return (
        <div className="wishlist">
            <div className="wishlist-left">
                <div className="wishlist-title">Wishlist</div>

                <div className="wishlist-container">
                    <WishlistSortDropdownMenu
                        account={account}
                        sortByText={sortByText}
                        setSortByText={setSortByText}
                        setSortedWishlistGames={setSortedWishlistGames}
                    />

                    {sortedWishlistGames.map((game) => (
                        <WishlistItem key={game.name} game={game} />
                    ))}
                </div>
            </div>

            <div className="wishlist-right">
                <WishlistFilters
                    account={account}
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
