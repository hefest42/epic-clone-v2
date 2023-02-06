import React, { useEffect, useState } from "react";

import WishlistItem from "./WishlistItem";
import WishlistFilters from "./WishlistFilters";
import WishlistSortDropdownMenu from "./WishlistSortDropdownMenu";

import { useSelector } from "react-redux";
import { compareTwoArrays } from "../../../Helpers/HelperFunctions";

//TODO not happy with solution, try again tomorrow
//TODO try to seperate genre from price filtering
const Wishlist = () => {
    const account = useSelector((state) => state.account.account);
    const [sortedWishlistGames, setSortedWishlistGames] = useState([]);
    const [activeFilters, setActiveFilters] = useState([]);
    const [sortByText, setSortByText] = useState("Date Added");
    const [priceFilter, setPriceFilter] = useState("");

    const addGenreToActiveFilters = (typeOfFilter, filter) => {
        let genres = [...activeFilters];

        if (activeFilters.includes(filter)) {
            setActiveFilters((state) => state.filter((gnr) => gnr !== filter));
            genres = genres.filter((gnr) => gnr !== filter);
        } else {
            setActiveFilters((state) => [filter, ...state]);
            genres = [...activeFilters, filter];
        }

        switch (typeOfFilter) {
            case "genre":
                const wishlistedGamesSortedByGenre = account.wishlist.filter((game) =>
                    compareTwoArrays(game.genres, genres)
                );
                setSortedWishlistGames(wishlistedGamesSortedByGenre);
                break;

            case "price":
                const wishlistedGamesSortedByPrice = account.wishlist.filter((game) => +game.price < +priceFilter);
                setSortedWishlistGames(wishlistedGamesSortedByPrice);
                break;
        }

        console.log(genres);
    };

    const resetActiveFilters = () => {
        setActiveFilters([]);
        setPriceFilter("");
    };

    useEffect(() => {
        setSortedWishlistGames(account.wishlist);
    }, []);

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
                    wishlistGenres={sortedWishlistGames}
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
