import React from "react";

import GamePagePrice from "./GamePagePrice";
import GamePageLeft from "./GamePageLeft";

const GamePage = ({ game, gameReviews, setShowConfirmGamePurchase }) => {
    return (
        <div className="game-page">
            <GamePageLeft game={game} gameReviews={gameReviews} />

            <GamePagePrice game={game} setShowConfirmGamePurchase={setShowConfirmGamePurchase} />
        </div>
    );
};

export default GamePage;
