import React, { useState,useContext }from 'react';
import { UserContext } from '../providers/UserProvider';
import {postSignup} from '../api/userAxios';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {

    const {isLoggedIn,setIsLoggedIn} = useContext(UserContext);

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConf, setPasswordConf] = useState("");

    const handleSubmit = (e) => {
        if (password === passwordConf) {
            postSignup({
                name: name,
                password: password
            }).then((response) => {
                if(response.status === 200) {
                    navigate('/')
                    setIsLoggedIn(true);
                };
            })
        } else {
            alert("NG");
        }
        
        e.preventDefault();
    }

    return (
        <>
            <h1>Signup</h1>
            <form  onSubmit={(e) => handleSubmit(e)}>
                <ul>
                    <li><input type="text" name="name" value={name} required onChange={(e) => setName(e.target.value)}></input></li>
                    <li><input type="text" name="password" value={password} required onChange={(e) => setPassword(e.target.value)}></input></li>
                    <li><input type="text" name="passwordConf" value={passwordConf} required onChange={(e) => setPasswordConf(e.target.value)}></input></li>
                    <li><input type="submit" value="Submit"></input></li>
                </ul>
            </form>
            <h3>name:{name}</h3>
            
        </>
    )
}