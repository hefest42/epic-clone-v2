import { Routes, Route } from "react-router-dom";

import FrontPageContainer from "./components/Front-Page/FrontPageContainer";

function App() {
    return (
        <Routes>
            <Route path="/" element={<FrontPageContainer />} />
        </Routes>
    );
}

export default App;
