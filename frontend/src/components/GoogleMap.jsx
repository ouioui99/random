import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 35.69575,
  lng: 139.77521,
};

const GoogleMapsApiKey = process.env.React_APP_GOOGLE_MAP_API;

export const GoogleMapComponent = (props) => {
  const referenceSiteLat = Number(props.referenceSiteLat);
  const referenceSiteLng = Number(props.referenceSiteLng);
  const resultLat = Number(props.resultLat);
  const resultlng = Number(props.resultlng);

  const [referenceSiteMarkerPositions, setReferenceSiteMarkerPositions] =
    useState([]);

  const [resultMarkerPositions, setResultMarkerPositions] = useState([]);

  useEffect(() => {
    // setReferenceSiteMarkerPositions([
    //   ...referenceSiteMarkerPositions,
    //   {
    //     lat: referenceSiteLat,
    //     lng: referenceSiteLng,
    //   },
    // ]);
    // referenceSiteMarkerPositions.shift();
    // console.log(referenceSiteMarkerPositions);
    console.log("ok");
  }, [props]);

  return (
    <>
      <LoadScript googleMapsApiKey={GoogleMapsApiKey}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          {referenceSiteMarkerPositions.map((marker) => {
            return <Marker position={marker} />;
          })}
        </GoogleMap>
      </LoadScript>
    </>
  );
};
