import React from "react";

import FeaturedGames from "./FeaturedGames";
import FreeGames from "./FreeGames";
import GameCarousel from "./GameCarousel";
import PromotedGames from "./PromotedGames";
import NewTopComingGames from "./NewTopComingGames";

const DiscoverContainer = () => {
    return (
        <>
            <FeaturedGames />
            <GameCarousel title="Games on Sale" />
            <PromotedGames />
            <FreeGames />
            <NewTopComingGames />
        </>
    );
};

export default DiscoverContainer;
