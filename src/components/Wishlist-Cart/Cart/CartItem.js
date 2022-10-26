import React from "react";

import { AiFillWindows } from "react-icons/ai";
import { IoMdAddCircle } from "react-icons/io";

const CartItem = ({ game }) => {
    return (
        <div to="/store" className="cart-item center">
            <div className="cart-item__inner space-between">
                <div className="cart-item__image center">
                    <img src={game.posterSmall} alt={`${game.name} poster`} />
                </div>
                <div className="cart-item__info space-between-column">
                    <div className="cart-item__info-container space-between">
                        <div className="cart-item__info-name">{game.name}</div>
                        <div className="cart-item__info-price">{game.price}</div>
                    </div>
                    <div className="cart-item__info-container space-between">
                        <div>
                            <AiFillWindows />
                        </div>
                        <div className="center">
                            <div className="cart-item__info-wishlist center">
                                <IoMdAddCircle />
                                <button>Move to Wishlist</button>
                            </div>
                            <button className="cart-item__info-remove">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
