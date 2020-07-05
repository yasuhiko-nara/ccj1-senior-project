import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  DirectionsRenderer,
} from "react-google-maps";
import locations from "./mapUtils/locations";

export default function () {
  const [directions, setDirections] = useState(null);
  const defaultCenter = locations[0].location;
  const origin = locations[1].location;
  const destination = locations[2].location;

  useEffect(() => {
    const directionsService = new google.maps.DirectionsService();

    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING,
        waypoints: [
          {
            location: new google.maps.LatLng(
              locations[3].location.lat,
              locations[3].location.lng
            ),
          },
          {
            location: new google.maps.LatLng(
              locations[7].location.lat,
              locations[7].location.lng
            ),
          },
          {
            location: new google.maps.LatLng(
              locations[8].location.lat,
              locations[8].location.lng
            ),
          },
          {
            location: new google.maps.LatLng(
              locations[9].location.lat,
              locations[9].location.lng
            ),
          },
          {
            location: new google.maps.LatLng(
              locations[10].location.lat,
              locations[10].location.lng
            ),
          },
        ],
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          console.log(result);
          setDirections(result);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  }, []);

  const GoogleMapExample = withGoogleMap((props) => (
    <GoogleMap defaultCenter={defaultCenter} defaultZoom={13}>
      <DirectionsRenderer directions={directions} />
    </GoogleMap>
  ));

  return (
    <div>
      <GoogleMapExample
        containerElement={<div style={{ height: `500px`, width: "500px" }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
