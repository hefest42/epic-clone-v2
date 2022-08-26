import React from "react";

import PageContainer from "../../UI/PageContainer";
import Cart from "./Cart";
import CartEmpty from "./CartEmpty";

const CartContainer = () => {
    return (
        <PageContainer>
            {/* <Cart /> */}
            <CartEmpty />
        </PageContainer>
    );
};

export default CartContainer;
