import React from "react";

import GamePagePrice from "./GamePagePrice";
import GamePageLeft from "./GamePageLeft";

const GamePage = ({ game, gameReviews }) => {
    return (
        <div className="game-page">
            <GamePageLeft game={game} gameReviews={gameReviews} />

            <GamePagePrice game={game} />
        </div>
    );
};

export default GamePage;
