import React from "react";

import useComponentVisible from "../../../Helpers/useComponentVisible";

import { AiOutlineDown } from "react-icons/ai";
import { compareTwoArrays, calculateDiscount } from "../../../Helpers/HelperFunctions";

const SORT_BY_ITEMS = ["Date Added", "Alphabetical", "Price: Low to High", "Price: High to Low"];

const WishlistSortDropdownMenu = ({ account, sortByText, setSortByText, setSortedWishlistGames }) => {
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

    const sortWishlistItems = (type) => {
        setSortByText(type);
        const wishlistedGames = [...account.wishlist];

        switch (type) {
            case "Alphabetical":
                const gamesSortedAlphabetically = wishlistedGames.sort((a, b) => a.name.localeCompare(b.name));
                setSortedWishlistGames(gamesSortedAlphabetically);
                break;

            case "Price: Low to High":
                const gamesSortedByPriceLowToHigh = wishlistedGames.sort(
                    (a, b) =>
                        calculateDiscount(a.price, a.discount, a.gameOnSale) -
                        calculateDiscount(b.price, b.discount, b.gameOnSale)
                );
                setSortedWishlistGames(gamesSortedByPriceLowToHigh);

                break;

            case "Price: High to Low":
                const gamesSortedByPriceHighToLow = wishlistedGames.sort(
                    (a, b) => calculateDiscount(b.price, b.discount) - calculateDiscount(a.price, a.discount)
                );
                setSortedWishlistGames(gamesSortedByPriceHighToLow);
                break;

            default:
                setSortedWishlistGames([]);
                break;
        }
    };

    return (
        <div className="wishlist-sort">
            <div className="wishlist-sort__item">
                Sort by:
                <button
                    className="wishlist-sort__item-button center"
                    onClick={() => setIsComponentVisible((state) => !state)}
                    ref={ref}
                >
                    {sortByText}
                    <AiOutlineDown
                        style={{
                            transform: `rotate(${isComponentVisible ? "-180deg" : "0"})`,
                        }}
                    />
                </button>
            </div>

            {isComponentVisible && (
                <ul className="wishlist-dropdown">
                    {SORT_BY_ITEMS.map((item) => (
                        <li key={item} onClick={() => sortWishlistItems(item)}>
                            <button
                                className={
                                    item === sortByText
                                        ? "wishlist-dropdown__item wishlist-dropdown__item-active"
                                        : "wishlist-dropdown__item"
                                }
                            >
                                {item}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default WishlistSortDropdownMenu;
