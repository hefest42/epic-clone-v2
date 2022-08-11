import React from "react";

import FeaturedGames from "./FeaturedGames";
import GameCarousel from "./GameCarousel";
import PromotedGames from "./PromotedGames";

const DiscoverContainer = () => {
    return (
        <>
            <FeaturedGames />
            <GameCarousel title="Games on Sale" />
            <PromotedGames />
        </>
    );
};

export default DiscoverContainer;
