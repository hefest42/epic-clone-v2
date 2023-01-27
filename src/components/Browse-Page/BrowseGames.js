import React, { useState, useEffect } from "react";

import GameItem from "../UI/GameItem";
import BrowseFilters from "./BrowseFilters";

import { useNavigate, useLocation } from "react-router-dom";

import { calculateDiscount, compareTwoArrays } from "../../Helpers/HelperFunctions";

import { DUMMY_CAROUSEL_GAMES } from "../../Helpers/DummyGames";

const BrowseGames = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [games, setGames] = useState(DUMMY_CAROUSEL_GAMES);
    const [activeFilters, setActiveFilters] = useState([]);
    const [priceFilter, setPriceFilter] = useState("");

    const resetActiveFilters = () => {
        setActiveFilters([]);
        setPriceFilter("");
    };

    const addGenreToActiveFilters = (genre) => {
        if (activeFilters.includes(genre)) setActiveFilters((state) => state.filter((gnr) => gnr !== genre));
        else setActiveFilters((state) => [...state, genre]);
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
        const searchParams = activeFilters.map((value) => `genre=${value}`).join("&");

        navigate(`/store/browse?${searchParams}${priceFilter === "" ? "" : `-price=${priceFilter}`}`);
    }, [activeFilters, priceFilter]);

    useEffect(() => {
        // checks for both genres & price in the url
        if (location.search.includes("genre=") && location.search.includes("-price=")) {
            const [genres, price] = location.search.split("-");

            const genreFilters = genres
                .split("&")
                .map((item) => item.replace("genre=", ""))
                .map((item) => item.replace("?", ""))
                .map((item) => item.replace("%20", " "));

            const priceFilters = price.replaceAll("%20", " ").split("=")[1];

            console.log(genreFilters, priceFilters);

            const gamesFilteredByGenreAndByPrice = DUMMY_CAROUSEL_GAMES.filter((game) => {
                if (compareTwoArrays(game.genres, activeFilters) && filterGameByPrice(game)) return game;
            });

            setGames(gamesFilteredByGenreAndByPrice);

            if (activeFilters.length === 0 && priceFilter === "") {
                setActiveFilters(genreFilters);
                setPriceFilter(priceFilters);
            }

            return;
        }

        // just price
        if (!location.search.includes("genre") && location.search.includes("-price=")) {
            const price = location.search.split("-")[1].replaceAll("%20", " ").split("=")[1];

            const gamesFilteredByPrice = DUMMY_CAROUSEL_GAMES.filter((game) => filterGameByPrice(game));
            setGames(gamesFilteredByPrice);

            if (priceFilter === "") setPriceFilter(price);

            return;
        }

        // just genres
        if (location.search.includes("genre=") && !location.search.includes("-price=")) {
            const genreFilters = location.search
                .split("-")[0]
                .split("&")
                .map((item) => item.replace("genre=", ""))
                .map((item) => item.replace("?", ""))
                .map((item) => item.replace("%20", " "));

            const gamesFilteredByGenre = DUMMY_CAROUSEL_GAMES.filter((game) =>
                compareTwoArrays(game.genres, genreFilters)
            );

            setGames(gamesFilteredByGenre);

            if (activeFilters.length === 0) setActiveFilters(genreFilters);

            return;
        }

        // neither
        if (location.search === "") setGames(DUMMY_CAROUSEL_GAMES);
    }, [location.search]);

    return (
        <div className="browse">
            <div className="browse-left">
                {games.map((game, i) => (
                    <div key={i} className="browse-game">
                        <GameItem game={game} />
                    </div>
                ))}
            </div>
            <div className="browse-right">
                <BrowseFilters
                    games={games}
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

export default BrowseGames;
