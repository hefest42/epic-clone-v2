import React from "react";

const PromotedGames = ({ games }) => {
    return (
        <div className="promoted">
            {games.map((game, i) => (
                <div key={i} className="promoted-inner center-column" data-items={games.length}></div>
            ))}
        </div>
    );
};

export default PromotedGames;
