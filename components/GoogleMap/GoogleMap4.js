import React, { useState, useCallback, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import Direction from "./Direction";

import Search from "./Search";
import Locate from "./Locate";
import Activity from "./Activity";

import mapStyles from "./mapUtils/mapStyles";

const restaurantIcon =
  "https://firebasestorage.googleapis.com/v0/b/tidal-reactor-279300.appspot.com/o/kamo%2F%E3%83%95%E3%82%A9%E3%83%BC%E3%82%AF%E3%81%A8%E3%83%8A%E3%82%A4%E3%83%95%E3%81%AE%E3%81%8A%E9%A3%9F%E4%BA%8B%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3%E7%B4%A0%E6%9D%90%20(1).svg?alt=media&token=ca319d7f-5a67-4207-856f-28fc75f6875f";

const bikeIcon =
  "https://firebasestorage.googleapis.com/v0/b/tidal-reactor-279300.appspot.com/o/kamo%2F%E3%83%8F%E3%82%99%E3%82%A4%E3%82%AF%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3.svg?alt=media&token=260673d7-dafc-4496-b5d1-2a41ffab66a6";
const hotelIcon =
  "https://firebasestorage.googleapis.com/v0/b/tidal-reactor-279300.appspot.com/o/kamo%2F%E3%83%98%E3%82%99%E3%83%83%E3%83%88%E3%82%99%E3%81%AE%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B39.svg?alt=media&token=76f3bedd-c925-4561-b282-07b81a98a8e6";

const libraries = ["places"];
const mapContainerStyle = {
  height: "100vh",
  width: "100vw",
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 43.048225,
  lng: 141.49701,
};

export default function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_googleMapsApiKey,
    libraries,
  });
  const dispatch = useDispatch();

  // const selectedPlace = useSelector((state) => state.selectedPlace);
  const selectedActivities = useSelector(
    (state) => state.travels.selectedActivities
  );
  const restaurants = useSelector((state) => state.travels.restaurants);
  const attractions = useSelector((state) => state.travels.attractions);
  const hotels = useSelector((state) => state.travels.hotels);

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(10);
  }, []);

  const directionsCallback = (googleResponse) => {
    if (googleResponse) {
      if (response) {
        if (
          googleResponse.status === "OK" &&
          googleResponse.routes.overview_polyline !==
            response.routes.overview_polyline
        ) {
          setResponse(() => googleResponse);
        } else {
          console.log("response: ", googleResponse);
        }
      } else {
        if (googleResponse.status === "OK") {
          setResponse(() => googleResponse);
        } else {
          console.log("response: ", googleResponse);
        }
      }
    }
  };
  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>
      <Locate panTo={panTo} />
      <Search panTo={panTo} />

      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
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
          icon={bikeIcon}
        />
        <Activity
          show={selectedActivities.hotels}
          activity={hotels}
          icon={hotelIcon}
        />
        <Direction />
      </GoogleMap>
    </div>
  );
}
