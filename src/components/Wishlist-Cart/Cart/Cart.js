import React from "react";

import CartItem from "./CartItem";

import { useSelector } from "react-redux";

const Cart = () => {
    const cart = useSelector((state) => state.cart.cart);

    return (
        <div className="cart">
            <div className="cart-left">
                <div className="cart-title">My Cart</div>
                {cart.map((game, i) => (
                    <CartItem key={i} game={game} />
                ))}
            </div>
            <div className="cart-right">
                <div className="cart-summary">
                    <div className="cart-summary__title">Games Summary</div>
                    <div className="cart-summary__top">
                        <div className="cart-summary__container space-between">
                            <div>Price</div>
                            <div>$59.99</div>
                        </div>
                        <div className="cart-summary__container space-between">
                            <div>Taxes</div>
                            <div>
                                <span>Calculated at Checkout</span>
                            </div>
                        </div>
                    </div>
                    <div className="cart-summary__bottom">
                        <div className="cart-summary__container space-between">
                            <div>Subtotal</div>
                            <div>$59.99</div>
                        </div>
                        <button>CHECK OUT</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
