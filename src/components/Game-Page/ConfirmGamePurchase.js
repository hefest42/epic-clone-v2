import React, { useState } from "react";

import LoadingSpinner from "../UI/LoadingSpinner";

import { AiOutlineClose } from "react-icons/ai";
import { SiEpicgames } from "react-icons/si";
import { useEffect } from "react";

const ConfirmGamePurchase = ({ game, setShowConfirmGamePurchase }) => {
    const [stepper, setStepper] = useState(0);

    useEffect(() => {
        if (stepper !== 0) return;

        const timer = setTimeout(() => {
            setStepper(1);
        }, 2000);

        return () => clearTimeout(timer);
    });

    const placeOrderHandler = () => {
        setStepper(0);

        setTimeout(() => {
            setStepper(2);
        }, 1000);
    };

    return (
        <div className="game-purchase center">
            {stepper === 0 && (
                <div className="game-purchase__loading">
                    <div className="game-purchase__loading-close" onClick={() => setShowConfirmGamePurchase(false)}>
                        <AiOutlineClose />
                    </div>
                    <div className="game-purchase__loading-title center-column">
                        <SiEpicgames />

                        <div>Loading your Order...</div>
                    </div>
                    <div className="game-purchase__loading-container center">
                        <LoadingSpinner />
                    </div>
                </div>
            )}

            {stepper === 1 && (
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
                            By clicking "Place Order" below, I represent that I am over 18 and an authorized user of
                            this payment method, and I agree to the End User Licence Agreement.
                        </p>
                        <button onClick={placeOrderHandler}>PLACE ORDER</button>
                    </div>
                </div>
            )}

            {stepper === 2 && (
                <div className="game-purchase__loading">
                    <div className="game-purchase__loading-close" onClick={() => setShowConfirmGamePurchase(false)}>
                        <AiOutlineClose />
                    </div>
                    <div className="game-purchase__loading-title center-column">
                        <SiEpicgames />

                        <div>Thank you for your Purchase</div>
                    </div>
                    <div className="game-purchase__loading-thanks center">The game has been added to your library.</div>
                </div>
            )}
        </div>
    );
};

export default ConfirmGamePurchase;
