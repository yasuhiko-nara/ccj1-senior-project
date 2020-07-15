import React, { useState, useCallback, useRef, useEffect } from "react";
import { useRouter } from "next/router";
// import { useSelector } from "react-redux";

import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import mapStyles from "./mapUtils/mapStyles";

const favoriteIcon =
  "https://firebasestorage.googleapis.com/v0/b/tidal-reactor-279300.appspot.com/o/kamo%2F%E3%83%8F%E3%83%BC%E3%83%88%E3%81%AE%E3%83%9E%E3%83%BC%E3%82%AF3.svg?alt=media&token=485153b6-3a71-4443-bf2f-b2eaf1d033e5";

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

export default function GoogleMapForFavoritePlaces({ favoritePlaces }) {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

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
        zoom={8}
        center={{
          lat: Number(router.query.lat) || 43.048225,
          lng: Number(router.query.lng) || 141.49701,
        }}
        options={options}
        // onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {favoritePlaces.map((marker, index) => (
          <Marker
            key={`${marker.location.lat * (index + 1)}`}
            position={{
              lat: marker.location.lat,
              lng: marker.location.lng,
            }}
            onMouseOver={() => {
              setSelected(marker);
            }}
            onClick={() => {
              setOpen(true);
            }}
            icon={{
              url: favoriteIcon,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          />
        ))}
      </GoogleMap>
    </div>
  );
}
