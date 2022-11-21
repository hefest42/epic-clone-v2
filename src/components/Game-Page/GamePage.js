import React from "react";

import GamePagePrice from "./GamePagePrice";
import GamePageLeft from "./GamePageLeft";

const GamePage = ({ game }) => {
    return (
        <div className="game-page">
            <div className="game-page__left">
                <GamePageLeft game={game} />
            </div>
            <div className="game-page__right">
                <GamePagePrice game={game} />
            </div>
        </div>
    );
};

export default GamePage;
