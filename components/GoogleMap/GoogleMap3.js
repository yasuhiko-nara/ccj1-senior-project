import React, { useState, useCallback, useRef } from "react";
import { Button } from "@material-ui/core";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  DirectionsRenderer,
  DirectionsService,
} from "@react-google-maps/api";
import Search from "./Search";
import Locate from "./Locate";

import { formatRelative } from "date-fns";

import mapStyles from "./mapUtils/mapStyles";
import locations from "./mapUtils/locations";

const bikeIcon =
  "https://firebasestorage.googleapis.com/v0/b/tidal-reactor-279300.appspot.com/o/kamo%2F%E3%83%8F%E3%82%99%E3%82%A4%E3%82%AF%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3.svg?alt=media&token=260673d7-dafc-4496-b5d1-2a41ffab66a6";

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

export default function App() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_googleMapsApiKey,
    libraries,
  });
  const [markers, setMarkers] = useState(locations);
  const [selected, setSelected] = useState(null);
  const [response, setResponse] = useState(null);

  const onMapClick = useCallback((e) => {
    setMarkers((current) => [
      ...current,
      {
        name: "test",
        image: "https://i.postimg.cc/3wtRLxHM/9.jpg",
        location: {
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
        },
      },
    ]);
  }, []);

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(10);
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  const origin = { lat: 42.755955, lng: 141.32816 };
  const destination = { lat: 44.299023, lng: 141.65308 };

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

  return (
    <div>
      <Button color="primary">ATTRACTION</Button>
      <Button color="primary">RESTAURANT</Button>
      <Button color="primary">HOTEL</Button>
      <h1>
        バイク旅！ <span role="img" aria-label="bike"></span>
      </h1>

      <Locate panTo={panTo} />
      <Search panTo={panTo} />

      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {destination !== "" && origin !== "" && (
          <DirectionsService
            options={{
              origin,
              destination,
              travelMode: "DRIVING",
            }}
            callback={directionsCallback}
          />
        )}

        {response !== null && (
          <DirectionsRenderer
            options={{
              directions: response,
            }}
          />
        )}
        {markers.map((marker) => (
          <Marker
            key={`${marker.location.lat}-${marker.location.lng}`}
            position={{ lat: marker.location.lat, lng: marker.location.lng }}
            onMouseOver={() => {
              setSelected(marker);
            }}
            icon={{
              url: bikeIcon,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          />
        ))}

        {selected ? (
          <InfoWindow
            position={{
              lat: selected.location.lat,
              lng: selected.location.lng,
            }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>
                <span role="img" aria-label="bear">
                  {selected.name}
                </span>
              </h2>
              <img src={selected.image} />
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}
