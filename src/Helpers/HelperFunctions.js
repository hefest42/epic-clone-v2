export const API_URL = `https://epic-clone-5fa09-default-rtdb.europe-west1.firebasedatabase.app`;

export const calculateDiscount = (price, discount = 0, isGameOnSale) => {
    if (price === 0 || price === "0") return 0;
    if (!discount || !isGameOnSale) return +price;

    return +(price - price * (discount / 100)).toFixed(2);
};

export const gamePriceHandler = (isGameOnSale, gamePrice, gameDiscount) => {
    // game is free
    if (gamePrice === "0") return "Free to Play";
    // game is on sale
    if (isGameOnSale) {
        return (
            <>
                <span className="game-info__price-discount">{`-${gameDiscount}%`}</span>
                <span className="game-info__price-old">{`$${gamePrice}`}</span>
                <span className="game-info__price-new">{`$${calculateDiscount(
                    gamePrice,
                    gameDiscount,
                    isGameOnSale
                )}`}</span>
            </>
        );
    }
    // game is NOT on sale
    if (!isGameOnSale) return `$${gamePrice}`;
};

export const compareTwoArrays = (arr1, arr2) => {
    return arr2.every((value) => arr1.includes(value));
};
