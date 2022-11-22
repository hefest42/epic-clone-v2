import React from "react";

import GamePagePrice from "./GamePagePrice";
import GamePageLeft from "./GamePageLeft";

const GamePage = ({ game }) => {
    return (
        <div className="game-page">
            <GamePageLeft game={game} />

            <GamePagePrice game={game} />
        </div>
    );
};

export default GamePage;
