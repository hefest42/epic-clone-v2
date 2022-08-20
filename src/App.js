import { Routes, Route } from "react-router-dom";

import FrontPageContainer from "./components/Front-Page/FrontPageContainer";
import LogInContainer from "./components/Log-In/LogInContainer";

function App() {
    return (
        <Routes>
            <Route path="/" element={<FrontPageContainer />} />
            <Route path="log-in" element={<LogInContainer />} />
        </Routes>
    );
}

export default App;
