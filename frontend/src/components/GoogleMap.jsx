import React, { useState, useEffect, Fragment } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { breakpoints } from "@mui/system";

const containerStyle = {
  width: "100%",
  height: "92%",
};

const GoogleMapsApiKey = process.env.React_APP_GOOGLE_MAP_API;

export const GoogleMapComponent = (props) => {
  const referenceSiteLat = Number(props.referenceSitePosition.lat);
  const referenceSiteLng = Number(props.referenceSitePosition.lng);
  const resultLat = Number(props.resultSitePosition.lat);
  const resultlng = Number(props.resultSitePosition.lng);

  //地図の中心state
  const [centerPosition, setCenterPosition] = useState({
    lat: 35.69575,
    lng: 139.77521,
  });
  //検索基準地座標
  const [referenceSiteMarkerPositions, setReferenceSiteMarkerPositions] =
    useState([]);
  //検索結果座標
  const [resultSitePositions, setResultSitePositions] = useState([]);

  //地図拡大state
  const [zoom, setZoom] = useState(5);

  useEffect(() => {
    setZoom(5);
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

    //初回以降はmapのセンターをmarkerの部分に変更する
    if (props.rendering && props.searched) {
      setCenterPosition({ lat: referenceSiteLat, lng: referenceSiteLng });

      //検索範囲によって地図の縮尺を変更する
      switch (props.range) {
        case "3":
          setZoom(15);
          break;
        case "4":
          setZoom(14);
          break;
        case "5":
          setZoom(13);
          break;
        default:
          setZoom(16);
          break;
      }
    } else if (props.rendering) {
      setCenterPosition({ lat: referenceSiteLat, lng: referenceSiteLng });
      setZoom(16);
    }

    //初回レンダリングにtrueへ
    props.setRendering(true);
  }, [props.referenceSitePosition, props.resultSitePosition, props.searched]);

  return (
    <>
      <LoadScript googleMapsApiKey={GoogleMapsApiKey}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={centerPosition}
          zoom={zoom}
        >
          {/* 検索基準地のmarker */}
          {/* referenceSiteMarkerPositionsの一番新しいものだけをMarkerとして返却する */}
          {referenceSiteMarkerPositions.map((marker, index) => {
            return referenceSiteMarkerPositions.length == index + 1 ? (
              <Marker key={index} position={marker} />
            ) : (
              <Fragment key={index}></Fragment>
            );
          })}

          {/* 検索結果のmarker */}
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
