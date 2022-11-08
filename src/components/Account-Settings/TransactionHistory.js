import React from "react";

const TransactionHistory = () => {
    return (
        <div className="transaction">
            <div>
                <div className="account-title">TRANSACTION HISTORY</div>
                <div className="account-subtitle">See all your transactions</div>
            </div>

            <div className="transaction-container">
                <div className="transaction-container__categories space-between">
                    <div className="transaction-container__categories-date">DATE</div>
                    <div className="transaction-container__categories-description">DESCRIPTION</div>
                    <div className="transaction-container__categories-price">PRICE</div>
                    <div className="transaction-container__categories-status">STATUS</div>
                </div>

                <div className="transaction-container__purchases">
                    <div className="transaction-item space-between">
                        <div className="transaction-item__date transaction-container__categories-date">08/11/2022</div>
                        <div className="transaction-item__description transaction-container__categories-description">
                            Warhammer 40,000: Mechanicus - Standard Edition
                        </div>
                        <div className="transaction-item__price transaction-container__categories-price">$59.99</div>
                        <div className="transaction-item__status transaction-container__categories-status">
                            Purchased
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransactionHistory;
