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

        //TODO GET 3 GAME REVIEWS
        // const fetchTest = async () => {
        //     try {
        //         const response = await fetch(
        //             `https://opencritic-api.p.rapidapi.com/game/search?criteria=Marvel's%20Spider-Man%20Remastered`,
        //             {
        //                 method: "GET",
        //                 headers: {
        //                     "X-RapidAPI-Key": "a3d147fab7msh00956640f11a890p1c1f32jsn7faec2c28528",
        //                     "X-RapidAPI-Host": "opencritic-api.p.rapidapi.com",
        //                 },
        //             }
        //         );

        //         const data = await response.json();

        //         console.log(data);
        //     } catch (error) {
        //         console.log(error);
        //     }
        // };

        // fetchTest();
    });

    return (
        <PageContainer>
            <GamePage game={game} />
        </PageContainer>
    );
};

export default GamePageContainer;
