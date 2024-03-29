import React, { useState, useMemo } from "react";

import { AiOutlineDown, AiOutlineCheck } from "react-icons/ai";
import { DUMMY_CAROUSEL_GAMES } from "../../Helpers/DummyGames";

const PRICE_RANGES = ["Free", "Under $5.00", "Under $10.00", "Under $20.00", "Under $30.00", "$14.99 and above"];

const BrowseFilters = ({
    games,
    addGenreToActiveFilters,
    activeFilters,
    resetActiveFilters,
    priceFilter,
    setPriceFilter,
}) => {
    const [showGenreList, setShowGenreList] = useState(true);
    const [showPriceRangesList, setShowPriceRangesList] = useState(true);

    const gamesGenres = useMemo(
        () => [...new Set(DUMMY_CAROUSEL_GAMES.map((game) => game.genres).flat())],
        [DUMMY_CAROUSEL_GAMES]
    );

    return (
        <div className="filter-browser">
            <div className="filter-browser__title space-bewteen">
                <div className="center">
                    <div>Filters</div>
                    <div>{`(${activeFilters.length > 0 ? activeFilters.length : ""})`}</div>
                </div>
                <button className="filter-browser__reset" onClick={() => resetActiveFilters()}>
                    RESET
                </button>
            </div>

            <div className="filter-browser__container">
                <button onClick={() => setShowPriceRangesList((state) => !state)}>
                    <div>PRICE</div>
                    <AiOutlineDown
                        style={{
                            transform: `rotate(${showPriceRangesList ? "-180deg" : "0"})`,
                        }}
                    />
                </button>

                <div>
                    {showPriceRangesList &&
                        PRICE_RANGES.map((price) => (
                            <div
                                key={price}
                                className={
                                    priceFilter === price
                                        ? "filter-browser__item filter-browser__item-active"
                                        : "filter-browser__item filter-browser__item"
                                }
                                onClick={() => {
                                    if (priceFilter === price) setPriceFilter("");
                                    else setPriceFilter(price);
                                }}
                            >
                                <div className="filter-browser__item-inner space-between">
                                    <div>{price}</div>
                                    <div>
                                        <AiOutlineCheck />
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            <div>
                <div className="filter-browser__container">
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
                                            ? "filter-browser__item filter-browser__item-active"
                                            : "filter-browser__item filter-browser__item"
                                    }
                                    onClick={() => addGenreToActiveFilters(genre)}
                                >
                                    <div className="filter-browser__item-inner space-between">
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

export default BrowseFilters;
