import React from "react";

import { Link } from "react-router-dom";

const TemporaryPage = () => {
    return (
        <div className="temporary-page">
            <h1>Work in progress.</h1>
            <Link to="/store">Back to Store</Link>
        </div>
    );
};

export default TemporaryPage;
