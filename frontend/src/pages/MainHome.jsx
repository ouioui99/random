import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckLoggedIn } from "../CheckLogin";
import { UserContext } from '../providers/UserProvider';
import {getRestraunt} from '../api/getRestrauntAxios';
import {MyComponent} from '../components/GoogleMap';

import Header from "../components/materialUi/Header";
import {GloabalButton} from '../components/materialUi/Button';


export const MainHome = () => {

    useEffect(() => {
        setIsLoggedIn(CheckLoggedIn());
    },[])

    const {isLoggedIn,setIsLoggedIn} = useContext(UserContext);
    const [referenceSite, setReferenceSite] = useState("");
    const [genreCode, setGenreCode] = useState("");
    const [bugetCode, setBugetCode] = useState("");

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [url, setUrl] = useState("");
    const [lat, setLat] = useState(35.69575);
    const [lng, setLng] = useState(139.77521);
    const [catchPhrase, setCatchPhrase] = useState("");
    const [genre, setGenre] = useState("");

    const navigate = useNavigate();

    const GoogleApiKey = process.env.React_APP_GOOGLE_MAP_API;

    const clicked = () => {
        getRestraunt({
            referenceSite:referenceSite,
            genreCode:genreCode,
            bugetCode:bugetCode,
        }).then((response) => {
            if(response.status===200) {
                console.log("OK");
                setName(response.data.name);
                setAddress(response.data.address);
                setUrl(response.data.url);
                setLat(parseFloat(response.data.lat));
                setLng(parseFloat(response.data.lng));
                setCatchPhrase(response.data.catchPhrase);
                setGenre(response.data.genre);
            } else {
                alert("検索結果が見つかりませんでした");
            }
        })
        // navigate('/test');
    }



    return (
        <>
            <Header></Header>
            <h1>MainHome</h1>
            <input type="text" name="referenceSite" onChange={(e) => setReferenceSite(e.target.value)}></input><br />
            <select name="genre" onChange={(e) => setGenreCode(e.target.value)}>
                <option value="">--Please choose an option--</option>
                <option value="G001">居酒屋</option>
                <option value="G002">ダイニングバー・バル</option>
                <option value="G003">創作料理</option>
                <option value="G004">和食</option>
                <option value="G005">洋食</option>
                <option value="G006">イタリアン・フレンチ</option>
                <option value="G007">中華</option>
                <option value="G008">焼肉・ホルモン</option>
                <option value="G017">韓国料理</option>
                <option value="G009">アジア・エスニック料理</option>
                <option value="G010">各国料理</option>
                <option value="G011">カラオケ・パーティ</option>
                <option value="G012">バー・カクテル</option>
                <option value="G013">ラーメン</option>
                <option value="G016">お好み焼き・もんじゃ</option>
                <option value="G014">カフェ・スイーツ</option>
                <option value="G015">その他グルメ</option>
            </select>
            <select name="budget" onChange={(e) => setBugetCode(e.target.value)}>
                <option value="">--Please choose an option--</option>
                <option value="B009,B010">~1000</option>
                <option value="B011">1001~1500</option>
                <option value="B001">1501~2000</option>
                <option value="B002,B003">2001~4000</option>
                <option value="B008,B004">4001~7000</option>
                <option value="B005">7001~10000</option>
                <option value="B006">10001~15000</option>
                <option value="B012">15001~20000</option>
                <option value="B013">20001~30000</option>
                <option value="B014">30001~</option>
            </select>
            <button onClick={clicked}>検索</button>
            <h3>{referenceSite}</h3>
            
            <h3>{address}</h3>
            <a href={url}><h3>{name}</h3></a>
            <h3>{lat}</h3>
            <h3>{lng}</h3>
            <h3>{catchPhrase}</h3>
            <h3>{genre}</h3>
            <MyComponent lat={lat} lng={lng}/>


        </>

    )
} 