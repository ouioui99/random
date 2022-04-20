import React,{useContext} from 'react';
import { UserContext } from '../providers/UserProvider';

import { Link } from "react-router-dom";

export const Test = () => {
  const {isLoggedIn,setIsLoggedIn} = useContext(UserContext);
    return (
        <>
          <h1>Test</h1>
          <ul>
            <li><Link to="/">MainHome</Link>(ログイン時のみ)</li>
            <li><Link to="/login">login</Link></li>
            <li><Link to="/signup">signup</Link></li>
          </ul>
          <h3>{isLoggedIn ? "LoggedIn" : "not"}</h3>
        </>
      )
    
}
