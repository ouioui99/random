import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (sessionStorage.getItem("session") === "sessionID") {
      setIsLoggedIn(true);
    }
    setLoading(false);
  }, []);
  
  return(
    <UserContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
      {!loading && props.children}
    </UserContext.Provider>
  )
}