import {
    BrowserRouter, Route, Routes
} from "react-router-dom";
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";
import { Signup } from "../pages/Signup";
import { Test } from "../pages/Test";
import {AuthenticatedRoute} from "../router/AuthentivatedRoute";
import { UserProvider } from "../providers/UserProvider";






  function Router() {
    return(
        <UserProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="test" element={<Test />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="*" element={<NotFound />} />
                    <AuthenticatedRoute />
                </Routes>
            </BrowserRouter>
        </UserProvider>
    )
}

export default Router;



