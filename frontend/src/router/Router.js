import {
    BrowserRouter, Route, Routes
} from "react-router-dom";
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";
import { Signup } from "../pages/Signup";
import { Test } from "../pages/Test";
import  SignInSide  from "../pages/TestLoggedIn";
import {AuthenticatedRoute} from "../router/AuthentivatedRoute";
import {Auth} from "../router/Auth"
import { UserProvider } from "../providers/UserProvider";






  function Router() {
      
    return(
        <UserProvider>
            <BrowserRouter>
                <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/test" element={<Test />} />
                <Route path="/signinside" element={<SignInSide />} />
                    <Route path="*"
                        element={
                            <Auth>
                                <AuthenticatedRoute />
                            </Auth>
                        } 
                    />
                </Routes>
            </BrowserRouter>
        </UserProvider>
    )
}

export default Router;



