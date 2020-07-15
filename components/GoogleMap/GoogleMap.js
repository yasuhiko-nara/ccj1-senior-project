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

const restaurantIcon =
  "https://firebasestorage.googleapis.com/v0/b/tidal-reactor-279300.appspot.com/o/kamo%2F%E3%83%95%E3%82%A9%E3%83%BC%E3%82%AF%E3%81%A8%E3%83%8A%E3%82%A4%E3%83%95%E3%81%AE%E3%81%8A%E9%A3%9F%E4%BA%8B%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3%E7%B4%A0%E6%9D%90%20(1).svg?alt=media&token=ca319d7f-5a67-4207-856f-28fc75f6875f";

const activityIcon =
  "https://firebasestorage.googleapis.com/v0/b/tidal-reactor-279300.appspot.com/o/kamo%2F%E3%83%8F%E3%82%99%E3%82%A4%E3%82%AF%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3.svg?alt=media&token=260673d7-dafc-4496-b5d1-2a41ffab66a6";
const hotelIcon =
  "https://firebasestorage.googleapis.com/v0/b/tidal-reactor-279300.appspot.com/o/kamo%2F%E3%83%98%E3%82%99%E3%83%83%E3%83%88%E3%82%99%E3%81%AE%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B39.svg?alt=media&token=76f3bedd-c925-4561-b282-07b81a98a8e6";

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

  const selectedActivities = useSelector(
    (state) => state.travels.selectedActivities
  );
  const restaurants = useSelector((state) => state.travels.restaurants);
  const attractions = useSelector((state) => state.travels.attractions);
  const hotels = useSelector((state) => state.travels.hotels);

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
        <Activity
          show={selectedActivities.restaurants}
          activity={restaurants}
          icon={restaurantIcon}
        />
        <Activity
          show={selectedActivities.attractions}
          activity={attractions}
          icon={activityIcon}
        />
        <Activity
          show={selectedActivities.hotels}
          activity={hotels}
          icon={hotelIcon}
        />
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
