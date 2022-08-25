import React from "react";

import CartItem from "./CartItem";

const Cart = () => {
    return (
        <div className="cart">
            <div className="cart-left">
                <div className="cart-title">My Cart</div>

                <CartItem />
            </div>
            <div className="cart-right"></div>
        </div>
    );
};

export default Cart;
