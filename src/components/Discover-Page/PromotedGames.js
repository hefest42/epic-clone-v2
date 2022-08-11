import React from "react";

import { DUMMY_CAROUSEL_GAMES } from "../../Helpers/DummyGames";

const PromotedGames = () => {
    const GAMES = DUMMY_CAROUSEL_GAMES.slice(0, 3);

    return (
        <div className="promoted center">
            <div className="promoted-container">
                <div className="promoted-inner"></div>
            </div>
            <div className="promoted-container">
                <div className="promoted-inner"></div>
            </div>
            <div className="promoted-container">
                <div className="promoted-inner"></div>
            </div>
        </div>
    );
};

export default PromotedGames;
