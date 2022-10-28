import React from "react";

import GameItem from "../UI/GameItem";

import { DUMMY_CAROUSEL_GAMES } from "../../Helpers/DummyGames";

//TODO fix pricing
const NewToTheStore = () => {
    return (
        <div className="new-to-store center-column">
            <div className="new-to-store-top">New To The Store</div>
            <div className="new-to-store-bottom">
                {DUMMY_CAROUSEL_GAMES.slice(0, 5).map((game, i) => (
                    <div key={i} className="new-to-store-item">
                        <GameItem game={game} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewToTheStore;
