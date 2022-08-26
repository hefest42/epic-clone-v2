import React from "react";

import GameItem from "../UI/GameItem";

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
            <div className="browse-right"></div>
        </div>
    );
};

export default BrowseGames;
