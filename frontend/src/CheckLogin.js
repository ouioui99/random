import React,{ useContext } from 'react';
import { UserContext } from './providers/UserProvider';

export const CheckLoggedIn = () => {
<<<<<<< HEAD
=======
    console.log(!sessionStorage.getItem("session"));
>>>>>>> 62c2932441427e1a0b64f18469c7e2a40256213d
    if(!sessionStorage.getItem("session"))  {
        return false;
    } else {
        return true;
    }
    
}
 

 