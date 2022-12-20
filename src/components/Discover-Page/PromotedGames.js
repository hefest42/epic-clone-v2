import React from "react";

import { useNavigate } from "react-router-dom";

import GameItemHorizontal from "../UI/GameItemHorizontal";

const PromotedGames = ({ games }) => {
    const navigate = useNavigate();

    const clickHandler = (e, game) => {
        e.stopPropagation();

        navigate(`/store/game/${game.name}`);
    };

    return (
        <div className="promoted">
            {games.map((game, i) => (
                <div key={i} className="promoted-inner center-column" data-items={games.length}>
                    <GameItemHorizontal game={game} clickHandler={clickHandler} />
                </div>
            ))}
        </div>
    );
};

export default PromotedGames;
