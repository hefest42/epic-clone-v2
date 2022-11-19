import React from "react";

import GamePagePrice from "./GamePagePrice";

import { DUMMY_CAROUSEL_GAMES } from "../../Helpers/DummyGames";

const GamePage = () => {
    return (
        <div className="game-page">
            <div className="game-page__left"></div>
            <div className="game-page__right">
                <GamePagePrice game={DUMMY_CAROUSEL_GAMES[1]} />
            </div>
        </div>
    );
};

export default GamePage;
