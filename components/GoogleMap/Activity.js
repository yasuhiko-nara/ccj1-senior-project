import React, { useState } from "react";

import { Marker, InfoWindow } from "@react-google-maps/api";

export default function Activity({ icon, show, activity }) {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      {show &&
        activity.map((marker) => (
          <Marker
            key={`${marker.location.lat}-${marker.location.lng}`}
            position={{ lat: marker.location.lat, lng: marker.location.lng }}
            onMouseOver={() => {
              setSelected(marker);
            }}
            icon={{
              url: icon,
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
    </div>
  );
}
