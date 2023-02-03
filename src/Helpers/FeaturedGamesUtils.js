export const gameReleaseDate = (releaseDate) => {
    const currentDate = new Date();
    const gameReleaseDate = new Date(releaseDate);

    if (currentDate.getTime() >= gameReleaseDate.getTime()) return "Available Now";
    else
        return `Coming ${gameReleaseDate.getDate()}/${gameReleaseDate.getMonth() + 1}/${gameReleaseDate.getFullYear()}`;
};

export const buyButtonTextHandler = (releaseDate) => {
    const currentDate = new Date();
    const gameReleaseDate = new Date(releaseDate);

    if (currentDate.getTime() >= gameReleaseDate.getTime()) return "BUY NOW";
    else return "PRE-PURCHASE";
};
