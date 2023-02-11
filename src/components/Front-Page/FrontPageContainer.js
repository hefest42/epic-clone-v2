import React from "react";

import { Routes, Route } from "react-router-dom";

import PageContainer from "../UI/PageContainer";
import Header from "./Header";
import SubHeader from "./SubHeader";
import Footer from "./Footer";
import DiscoverContainer from "../Discover-Page/DiscoverContainer";
import BrowseContainer from "../Browse-Page/BrowseContainer";
import WishlistContainer from "../Wishlist-Cart/Wishlist/WishlistContainer";
import CartContainer from "../Wishlist-Cart/Cart/CartContainer";
import GamePageContainer from "../Game-Page/GamePageContainer";
import TemporaryPage from "../UI/TemporaryPage";

const FrontPageContainer = () => {
    return (
        <PageContainer>
            <Header />
            <SubHeader />

            <Routes>
                {/* Browse, Wishlist, an Cart page containers/links go here */}
                <Route path="/" element={<DiscoverContainer />} />
                <Route path="browse/*" element={<BrowseContainer />} />
                <Route path="news" element={<TemporaryPage />} />
                <Route path="wishlist" element={<WishlistContainer />} />
                <Route path="cart" element={<CartContainer />} />
                <Route path="game/*" element={<GamePageContainer />} />
            </Routes>

            <Footer />
        </PageContainer>
    );
};

export default FrontPageContainer;
