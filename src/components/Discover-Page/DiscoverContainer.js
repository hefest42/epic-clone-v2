import React from "react";

import FeaturedGames from "./FeaturedGames";
import FreeGames from "./FreeGames";
import GameCarousel from "./GameCarousel";
import PromotedGames from "./PromotedGames";
import NewTopComingGames from "./NewTopComingGames";
import NewToTheStore from "./NewToTheStore";

import { DUMMY_CAROUSEL_GAMES } from "../../Helpers/DummyGames";
const DiscoverContainer = () => {
    return (
        <>
            <FeaturedGames />
            <GameCarousel title="Games" />
            <PromotedGames games={DUMMY_CAROUSEL_GAMES.slice(0, 3)} />
            <FreeGames />
            <NewTopComingGames />
            <GameCarousel title="Games" />
            <PromotedGames games={DUMMY_CAROUSEL_GAMES.slice(0, 2)} />
            <GameCarousel title="Games" />
            <GameCarousel title="Games" />
            <NewToTheStore />
        </>
    );
};

export default DiscoverContainer;
