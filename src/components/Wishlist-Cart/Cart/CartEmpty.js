import React from "react";

import { Link } from "react-router-dom";
import { AiFillFrown } from "react-icons/ai";

const CartEmpty = () => {
    return (
        <div className="cart-empty ">
            <div className="cart-title">My Cart</div>
            <div className="cart-empty__container center">
                <div className="cart-empty__inner center-column">
                    <div className="cart-empty__inner-svg center">
                        <AiFillFrown />
                    </div>
                    <div className="cart-empty__inner-desc">Your Cart is empty.</div>
                    <Link className="cart-empty__inner-link" to="/store">
                        Shop for Games
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CartEmpty;
