import React, { useState, useEffect } from "react";

import GameItem from "../UI/GameItem";
import FilterBrowser from "../UI/FilterBrowser";

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
        if (priceFilter === "" && activeFilters.length === 0) {
            setGames(DUMMY_CAROUSEL_GAMES);
            navigate(`/store/browse`);
            return;
        }

        const filteredGames = DUMMY_CAROUSEL_GAMES.filter((game) => {
            if (compareTwoArrays(game.genres, activeFilters) && filterGameByPrice(game)) return game;
        });

        setGames(filteredGames);

        // put these 2 lines in seperate useEffect in case of error
        const searchParams = activeFilters.map((value) => `genre=${value}`).join("&");

        navigate(`/store/browse?${searchParams}${priceFilter === "" ? "" : `-price=${priceFilter}`}`);
    }, [activeFilters, priceFilter]);

    useEffect(() => {
        if (activeFilters.length === 0) {
            const price = location.search?.split("-")[1]?.replaceAll("%20", " ").split("=")[1];

            setPriceFilter(price ? price : "");

            const filters = location.search
                .split("-")[0]
                .split("&")
                .map((item) => item.replace("genre=", ""))
                .map((item) => item.replace("?", ""));

            if (filters[0] === "") return;

            setActiveFilters(filters);
        }
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
                <FilterBrowser
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
