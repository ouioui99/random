import React,{ useContext } from 'react';
import { UserContext } from './providers/UserProvider';

export const CheckLoggedIn = () => {
    if(!sessionStorage.getItem("session"))  {
        return false;
    } else {
        return true;
    }
    
}
 

 