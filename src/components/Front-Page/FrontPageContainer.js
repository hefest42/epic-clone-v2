import React from "react";

import { Routes, Route } from "react-router-dom";

import PageContainer from "../UI/PageContainer";
import Header from "./Header";
import SubHeader from "./SubHeader";
import Footer from "./Footer";
import DiscoverContainer from "../Discover-Page/DiscoverContainer";
import WishlistContainer from "../Wishlist-Cart/Wishlist/WishlistContainer";

const FrontPageContainer = () => {
    return (
        <PageContainer>
            <Header />
            <SubHeader />

            <Routes>
                {/* Browse, Wishlist, an Cart page containers/links go here */}
                <Route path="/" element={<DiscoverContainer />} />
                <Route path="wishlist" element={<WishlistContainer />} />
            </Routes>

            <Footer />
        </PageContainer>
    );
};

export default FrontPageContainer;
