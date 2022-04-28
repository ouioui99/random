import React,{ useState,useContext, useEffect } from 'react';
import { UserContext, LoadContext} from '../providers/UserProvider';
import {postLogin} from '../api/userAxios'
import { useNavigate } from 'react-router-dom';

import { CheckLoggedIn } from '../CheckLogin';

export const Login = () => {


    const {isLoggedIn,setIsLoggedIn} = useContext(UserContext);

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = (e) => {
        postLogin({
            name: name,
            password: password,
        }).then((response) => {
            if(response.status === 200) {
                navigate('/');
                sessionStorage.setItem("session", "sessionID");
                setIsLoggedIn(CheckLoggedIn());
            }
        });
        
        e.preventDefault();
    }

    const logout = () => {
        sessionStorage.removeItem("session");
        setIsLoggedIn(CheckLoggedIn());
        navigate('/test');
    }

    
    console.log(isLoggedIn);
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <ul>
                    <li><input type="text" name="name" onChange={(e) => setName(e.target.value)}></input></li>
                    <li><input type="text" name="password" onChange={(e) => setPassword(e.target.value)}></input></li>
                    <li><input type="submit" value="Submit"></input></li>
                </ul>
            </form>
            <button onClick={(e)=> logout(e)}>Logout</button>
            <h3>name:{name}</h3>
            <h3>password:{password}</h3>
            <h3>{isLoggedIn ? "LoggedIn" : "not"}</h3>
            
        </>
    )
}