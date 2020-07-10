import React, { useState, useCallback, useRef } from "react";
import { DirectionsRenderer, DirectionsService } from "@react-google-maps/api";

export default function Direction({ origin, destination, activityLocations }) {
  const [response, setResponse] = useState(null);

  //   const origin = { lat: 42.755955, lng: 141.32816 };
  //   const destination = { lat: 45.299023, lng: 141.65308 };
  //   const activityLocations = [
  //     {
  //       location: { lat: 43.66406, lng: 142.85445 },
  //       stopover: true,
  //     },
  //     { location: { lat: 43.906742, lng: 144.79872 } },
  //     { location: { lat: 43.286533, lng: 143.18524 } },
  //   ];

  const directionsCallback = useCallback((googleResponse) => {
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
  });
  return (
    <>
      <DirectionsService
        options={{
          origin,
          destination,
          travelMode: "DRIVING",
          optimizeWaypoints: true,
          waypoints: activityLocations,
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
