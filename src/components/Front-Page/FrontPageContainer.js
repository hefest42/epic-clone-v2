import React from "react";

import PageContainer from "../UI/PageContainer";
import Header from "./Header";
import SubHeader from "./SubHeader";
import Footer from "./Footer";
import DiscoverContainer from "../Discover-Page/DiscoverContainer";

const FrontPageContainer = () => {
    return (
        <PageContainer>
            <Header />
            <SubHeader />
            <DiscoverContainer />
            {/* Browse, Wishlist, an Cart page containers/links go here */}
            <Footer />
        </PageContainer>
    );
};

export default FrontPageContainer;
