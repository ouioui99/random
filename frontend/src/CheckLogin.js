import React, { useContext } from "react";
import { UserContext } from "./providers/UserProvider";

export const CheckLoggedIn = () => {
  if (sessionStorage.getItem("session") === "sessionID") {
    return true;
  } else {
    return false;
  }
};
