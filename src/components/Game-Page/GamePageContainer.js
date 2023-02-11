import React, { useEffect, useState } from "react";

import PageContainer from "../UI/PageContainer";
import GamePage from "./GamePage";
import ConfirmGamePurchase from "./ConfirmGamePurchase";

import { useLocation } from "react-router-dom";

const GamePageContainer = () => {
    const location = useLocation();
    const [game, setGame] = useState({});

    const [showConfirmGamePurchase, setShowConfirmGamePurchase] = useState(false);

    useEffect(() => {
        setGame(location.state);
    }, [location.pathname]);

    return (
        <PageContainer>
            <GamePage game={game} setShowConfirmGamePurchase={setShowConfirmGamePurchase} />
            {showConfirmGamePurchase && (
                <ConfirmGamePurchase game={game} setShowConfirmGamePurchase={setShowConfirmGamePurchase} />
            )}
        </PageContainer>
    );
};

export default GamePageContainer;
