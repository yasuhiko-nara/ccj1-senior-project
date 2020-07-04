import React, { useState, useEffect } from "react";

import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import locations from "./locations";

const containerStyle = {
  width: "100vw",
  height: "calc(100vh - 80px)",
};

const center = {
  lat: 43,
  lng: 145,
};

function MyComponent() {
  const [selected, setSelected] = useState({});
  const [currentPosition, setCurrentPosition] = useState(center);

  useEffect(() => {
    console.log(currentPosition);
  }, []);

  const onSelect = (item) => {
    console.log(item);
    setSelected(item);
  };
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_googleMapsApiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={currentPosition}
        zoom={7}
      >
        {locations.map((item) => {
          return (
            <Marker
              key={item.name}
              position={item.location}
              onClick={() => onSelect(item)}
            />
          );
        })}
        {selected.location && (
          <InfoWindow
            position={selected.location}
            clickable={true}
            onCloseClick={() => setSelected({})}
          >
            <p>{selected.name}</p>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyComponent);
