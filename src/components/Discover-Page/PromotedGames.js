import React from "react";

import { useNavigate } from "react-router-dom";

import GameItemHorizontal from "../UI/GameItemHorizontal";

const PromotedGames = ({ games }) => {
    return (
        <div className="promoted">
            {games.map((game, i) => (
                <div key={i} className="promoted-inner center-column" data-items={games.length}>
                    <GameItemHorizontal game={game} />
                </div>
            ))}
        </div>
    );
};

export default PromotedGames;
