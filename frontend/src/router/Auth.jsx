import { useContext, useState, useEffect } from "react";
import { UserContext } from "../providers/UserProvider";
import { Navigate, useLocation } from "react-router-dom";

export const Auth = ({ children }) => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const location = useLocation();

  //login状態をfalseにしたいときのみif文に入るようにすることが肝
  //login状態をtureにするのはlogin関数のみにする
  if (sessionStorage.getItem("session") !== "sessionID") {
    setIsLoggedIn(false);
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};
