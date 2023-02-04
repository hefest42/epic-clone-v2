import React, { useEffect } from "react";

import PageContainer from "../../UI/PageContainer";
import Wishlist from "./Wishlist";
import WishlistEmpty from "./WishlistEmpty";

import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

const WishlistContainer = () => {
    const navigate = useNavigate();
    const { isAccountLoggedIn, account } = useSelector((state) => state.account);

    useEffect(() => {
        if (!isAccountLoggedIn) {
            navigate("/log-in");
            return;
        }
    }, [isAccountLoggedIn]);

    return <PageContainer>{account.wishlist.length === 0 ? <WishlistEmpty /> : <Wishlist />}</PageContainer>;
};

export default WishlistContainer;
