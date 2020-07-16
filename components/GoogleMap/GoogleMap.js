import React, { useState, useCallback, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useRouter } from "next/router";

import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import Direction from "./Direction";
import TestMap from "./mapUtils/TestMap";

import Search from "./Search";
// import Locate from "./Locate";
// import RouteDeleteButton from "./RouteDeleteButtun";
import Activity from "./Activity";
import mapStyles from "./mapUtils/mapStyles";

const libraries = ["places"];
const mapContainerStyle = {
  height: "60vh",
  width: "100vw",
};
// const mapContainerStyle = {
//   height: "600px",
//   width: "1000px",
// };
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

export default function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_googleMapsApiKey,
    libraries,
  });
  const dispatch = useDispatch();

  const router = useRouter();

  const origin = useSelector((state) => {
    const schedules = state.travels.schedules;
    return schedules.length > 2 ? schedules[0].location : null;
  });
  const destination = useSelector((state) => {
    const schedules = state.travels.schedules;
    return schedules.length > 2
      ? schedules[schedules.length - 1].location
      : null;
  });
  const activityLocations = useSelector((state) => {
    const schedules = state.travels.schedules;
    return schedules.length > 2
      ? schedules.slice(1, schedules.length - 1).map((activity) => {
          return { location: activity.location };
        })
      : null;
  });

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);
  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(10);
  }, []);
  //再レンダーを必要としないステートの管理はuseRef+useCallbackをつかう
  //https://www.to-r.net/media/react-tutorial-hooks-useref/

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>
      {/* <Locate panTo={panTo} /> */}
      {/*<Search panTo={panTo} />*/}
      {/* <RouteDeleteButton /> */}

      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={{
          lat: Number(router.query.lat) || 43.048225,
          lng: Number(router.query.lng) || 141.49701,
        }}
        options={options}
        // onClick={onMapClick}
        onLoad={onMapLoad}
      >
        <Activity />

        {origin && destination && activityLocations && (
          <Direction
            origin={origin}
            destination={destination}
            activityLocations={activityLocations}
          />
        )}

        {/* <TestMap /> */}
      </GoogleMap>
    </div>
  );
}
