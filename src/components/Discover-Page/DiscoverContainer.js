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
            <GameCarousel title="Games on Sale" />
            <PromotedGames />
            <GameCarousel title="Games on Sale" />
            <GameCarousel title="Games on Sale" />
        </>
    );
};

export default DiscoverContainer;
