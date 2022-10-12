import React, { useState, useMemo } from "react";

import { AiOutlineDown, AiOutlineCheck } from "react-icons/ai";

const FilterBrowser = ({ games }) => {
    const [showGenreList, setShowGenreList] = useState(false);
    const [activeFilters, setActiveFilters] = useState([]);

    const gamesGenres = useMemo(() => [...new Set(games.map((game) => game.genres).flat())]);

    const addGenreToActiveFilters = (genre) => {
        console.log(genre);
        if (activeFilters.includes(genre)) setActiveFilters((state) => state.filter((gnr) => gnr !== genre));
        else setActiveFilters((state) => [genre, ...state]);
    };

    return (
        <div className="wishlist-genre">
            <div className="wishlist-genre__title space-bewteen">
                <div className="center">
                    <div>Filters</div>
                    <div>{`(${activeFilters.length > 0 ? activeFilters.length : ""})`}</div>
                </div>
                <button className="wishlist-genre__reset">RESET</button>
            </div>

            <div>
                <div className="wishlist-genre__container">
                    <button onClick={() => setShowGenreList((state) => !state)}>
                        <div>GENRE</div>
                        <AiOutlineDown
                            style={{
                                transform: `rotate(${showGenreList ? "-180deg" : "0"})`,
                            }}
                        />
                    </button>

                    <div>
                        {showGenreList &&
                            gamesGenres.map((genre) => (
                                <div
                                    key={genre}
                                    className={
                                        activeFilters.includes(genre)
                                            ? "wishlist-genre__item wishlist-genre__item-active"
                                            : "wishlist-genre__item wishlist-genre__item"
                                    }
                                    onClick={() => addGenreToActiveFilters(genre)}
                                >
                                    <div className="wishlist-genre__item-inner space-between">
                                        <div>{genre}</div>
                                        <div>
                                            <AiOutlineCheck />
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterBrowser;
