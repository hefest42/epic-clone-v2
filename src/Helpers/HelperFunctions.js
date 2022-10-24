export const API_URL = `https://epic-clone-e374e-default-rtdb.europe-west1.firebasedatabase.app`;

export const calculateDiscount = (price, discount) => {
    return (price - price * (discount / 100)).toFixed(2);
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
                <span className="game-info__price-new">{`$${calculateDiscount(gamePrice, gameDiscount)}`}</span>
            </>
        );
    }
    // game is NOT on sale
    if (!isGameOnSale) return `$${gamePrice}`;
};

export const compareTwoArrays = (arr1, arr2) => {
    return arr2.every((value) => arr1.includes(value));
};
