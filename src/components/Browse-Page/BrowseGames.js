import React, { useState, useEffect } from "react";

import GameItem from "../UI/GameItem";
import BrowseFilters from "./BrowseFilters";

import { useNavigate, useLocation, useQueryParams, useSearchParams } from "react-router-dom";

import { calculateDiscount, compareTwoArrays } from "../../Helpers/HelperFunctions";

import { DUMMY_CAROUSEL_GAMES } from "../../Helpers/DummyGames";

const BrowseGames = () => {
    const [params, setSearchParams] = useSearchParams();
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
        setSearchParams({ genres: activeFilters, price: priceFilter });

        const gamesFilteredByGenreAndByPrice = DUMMY_CAROUSEL_GAMES.filter((game) => {
            if (compareTwoArrays(game.genres, activeFilters) && filterGameByPrice(game)) return game;
        });

        setGames(gamesFilteredByGenreAndByPrice);
    }, [activeFilters, priceFilter]);

    useEffect(() => {
        const genreParams = params.getAll("genres") ? params.getAll("genres") : [];
        const priceParams = params.getAll("price") ? params.get("price") : "";

        setActiveFilters(genreParams);
        setPriceFilter(priceParams);
    }, []);

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
