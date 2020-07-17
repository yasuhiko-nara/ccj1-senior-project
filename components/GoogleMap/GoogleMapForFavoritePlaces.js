import React, { useCallback, useRef } from "react";
import { useRouter } from "next/router";

import DirectionForUserPage from "./DirectionForUserPage";

import ActivityForFavoritePlaces from "./ActivityForFavoritePlaces";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

import mapStyles from "./mapUtils/mapStyles";

const libraries = ["places"];
const mapContainerStyle = {
  height: "60vh",
  width: "100vw",
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

export default function GoogleMapForFavoritePlaces({ myRoute }) {
  const origin = myRoute[0].location;
  const destination = myRoute[myRoute.length - 1].location;
  const activityLocations = myRoute
    .slice(1, myRoute.length - 1)
    .map((activity) => {
      return { location: activity.location };
    });

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_googleMapsApiKey,
    libraries,
  });

  const router = useRouter();

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={6}
        center={{
          lat: Number(router.query.lat) || 40,
          lng: Number(router.query.lng) || 138,
        }}
        options={options}
        // onClick={onMapClick}
        onLoad={onMapLoad}
      >
        <ActivityForFavoritePlaces />

        {myRoute.length > 2 && (
          <DirectionForUserPage
            origin={origin}
            destination={destination}
            activityLocations={activityLocations}
          />
        )}
      </GoogleMap>
    </div>
  );
}
