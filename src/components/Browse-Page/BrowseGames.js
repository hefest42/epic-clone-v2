import React, { useState, useEffect } from "react";

import GameItem from "../UI/GameItem";
import FilterBrowser from "../UI/FilterBrowser";

import { DUMMY_CAROUSEL_GAMES } from "../../Helpers/DummyGames";

const compareTwoArrays = (arr1, arr2) => {
    return arr2.every((value) => arr1.includes(value));
};

const BrowseGames = () => {
    const [games, setGames] = useState(DUMMY_CAROUSEL_GAMES);
    const [activeFilters, setActiveFilters] = useState([]);
    const [priceFilter, setPriceFilter] = useState("");

    const resetActiveFilters = () => {
        setActiveFilters([]);
        setPriceFilter("");
    };

    const addGenreToActiveFilters = (genre) => {
        if (activeFilters.includes(genre)) setActiveFilters((state) => state.filter((gnr) => gnr !== genre));
        else setActiveFilters((state) => [genre, ...state]);
    };

    useEffect(() => {
        if (activeFilters.length === 0) setGames(DUMMY_CAROUSEL_GAMES);

        const test = DUMMY_CAROUSEL_GAMES.filter((game) => compareTwoArrays(game.genres, activeFilters));

        console.log(test);

        setGames(test);
    }, [activeFilters]);

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
                    games={DUMMY_CAROUSEL_GAMES}
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
