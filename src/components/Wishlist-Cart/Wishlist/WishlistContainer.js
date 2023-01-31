import React, { useEffect, useState } from "react";

import PageContainer from "../../UI/PageContainer";
import Wishlist from "./Wishlist";
import WishlistEmpty from "./WishlistEmpty";

import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

const WishlistContainer = () => {
    const navigate = useNavigate();
    const isAccountLoggedIn = useSelector((state) => state.account.isAccountLoggedIn);
    const loggedInAccount = useSelector((state) => state.account.account);
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        if (!isAccountLoggedIn) {
            navigate("/log-in");
            return;
        }

        const accountWishlist = loggedInAccount.wishlist ? loggedInAccount.wishlist : [];
        setWishlist(accountWishlist);
    }, [loggedInAccount.wishlist, isAccountLoggedIn]);

    return <PageContainer>{wishlist.length === 0 ? <WishlistEmpty /> : <Wishlist />}</PageContainer>;
};

export default WishlistContainer;
