import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 35.69575,
  lng: 139.77521,
};

const positionAkiba = {
    lat: 35.69575,
    lng: 139.77521,
  };


  const markerLabelAkiba = {
    color: "white",
    fontFamily: "sans-serif",
    fontSize: "15px",
    fontWeight: "100",
    text: "5",
  };


const GoogleMapsApiKey = process.env.React_APP_GOOGLE_MAP_API;

export const MyComponent = (props) => {

    const [position, setPosition] = useState({lat:props.lat,lng:props.lng});


    // useEffect(() => {
    //     /* 第1引数には実行させたい副作用関数を記述*/
    //     setPosition({lat: props.lat,lng: props.lng})
    //     console.log('副作用関数が実行されました！')
    //     },[props]) // 第2引数には副作用関数の実行タイミングを制御する依存データを記述

    return (
    <LoadScript googleMapsApiKey={GoogleMapsApiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={7}>
        {/* <Marker position={positionAkiba} label={markerLabelAkiba} /> */}
      </GoogleMap>
    </LoadScript>
    );
};
