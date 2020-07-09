import React, { useState, useCallback, useRef } from "react";
import { DirectionsRenderer, DirectionsService } from "@react-google-maps/api";

export default function Direction() {
  const [response, setResponse] = useState(null);
  const origin = { lat: 42.755955, lng: 141.32816 };
  const point2 = {
    location: { lat: 43.66406, lng: 142.85445 },
    stopover: true,
  };
  const point3 = { location: { lat: 43.906742, lng: 144.79872 } };
  const point4 = { location: { lat: 43.286533, lng: 143.18524 } };
  const destination = { lat: 45.299023, lng: 141.65308 };
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
    <>
      <DirectionsService
        options={{
          origin,
          destination,
          travelMode: "DRIVING",
          optimizeWaypoints: true,
          waypoints: [point2, point3, point4],
        }}
        callback={directionsCallback}
      />
      {response !== null && (
        <DirectionsRenderer
          options={{
            directions: response,
          }}
        />
      )}
    </>
  );
}
