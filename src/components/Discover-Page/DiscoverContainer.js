import React from "react";

import FeaturedGames from "./FeaturedGames";
import GameCarousel from "./GameCarousel";

const DiscoverContainer = () => {
    return (
        <>
            <FeaturedGames />
            <GameCarousel title="Games on Sale" />
        </>
    );
};

export default DiscoverContainer;
