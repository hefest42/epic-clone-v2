import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const DUMMY_GAMES = [
    {
        name: "Marvel's Spider-Man Remastered",
        releaseDate: "2022.08.12",
        posterBig:
            "https://cdn2.unrealengine.com/egs-spider-man-remaster-carousel-desktop-1920x1080-69a70c4fbb0b.jpg?h=1080&resize=1&w=1920",
        posterSmall:
            "https://cdn2.unrealengine.com/egs-spider-man-remaster-carousel-thumb-1200x1600-c51cad22ccfc.jpg?h=1280&resize=1&w=960",
        logo: "https://cdn2.unrealengine.com/egs-spider-man-remaster-carousel-logo-400x222-322650638558.png",
        shortDescription: "Venture into the brutal Norse realms and fight to fulfill a deeply personal quest.",
        price: "59.99",
        discount: "",
        gameOnSale: false,
        gameFeatured: true,
        genres: ["Action", "Open World", "Exploration"],
    },
    {
        name: "Marvel's Spider-Man Remastered",
        releaseDate: "2022.08.12",
        posterBig:
            "https://cdn2.unrealengine.com/egs-spider-man-remaster-carousel-desktop-1920x1080-69a70c4fbb0b.jpg?h=1080&resize=1&w=1920",
        posterSmall:
            "https://cdn2.unrealengine.com/egs-spider-man-remaster-carousel-thumb-1200x1600-c51cad22ccfc.jpg?h=1280&resize=1&w=960",
        logo: "https://cdn2.unrealengine.com/egs-spider-man-remaster-carousel-logo-400x222-322650638558.png",
        shortDescription: "Venture into the brutal Norse realms and fight to fulfill a deeply personal quest.",
        price: "59.99",
        discount: "",
        gameOnSale: false,
        gameFeatured: true,
        genres: ["Action", "Open World", "Exploration"],
    },
    {
        name: "Marvel's Spider-Man Remastered",
        releaseDate: "2022.08.12",
        posterBig:
            "https://cdn2.unrealengine.com/egs-spider-man-remaster-carousel-desktop-1920x1080-69a70c4fbb0b.jpg?h=1080&resize=1&w=1920",
        posterSmall:
            "https://cdn2.unrealengine.com/egs-spider-man-remaster-carousel-thumb-1200x1600-c51cad22ccfc.jpg?h=1280&resize=1&w=960",
        logo: "https://cdn2.unrealengine.com/egs-spider-man-remaster-carousel-logo-400x222-322650638558.png",
        shortDescription: "Venture into the brutal Norse realms and fight to fulfill a deeply personal quest.",
        price: "59.99",
        discount: "",
        gameOnSale: false,
        gameFeatured: true,
        genres: ["Action", "Open World", "Exploration"],
    },
    {
        name: "Marvel's Spider-Man Remastered",
        releaseDate: "2022.08.12",
        posterBig:
            "https://cdn2.unrealengine.com/egs-spider-man-remaster-carousel-desktop-1920x1080-69a70c4fbb0b.jpg?h=1080&resize=1&w=1920",
        posterSmall:
            "https://cdn2.unrealengine.com/egs-spider-man-remaster-carousel-thumb-1200x1600-c51cad22ccfc.jpg?h=1280&resize=1&w=960",
        logo: "https://cdn2.unrealengine.com/egs-spider-man-remaster-carousel-logo-400x222-322650638558.png",
        shortDescription: "Venture into the brutal Norse realms and fight to fulfill a deeply personal quest.",
        price: "59.99",
        discount: "",
        gameOnSale: false,
        gameFeatured: true,
        genres: ["Action", "Open World", "Exploration"],
    },
    {
        name: "Marvel's Spider-Man Remastered",
        releaseDate: "2022.08.12",
        posterBig:
            "https://cdn2.unrealengine.com/egs-spider-man-remaster-carousel-desktop-1920x1080-69a70c4fbb0b.jpg?h=1080&resize=1&w=1920",
        posterSmall:
            "https://cdn2.unrealengine.com/egs-spider-man-remaster-carousel-thumb-1200x1600-c51cad22ccfc.jpg?h=1280&resize=1&w=960",
        logo: "https://cdn2.unrealengine.com/egs-spider-man-remaster-carousel-logo-400x222-322650638558.png",
        shortDescription: "Venture into the brutal Norse realms and fight to fulfill a deeply personal quest.",
        price: "59.99",
        discount: "",
        gameOnSale: false,
        gameFeatured: true,
        genres: ["Action", "Open World", "Exploration"],
    },
    {
        name: "Marvel's Spider-Man Remastered",
        releaseDate: "2022.08.12",
        posterBig:
            "https://cdn2.unrealengine.com/egs-spider-man-remaster-carousel-desktop-1920x1080-69a70c4fbb0b.jpg?h=1080&resize=1&w=1920",
        posterSmall:
            "https://cdn2.unrealengine.com/egs-spider-man-remaster-carousel-thumb-1200x1600-c51cad22ccfc.jpg?h=1280&resize=1&w=960",
        logo: "https://cdn2.unrealengine.com/egs-spider-man-remaster-carousel-logo-400x222-322650638558.png",
        shortDescription: "Venture into the brutal Norse realms and fight to fulfill a deeply personal quest.",
        price: "59.99",
        discount: "",
        gameOnSale: false,
        gameFeatured: true,
        genres: ["Action", "Open World", "Exploration"],
    },
];

const FeaturedGames = () => {
    const [activeListItem, setActiveListItem] = useState(0);
    const [testState, setTestState] = useState(3);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setActiveListItem((state) => (state === 5 ? 0 : state + 1));
    //     }, 7000);

    //     return () => clearTimeout(timer);
    // }, [activeListItem]);

    return (
        <div className="featured space-between">
            <div className="featured-container">
                <div className={testState === 1 ? "featured-poster featured-show" : "featured-poster featured-hidden"}>
                    <img src={`${DUMMY_GAMES[0].posterBig}`} alt="poster" />
                </div>
                <div className={testState === 2 ? "featured-poster featured-show" : "featured-poster featured-hidden"}>
                    <img
                        src={`https://cdn2.unrealengine.com/egs-saints-row-carousel-desktop-1248x702-fc921a0812ca.jpg?h=1080&resize=1&w=1920`}
                        alt="poster"
                    />
                </div>
                <div className={testState === 3 ? "featured-poster featured-show" : "featured-poster featured-hidden"}>
                    <img
                        src={`https://cdn2.unrealengine.com/egs-lotr-return-to-moria-carousel-desktop-1280x702-8737f30f4278.jpg?h=1080&resize=1&w=1920`}
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
