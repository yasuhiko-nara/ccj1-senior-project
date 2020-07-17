import React, { useState, useCallback } from "react";
import { DirectionsRenderer, DirectionsService } from "@react-google-maps/api";

export default function DirectionForUserPage({
  origin,
  destination,
  activityLocations,
}) {
  const [currentDirection, setCurrentDirection] = useState(null);

  const directionsCallback = useCallback((googleResponse) => {
    if (googleResponse) {
      if (currentDirection) {
        if (
          googleResponse.status === "OK" &&
          googleResponse.geocoded_waypoints.length !==
            currentDirection.geocoded_waypoints.length
        ) {
          console.log(
            "case1: new wayPoint is added, response =>: ",
            googleResponse
          );
          setCurrentDirection(googleResponse);
        } else {
          console.log(
            "case2: stop rendering by unchanging state to avoid infiinit loop, response =>: ",
            googleResponse
          );
        }
      } else {
        if (googleResponse.status === "OK") {
          console.log(
            "case3: third place is located, response =>",
            googleResponse
          );
          setCurrentDirection(googleResponse);
        } else {
          console.log("case4: error, response => ", googleResponse);
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
      {currentDirection !== null && (
        <DirectionsRenderer
          options={{
            directions: currentDirection,
          }}
        />
      )}
    </>
  );
}
