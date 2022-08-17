import React from "react";

import { BsGift } from "react-icons/bs";

import { DUMMY_CAROUSEL_GAMES } from "../../Helpers/DummyGames";

const SHORTHAND_MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const FreeGames = () => {
    const GAMES = DUMMY_CAROUSEL_GAMES.slice(0, 2);

    const dateHandler = (date) => {
        const dateFrom = new Date(date);
        const oneWeek = new Date(dateFrom.getTime() + 7 * 24 * 60 * 60 * 1000);
        const twoWeeks = new Date(dateFrom.getTime() + 14 * 24 * 60 * 60 * 1000);

        return {
            oneWeekFromDate: `${SHORTHAND_MONTHS[oneWeek.getMonth()]} ${oneWeek.getDate()}`,
            twoWeeksFromDate: `${SHORTHAND_MONTHS[twoWeeks.getMonth()]} ${twoWeeks.getDate()}`,
        };
    };

    const { oneWeekFromDate, twoWeeksFromDate } = dateHandler("2022-08-11");

    return (
        <div className="free center">
            <div className="free-inner">
                <div className="free-title">
                    <BsGift /> Free Games
                </div>

                <div className="free-container">
                    {GAMES.map((game, i) => (
                        <div key={i} className="free-item">
                            <div className="free-item__image">
                                <img src={game.posterBig} alt="" />
                                <div className="free-item__image-bottom center" data-color={i}>
                                    {i === 0 ? "Free Now" : "Coming Soon"}
                                </div>
                            </div>
                            <div className="free-item__info">
                                <div className="free-item__info-name">{game.name}</div>
                                <div className="free-item__info-date">
                                    {i === 0
                                        ? `Free Now - ${oneWeekFromDate}`
                                        : `Free ${oneWeekFromDate} - ${twoWeeksFromDate}`}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FreeGames;
