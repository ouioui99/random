import {
    BrowserRouter, Route, Routes
} from "react-router-dom";

import {Test} from "./pages/Test";
import {Login} from "./pages/Login";
import {Signup} from "./pages/Signup";
import {TestLoggedIn} from "./pages/TestLoggedIn";
import {NotFound} from "./pages/NotFound";
import { UserProvider } from "./providers/UserProvider";




  function App() {
    return(
        <UserProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Test />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    <Route method="post" path="test" element={<TestLoggedIn />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </UserProvider>
    )
}

export default App;



