import { Routes, Route } from "react-router-dom";

import FrontPageContainer from "./components/Front-Page/FrontPageContainer";
import LogInContainer from "./components/Log-In-Sign-Up/LogInContainer";
import SignUpContainer from "./components/Log-In-Sign-Up/SignUpContainer";

function App() {
    return (
        <Routes>
            <Route path="/" element={<FrontPageContainer />} />
            <Route path="log-in" element={<LogInContainer />} />
            <Route path="sign-up" element={<SignUpContainer />} />
        </Routes>
    );
}

export default App;
