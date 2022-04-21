import {
    Route, Routes
} from "react-router-dom";

import {MainHome} from "../pages/MainHome";


export const AuthenticatedRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<MainHome />} />
        </Routes>
    )
}