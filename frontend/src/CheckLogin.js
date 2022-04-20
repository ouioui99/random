import React,{ useContext } from 'react';
import { UserContext } from './providers/UserProvider';

export const CheckLoggedIn = () => {
    console.log(!sessionStorage.getItem("session"));
    if(!sessionStorage.getItem("session"))  {
        return false;
    } else {
        return true;
    }
    
}
 

 