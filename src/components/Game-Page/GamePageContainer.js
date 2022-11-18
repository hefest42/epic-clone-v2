import React from "react";

import PageContainer from "../UI/PageContainer";
import GamePage from "./GamePage";
import Header from "../Front-Page/Header";
import SubHeader from "../Front-Page/SubHeader";
import Footer from "../Front-Page/Footer";

const GamePageContainer = () => {
    return (
        <PageContainer>
            <Header />
            <SubHeader />
            <GamePage />
            <Footer />
        </PageContainer>
    );
};

export default GamePageContainer;
