import React from "react";

const GAME = {
    name: "Spider-Man",
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
};

const FeaturedGames = () => {
    return (
        <div className="featured space-between">
            <div className="featured-poster">
                <img src={`${GAME.posterBig}`} alt="poster" />
            </div>
            <div className="featured-list"></div>
        </div>
    );
};

export default FeaturedGames;
