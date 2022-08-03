import React from "react";

import PageContainer from "../UI/PageContainer";
import Header from "./Header";
import SubHeader from "./SubHeader";
import DiscoverContainer from "../Discover-Page/DiscoverContainer";

const FrontPageContainer = () => {
    return (
        <PageContainer>
            <Header />
            <SubHeader />
            <DiscoverContainer />
        </PageContainer>
    );
};

export default FrontPageContainer;
