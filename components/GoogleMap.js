import React, { useState, useEffect } from "react";

import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100vw",
  height: "calc(100vh - 80px)",
};

const center = {
  lat: 43,
  lng: 145,
};
const locations = [
  {
    name: "Location 1",
    location: {
      lat: 43,
      lng: 142,
    },
  },
  {
    name: "Location 2",
    location: {
      lat: 43,
      lng: 142.2,
    },
  },
  {
    name: "Location 3",
    location: {
      lat: 43,
      lng: 142.4,
    },
  },
  {
    name: "Location 4",
    location: {
      lat: 43,
      lng: 142.6,
    },
  },
  {
    name: "Location 5",
    location: {
      lat: 43,
      lng: 142.8,
    },
  },
];

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
    <LoadScript googleMapsApiKey="AIzaSyBM-UMdy6RjiH06ehfm2XNw9v5PTtUXt8M">
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
