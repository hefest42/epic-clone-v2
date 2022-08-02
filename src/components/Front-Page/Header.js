import React from "react";

const Header = () => {
    return (
        <header className="header space-between">
            <div className="header-left center">
                <div className="header-logo">
                    <div className="header-logo__text"></div>
                </div>

                <div className="header-item">
                    <div className="header-item__text center">STORE</div>
                    <div className="header-item__border"></div>
                </div>

                <div className="header-item">
                    <div className="header-item__text center">FAQ</div>
                    <div className="header-item__border"></div>
                </div>

                <div className="header-item">
                    <div className="header-item__text center">HELP</div>
                    <div className="header-item__border"></div>
                </div>
            </div>

            <div className="header-right"></div>
        </header>
    );
};

export default Header;
