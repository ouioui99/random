import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckLoggedIn } from "../CheckLogin";
import { UserContext } from '../providers/UserProvider';
import {getRestraunt} from '../api/getRestrauntAxios';



export const MainHome = () => {

    const {isLoggedIn,setIsLoggedIn} = useContext(UserContext);
    const [referenceSite, setReferenceSite] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [url, setUrl] = useState("");
    const [lat, setLat] = useState("");
    const [lng, setLng] = useState("");

    const navigate = useNavigate();

    const clicked = () => {
        getRestraunt({
            referenceSite:referenceSite,
        }).then((response) => {
            setName(response.data.name);
            setAddress(response.data.address);
            setUrl(response.data.url);
            setLat(response.data.lat);
            setLng(response.data.lng);
        })
        // navigate('/test');
    }

    const logout = () => {
        sessionStorage.removeItem("session");
        setIsLoggedIn(CheckLoggedIn());
        navigate('/test');
    }

    return (
        <>
            <h1>MainHome</h1>
            <input type="text" name="referenceSite" onChange={(e) => setReferenceSite(e.target.value)}></input><br />
            <h3>{referenceSite}</h3>
            <h3>{name}</h3>
            <h3>{address}</h3>
            <h3>{url}</h3>
            <h3>{lat}</h3>
            <h3>{lng}</h3>
            <button onClick={clicked}>test</button>
            <button onClick={(e)=> logout(e)}>Logout</button>

        </>

    )
} 