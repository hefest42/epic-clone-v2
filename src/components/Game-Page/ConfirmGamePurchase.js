import React from "react";

import { AiOutlineClose } from "react-icons/ai";

const ConfirmGamePurchase = ({ game, setShowConfirmGamePurchase }) => {
    return (
        <div className="game-purchase center">
            <div className="game-purchase__inner">
                <div className="game-purchase__inner-summary space-between">
                    <div>ORDER SUMMARY</div>
                    <div onClick={() => setShowConfirmGamePurchase(false)}>
                        <AiOutlineClose />
                    </div>
                </div>
                <div className="game-purchase__inner-poster">
                    <img src={game.posterSmall} alt="" />
                </div>
                <div className="game-purchase__inner-name">{game.name}</div>
                <div className="game-purchase__inner-publisher">{game.publisher}</div>

                <div className="game-purchase__inner-price">
                    <div className="space-between">
                        <div>Price</div>
                        <div>${game.price}</div>
                    </div>
                    <div className="game-purchase__inner-price-divider"></div>
                    <div className="space-between">
                        <div>Total</div>
                        <div>${game.price}</div>
                    </div>
                </div>

                <div className="game-purchase__inner-cofirm">
                    <p>
                        By clicking "Place Order" below, I represent that I am over 18 and an authorized user of this
                        payment method, and I agree to the End User Licence Agreement.
                    </p>
                    <button>PLACE ORDER</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmGamePurchase;
