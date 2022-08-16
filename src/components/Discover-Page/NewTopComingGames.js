import React from "react";

import { DUMMY_CAROUSEL_GAMES } from "../../Helpers/DummyGames";

const GAMES = DUMMY_CAROUSEL_GAMES.slice(0, 5);
const DUMMY_TITLES = ["New Releases", "Top Selling", "Coming Soon"];

//TODO add the wishlist button
//TODO make the container a link to the game page
const NewTopComingGames = () => {
    return (
        <div className="column">
            {DUMMY_TITLES.map((title, i) => (
                <div key={i} className="column-container" data-number={i}>
                    <div className="column-inner">
                        <div className="column-inner__title space-between">
                            <h3>{title}</h3>
                            <button>VIEW MORE</button>
                        </div>
                        <div className="column-inner__games">
                            {GAMES.map((game, i) => (
                                <div key={i} className="column-item">
                                    <div className="column-item__image">
                                        <img src={game.posterSmall} alt="" />
                                    </div>
                                    <div className="column-item__info">
                                        <div>{game.name}</div>
                                        <div>${game.price}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NewTopComingGames;
