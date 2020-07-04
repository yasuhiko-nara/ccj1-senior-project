import React from "react";
import { withScriptjs } from "react-google-maps";

import Map from "./GoogleMapDirection2";

export default function () {
  const MapLoader = withScriptjs(Map);
  const APIKey = process.env.REACT_APP_googleMapsApiKey;
  const googleMapURL = `https://maps.googleapis.com/maps/api/js?key=${APIKey}`;

  return (
    <div className="App">
      <MapLoader
        googleMapURL={googleMapURL}
        loadingElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
