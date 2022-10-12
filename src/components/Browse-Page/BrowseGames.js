import React from "react";

import GameItem from "../UI/GameItem";
import FilterBrowser from "../UI/FilterBrowser";

import { DUMMY_CAROUSEL_GAMES } from "../../Helpers/DummyGames";

const BrowseGames = () => {
    return (
        <div className="browse">
            <div className="browse-left">
                {DUMMY_CAROUSEL_GAMES.map((game, i) => (
                    <div key={i} className="browse-game">
                        <GameItem game={game} />
                    </div>
                ))}
            </div>
            <div className="browse-right">
                <FilterBrowser games={DUMMY_CAROUSEL_GAMES} />
            </div>
        </div>
    );
};

export default BrowseGames;
