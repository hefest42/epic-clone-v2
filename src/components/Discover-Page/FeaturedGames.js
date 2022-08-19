import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";

import { DUMMY_GAMES } from "../../Helpers/DummyGames";

//TODO add links to the games ergo fix clickOnFeaturedListItemHandler
const FeaturedGames = () => {
    const [activeListItem, setActiveListItem] = useState(0);
    const [testState, setTestState] = useState(1);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setActiveListItem((state) => (state === 5 ? 0 : state + 1));
    //     }, 7000);

    //     return () => clearTimeout(timer);
    // }, [activeListItem]);

    const clickOnFeaturedListItemHandler = (index) => {
        if (index === activeListItem) {
            console.log("LINK TO THE GAME");
            return;
        } else setActiveListItem(index);
    };

    return (
        <div className="featured space-between">
            <div className="featured-container">
                <div className={activeListItem === 0 ? "featured-poster" : "featured-poster featured-hidden"}>
                    <img src={`${DUMMY_GAMES[0].posterBig}`} alt="poster" />
                    <div className="featured-cover" onClick={() => console.log("link to the game")}></div>
                    <div className="featured-cover__info">
                        <div className="featured-cover__info-logo">
                            <img src={`${DUMMY_GAMES[0].logo}`} alt="logo" />
                        </div>
                        <div className="featured-cover__info-description">
                            <p>Available Now</p>
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor in itaque, quibusdam
                                ducimus veritatis cupiditate unde provident molestias tenetur dolore!
                            </div>
                        </div>
                        <div className="featured-cover__info-buttons">
                            <div className="featured-cover__info-buy">
                                <p>$59.99</p>
                                <button onClick={() => console.log("bought the game")}>PRE-PURCHASE</button>
                            </div>
                            <div className="featured-cover__info-wishlist">
                                <button className="center" onClick={() => console.log("added to wishlist")}>
                                    <IoIosAddCircleOutline /> ADD TO WISHLIST
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={activeListItem === 1 ? "featured-poster" : "featured-poster featured-hidden"}>
                    <img
                        src={`https://cdn2.unrealengine.com/egs-saints-row-carousel-desktop-1248x702-fc921a0812ca.jpg?h=1080&resize=1&w=1920`}
                        alt="poster"
                    />
                </div>
                <div className={activeListItem === 2 ? "featured-poster" : "featured-poster featured-hidden"}>
                    <img
                        src={`https://cdn2.unrealengine.com/egs-lotr-return-to-moria-carousel-desktop-1280x702-8737f30f4278.jpg?h=1080&resize=1&w=1920`}
                        alt="poster"
                    />
                </div>
                <div className={activeListItem === 3 ? "featured-poster" : "featured-poster featured-hidden"}>
                    <img
                        src={`https://cdn2.unrealengine.com/wildfirepack-egs-featcarousel-desktop-1248x702-1248x702-eb7617a70630.png?h=1080&resize=1&w=1920`}
                        alt="poster"
                    />
                </div>
            </div>

            <div className="featured-list">
                {DUMMY_GAMES.map((game, i) => (
                    <div
                        key={i}
                        to={"/game"}
                        className={
                            activeListItem === i ? "featured-item featured-active featured-fill" : "featured-item"
                        }
                        onClick={() => clickOnFeaturedListItemHandler(i)}
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
