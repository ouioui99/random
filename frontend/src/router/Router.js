import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";
import { Signup } from "../pages/Signup";
import { Home } from "../pages/Home";
import { MainHome } from "../pages/MainHome";
import SignInSide from "../pages/TestLoggedIn";
import { AuthenticatedRoute } from "../router/AuthentivatedRoute";
import { Auth } from "../router/Auth";
import { UserProvider } from "../providers/UserProvider";

function Router() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/signinside" element={<SignInSide />} />
          <Route
            path="/random"
            element={
              <Auth>
                <MainHome />
              </Auth>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default Router;
