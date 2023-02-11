import React from "react";

import GamePagePrice from "./GamePagePrice";
import GamePageLeft from "./GamePageLeft";

const GamePage = ({ game, setShowConfirmGamePurchase }) => {
    return (
        <div className="game-page">
            <GamePageLeft game={game} />

            <GamePagePrice game={game} setShowConfirmGamePurchase={setShowConfirmGamePurchase} />
        </div>
    );
};

export default GamePage;
