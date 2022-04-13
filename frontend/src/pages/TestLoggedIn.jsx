import React,{useState,useContext} from 'react';
import { UserContext } from '../providers/UserProvider';

import {Test} from "../pages/Test";
import {Login} from "../pages/Login";



export const TestLoggedIn = () => {

    const {isLoggedIn} = useContext(UserContext);
    return (
        <>
            {isLoggedIn ? <Test /> : <Login />}
        </>
    )
}