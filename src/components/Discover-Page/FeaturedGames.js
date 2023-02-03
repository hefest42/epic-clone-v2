import React, { useEffect, useState, useMemo } from "react";

import FeaturedGamesGame from "./FeaturedGamesGame";

import { useNavigate } from "react-router-dom";

import { DUMMY_CAROUSEL_GAMES } from "../../Helpers/DummyGames";

//TODO add links to the games ergo fix clickOnFeaturedListItemHandler
const FeaturedGames = () => {
    const navigate = useNavigate();
    const [activeListItem, setActiveListItem] = useState(0);
    const GAMES = useMemo(() => DUMMY_CAROUSEL_GAMES.slice(0, 6), [DUMMY_CAROUSEL_GAMES]);

    const clickOnFeaturedListItemHandler = (index, game) => {
        if (index === activeListItem) navigate(`/store/game/${game.name}`, { state: game });
        else setActiveListItem(index);
    };

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setActiveListItem((state) => (state === 5 ? 0 : state + 1));
    //     }, 7000);

    //     return () => clearTimeout(timer);
    // }, [activeListItem]);

    return (
        <div className="featured space-between">
            <div className="featured-container">
                {GAMES.map((game, i) => (
                    <FeaturedGamesGame key={i} game={game} index={i} activeListItem={activeListItem} />
                ))}
            </div>

            <div className="featured-list">
                {GAMES.map((game, i) => (
                    <div
                        key={i}
                        className={
                            activeListItem === i ? "featured-item featured-active featured-fill" : "featured-item"
                        }
                        onClick={() => clickOnFeaturedListItemHandler(i, game)}
                    >
                        <div className="featured-item__image">
                            <img src={`${game.posterSmall}`} alt="poster" />
                        </div>
                        <div className="featured-item__text">{game.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedGames;
