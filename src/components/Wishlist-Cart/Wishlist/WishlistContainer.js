import React, { useEffect, useState } from "react";

import PageContainer from "../../UI/PageContainer";
import Wishlist from "./Wishlist";
import WishlistEmpty from "./WishlistEmpty";

import { useSelector } from "react-redux";

const WishlistContainer = () => {
    const isAccountLoggedIn = useSelector((state) => state.account.isAccountLoggedIn);
    const loggedInAccount = useSelector((state) => state.account.account);
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        if (!isAccountLoggedIn) return;

        setWishlist(loggedInAccount.wishlist.slice(1));
    }, [loggedInAccount.wishlist]);

    return <PageContainer>{wishlist.length === 0 ? <WishlistEmpty /> : <Wishlist />}</PageContainer>;
};

export default WishlistContainer;
