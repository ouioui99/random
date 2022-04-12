import React, { useState }from 'react';
import {postSignup} from '../api/userAxios';

export const Signup = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConf, setPasswordConf] = useState("");
    const [signup, setSignup] = useState({
        name: name,
        password: password,
    })

    const handleSubmit = (e) => {
        if (password === passwordConf) {
            setSignup({
                name: name,
                password: password,
            })
            postSignup(signup).then((data) => {
                console.log(data);
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
                    <li><input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}></input></li>
                    <li><input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)}></input></li>
                    <li><input type="text" name="passwordConf" value={passwordConf} onChange={(e) => setPasswordConf(e.target.value)}></input></li>
                    <li><input type="submit" value="Submit"></input></li>
                </ul>
            </form>
            <h3>name:{name}</h3>
            <h3>param name:{signup.name}</h3>
            
        </>
    )
}