import React, { useState, useEffect, Fragment } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const GoogleMapsApiKey = process.env.React_APP_GOOGLE_MAP_API;

export const GoogleMapComponent = (props) => {
  const referenceSiteLat = Number(props.referenceSitePosition.lat);
  const referenceSiteLng = Number(props.referenceSitePosition.lng);
  const resultLat = Number(props.resultSitePosition.lat);
  const resultlng = Number(props.resultSitePosition.lng);

  const [centerPosition, setCenterPosition] = useState({
    lat: 35.69575,
    lng: 139.77521,
  });

  const [referenceSiteMarkerPositions, setReferenceSiteMarkerPositions] =
    useState([]);

  const [resultSitePositions, setResultSitePositions] = useState([]);

  const [test, setTest] = useState(false);

  useEffect(() => {
    if (test) {
      setCenterPosition({ lat: referenceSiteLat, lng: referenceSiteLng });
    }
    //検索する基準地の座標
    setReferenceSiteMarkerPositions([
      ...referenceSiteMarkerPositions,
      { lat: referenceSiteLat, lng: referenceSiteLng },
    ]);

    //ランダムで表示された結果の座標
    setResultSitePositions([
      ...resultSitePositions,
      { lat: resultLat, lng: resultlng },
    ]);
    //visibleオプションで制御する下記方法だとなぜか3つ以降のmarkerが表示されなくなってしまう、、
    // if (referenceSiteMarkerPositions.length > 1) {
    //   setVisible(
    //     (referenceSiteMarkerPositions[
    //       referenceSiteMarkerPositions.length - 1
    //     ].visible = false)
    //   );
    // }
    // console.log(referenceSiteMarkerPositions);
    setTest(true);
  }, [props]);

  return (
    <>
      <LoadScript googleMapsApiKey={GoogleMapsApiKey}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={centerPosition}
          zoom={10}
        >
          {referenceSiteMarkerPositions.map((marker, index) => {
            //referenceSiteMarkerPositionsの一番新しいものだけをMarkerとして返却する
            return referenceSiteMarkerPositions.length == index + 1 ? (
              <Marker key={index} position={marker} />
            ) : (
              <Fragment key={index}></Fragment>
            );
          })}
          {resultSitePositions.map((marker, index) => {
            return resultSitePositions.length == index + 1 ? (
              <Marker key={index} position={marker} />
            ) : (
              <Fragment key={index}></Fragment>
            );
          })}
        </GoogleMap>
      </LoadScript>
    </>
  );
};
