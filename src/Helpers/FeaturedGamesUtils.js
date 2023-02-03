export const gameReleaseDate = (releaseDate, currentDate) => {
    const gameReleaseDate = new Date(releaseDate);

    if (currentDate.getTime() >= gameReleaseDate.getTime()) return "Available Now";
    else
        return `Coming ${gameReleaseDate.getDate()}/${gameReleaseDate.getMonth() + 1}/${gameReleaseDate.getFullYear()}`;
};
