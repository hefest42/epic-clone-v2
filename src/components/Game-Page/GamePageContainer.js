import React, { useEffect, useState } from "react";

import PageContainer from "../UI/PageContainer";
import GamePage from "./GamePage";

import { useLocation } from "react-router-dom";

import { DUMMY_CAROUSEL_GAMES } from "../../Helpers/DummyGames";

const GamePageContainer = () => {
    const location = useLocation();
    const [game, setGame] = useState({});

    useEffect(() => {
        const gameName = location.pathname.split("/")[location.pathname.split("/").length - 1].replaceAll("%20", " ");
        const filteredGame = DUMMY_CAROUSEL_GAMES.filter((game) => game.name === gameName);
        setGame(filteredGame[0]);
    });

    return (
        <PageContainer>
            <GamePage game={game} />
        </PageContainer>
    );
};

export default GamePageContainer;
