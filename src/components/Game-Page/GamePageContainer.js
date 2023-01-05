import React, { useEffect, useState } from "react";

import PageContainer from "../UI/PageContainer";
import GamePage from "./GamePage";
import ConfirmGamePurchase from "./ConfirmGamePurchase";

import { useLocation } from "react-router-dom";

import { DUMMY_CAROUSEL_GAMES } from "../../Helpers/DummyGames";

const GamePageContainer = () => {
    const location = useLocation();
    const [game, setGame] = useState({});
    const [gameReviews, setGameReviews] = useState([]);
    const [showConfirmGamePurchase, setShowConfirmGamePurchase] = useState(false);

    useEffect(() => {
        const gameName = location.pathname.split("/")[location.pathname.split("/").length - 1].replaceAll("%20", " ");
        const filteredGame = DUMMY_CAROUSEL_GAMES.filter(
            (game) => game.name.replaceAll(" ", "") === gameName.replaceAll(" ", "")
        );
        setGame(filteredGame[0]);

        const fetchTest = async () => {
            try {
                const response = await fetch(`https://opencritic-api.p.rapidapi.com/game/search?criteria=${gameName}`, {
                    method: "GET",
                    headers: {
                        "X-RapidAPI-Key": "a3d147fab7msh00956640f11a890p1c1f32jsn7faec2c28528",
                        "X-RapidAPI-Host": "opencritic-api.p.rapidapi.com",
                    },
                });

                const data = await response.json();

                const gameID = data[0].id;

                // no longer working???
                const reviewResponse = await fetch(`https://opencritic-api.p.rapidapi.com/review/game/${gameID}`, {
                    method: "GET",
                    headers: {
                        "X-RapidAPI-Key": "a3d147fab7msh00956640f11a890p1c1f32jsn7faec2c28528",
                        "X-RapidAPI-Host": "opencritic-api.p.rapidapi.com",
                    },
                });

                const reviewData = await reviewResponse.json();

                setGameReviews(reviewData.slice(0, 3));
            } catch (error) {
                console.log(error);
            }
        };

        fetchTest();
    }, [location.pathname]);

    return (
        <PageContainer>
            <GamePage game={game} gameReviews={gameReviews} setShowConfirmGamePurchase={setShowConfirmGamePurchase} />
            {showConfirmGamePurchase && (
                <ConfirmGamePurchase game={game} setShowConfirmGamePurchase={setShowConfirmGamePurchase} />
            )}
        </PageContainer>
    );
};

export default GamePageContainer;
