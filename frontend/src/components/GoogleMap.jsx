import React, { useState, useEffect, Fragment } from "react";
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
  lat: 35.69731,
  lng: 139.7747,
};

const markerTest = { lat: 35.681236, lng: 139.767125 };

const GoogleMapsApiKey = process.env.React_APP_GOOGLE_MAP_API;

export const GoogleMapComponent = (props) => {
  const referenceSiteLat = Number(props.referenceSitePosition.lat);
  const referenceSiteLng = Number(props.referenceSitePosition.lng);
  const resultLat = Number(props.resultLat);
  const resultlng = Number(props.resultlng);

  const [referenceSiteMarkerPositions, setReferenceSiteMarkerPositions] =
    useState([]);

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    console.log(referenceSiteMarkerPositions.length);
    setReferenceSiteMarkerPositions([
      ...referenceSiteMarkerPositions,
      { lat: referenceSiteLat, lng: referenceSiteLng, visible: visible },
    ]);
    //下記方法だとなぜか3つ以降のmarkerが表示されなくなってしまう、、
    // if (referenceSiteMarkerPositions.length > 1) {
    //   setVisible(
    //     (referenceSiteMarkerPositions[
    //       referenceSiteMarkerPositions.length - 1
    //     ].visible = false)
    //   );
    // }
    // console.log(referenceSiteMarkerPositions);
  }, [props]);

  return (
    <>
      <LoadScript googleMapsApiKey={GoogleMapsApiKey}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {referenceSiteMarkerPositions.map((marker, index) => {
            //referenceSiteMarkerPositionsの一番新しいものだけをMarkerとして返却する
            return referenceSiteMarkerPositions.length == index + 1 ? (
              <Marker key={index} position={marker} visible={marker.visible} />
            ) : (
              <Fragment key={index}></Fragment>
            );
          })}
        </GoogleMap>
      </LoadScript>
    </>
  );
};
