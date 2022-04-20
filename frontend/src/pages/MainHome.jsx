import React,{ useState,useContext } from 'react';
import { UserContext } from '../providers/UserProvider';
import { useNavigate } from 'react-router-dom';


import {CheckLoggedIn} from "../CheckLogin";

export const MainHome = () => {

    const {isLoggedIn,setIsLoggedIn} = useContext(UserContext);

    const navigate = useNavigate();

    const clicked = (e) => {
        navigate('/test');
    }

    const logout = () => {
        sessionStorage.removeItem("session");
        setIsLoggedIn(CheckLoggedIn());
        navigate('/test');
    }

    return (
        <>
            <h1>MainHome</h1>
            <button onClick={(e)=> clicked(e)}>test</button>
            <button onClick={(e)=> logout(e)}>Logout</button>

        </>

    )
} 