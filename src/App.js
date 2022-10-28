import { Routes, Route, Navigate } from "react-router-dom";

import FrontPageContainer from "./components/Front-Page/FrontPageContainer";
import LogInContainer from "./components/Log-In-Sign-Up/LogInContainer";
import SignUpContainer from "./components/Log-In-Sign-Up/SignUpContainer";
import AccountSettingsContainer from "./components/Account-Settings/AccountSettingsContainer";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/store" replace />} />
            <Route path="store/*" element={<FrontPageContainer />} />
            <Route path="log-in" element={<LogInContainer />} />
            <Route path="sign-up" element={<SignUpContainer />} />
            <Route path="account/*" element={<AccountSettingsContainer />} />
        </Routes>
    );
}

export default App;
