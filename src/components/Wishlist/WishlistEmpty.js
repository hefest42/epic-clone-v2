import React from "react";

import { Link } from "react-router-dom";
import { AiFillFrown } from "react-icons/ai";

const WishlistEmpty = () => {
    return (
        <div className="wishlist-empty ">
            <div className="wishlist-title">Wishlist</div>
            <div className="wishlist-empty__container center">
                <div className="wishlist-empty__inner center-column">
                    <div className="wishlist-empty__inner-svg center">
                        <AiFillFrown />
                    </div>
                    <div className="wishlist-empty__inner-desc">You haven't added anything to your wishlist yet.</div>
                    <Link className="wishlist-empty__inner-link" to="/store">
                        Shop for Games
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WishlistEmpty;
