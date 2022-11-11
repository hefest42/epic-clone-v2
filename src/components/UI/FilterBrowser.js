import React, { useState, useMemo } from "react";

import { AiOutlineDown, AiOutlineCheck } from "react-icons/ai";

const PRICE_RANGES = ["Free", "Under $5.00", "Under $10.00", "Under $20.00", "Under $30.00", "$14.99 and above"];

const FilterBrowser = ({
    games,
    addGenreToActiveFilters,
    activeFilters,
    resetActiveFilters,
    priceFilter,
    setPriceFilter,
}) => {
    const [showGenreList, setShowGenreList] = useState(activeFilters.length > 0 ? true : false);
    const [showPriceRangesList, setShowPriceRangesList] = useState(priceFilter !== "" ? true : false);
    const [showPlatformList, setShowPlatformList] = useState(false);
    const [testingValues, setTestingValues] = useState([]);

    const gamesGenres = useMemo(() => [...new Set(games.map((game) => game.genres).flat())], [games]);
    const gamesPlatforms = useMemo(() => [...new Set(games.map((game) => game.platform).flat())], [games]);

    const testing = (value) => {
        if (testingValues.includes(value)) setTestingValues((state) => state.filter((val) => val !== value));
        else setTestingValues((state) => [...state, value]);
    };

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
                                    onClick={() => {
                                        addGenreToActiveFilters(genre);
                                        testing(genre);
                                    }}
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

            <div>
                <div className="filter-browser__container">
                    <button onClick={() => setShowPlatformList((state) => !state)}>
                        <div>PLATFORM</div>
                        <AiOutlineDown
                            style={{
                                transform: `rotate(${showPlatformList ? "-180deg" : "0"})`,
                            }}
                        />
                    </button>

                    <div>
                        {showPlatformList &&
                            gamesPlatforms.map((platform) => (
                                <div
                                    key={platform}
                                    className={
                                        activeFilters.includes(platform)
                                            ? "filter-browser__item filter-browser__item-active"
                                            : "filter-browser__item filter-browser__item"
                                    }
                                    onClick={() => addGenreToActiveFilters(platform)}
                                >
                                    <div className="filter-browser__item-inner space-between">
                                        <div>{platform}</div>
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
