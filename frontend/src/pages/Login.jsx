import React,{useState,useContext} from 'react';
import { UserContext } from '../providers/UserProvider';
import {postLogin} from '../api/userAxios'

export const Login = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = (e) => {
        postLogin({
            name: name,
            password: password,
        }).then((response) => {
            if(response.status === 200) {
                setIsLoggedIn(true);
            }
        });
        
    }

    const {isLoggedIn,setIsLoggedIn} = useContext(UserContext);
    console.log(isLoggedIn);
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={(e) => handleSubmit(e)} action="test">
                <ul>
                    <li><input type="text" name="name" onChange={(e) => setName(e.target.value)}></input></li>
                    <li><input type="text" name="password" onChange={(e) => setPassword(e.target.value)}></input></li>
                    <li><input type="submit" value="Submit"></input></li>
                </ul>
            </form>
            <h3>name:{name}</h3>
            <h3>password:{password}</h3>
            <h3>{isLoggedIn ? "LoggedIn" : "not"}</h3>
            
        </>
    )
}