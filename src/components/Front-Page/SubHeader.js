import React from "react";

import { FiSearch } from "react-icons/fi";

const SubHeader = () => {
    return (
        <div className="subHeader space-between">
            <div className="subHeader-left center">
                <div className="subHeader-left__form center">
                    <FiSearch />
                    <form action="">
                        <input type="text" placeholder="Search the store" />
                    </form>
                </div>
                <div className="subHeader-left__item">Discover</div>
                <div className="subHeader-left__item">Browse</div>
                <div className="subHeader-left__item">News</div>
            </div>

            <div className="subHeader-right"></div>
        </div>
    );
};

export default SubHeader;
