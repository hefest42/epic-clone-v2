import React from "react";

import PageContainer from "../UI/PageContainer";
import Wishlist from "./Wishlist";
import WishlistEmpty from "./WishlistEmpty";

const WishlistContainer = () => {
    return (
        <PageContainer>
            <Wishlist />
            {/* <WishlistEmpty /> */}
        </PageContainer>
    );
};

export default WishlistContainer;
