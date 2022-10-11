import React from "react";
import { useState } from "react";

import { AiOutlineDown, AiOutlineCheck } from "react-icons/ai";

const GENRES = ["Action", "Adventure", "Shooter", "Action-Adventure"];
const WishlistGenreFilters = () => {
    const [showGenreList, setShowGenreList] = useState(false);

    return (
        <div className="wishlist-genre">
            <div className="wishlist-genre__title space-bewteen">
                <div className="center">
                    <div>Filters</div>
                    <div>{`()`}</div>
                </div>
                <button className="wishlist-genre__reset">RESET</button>
            </div>

            <div>
                <div className="wishlist-genre__container">
                    <button onClick={() => setShowGenreList((state) => !state)}>
                        <div>GENRE</div>
                        <AiOutlineDown
                            style={{
                                transform: `rotate(${showGenreList ? "-180deg" : "0"})`,
                            }}
                        />
                    </button>

                    <div>
                        {showGenreList &&
                            GENRES.map((genre) => (
                                <div key={genre} className="wishlist-genre__item wishlist-genre__item-active">
                                    <div className="wishlist-genre__item-inner space-between">
                                        <div>{genre}</div>
                                        <div>
                                            <AiOutlineCheck />
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishlistGenreFilters;
