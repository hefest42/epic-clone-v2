import React from "react";

import PageContainer from "../../UI/PageContainer";
import Cart from "./Cart";
import CartEmpty from "./CartEmpty";

import { useSelector } from "react-redux";

const CartContainer = () => {
    const cart = useSelector((state) => state.cart.cart);

    return <PageContainer>{cart.length === 0 ? <CartEmpty /> : <Cart />}</PageContainer>;
};

export default CartContainer;
