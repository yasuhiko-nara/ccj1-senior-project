import React from "react";
// import "./App.css";
import { withScriptjs } from "react-google-maps";

import Map from "./GoogleMapDirection";

function App() {
  const MapLoader = withScriptjs(Map);
  const APIKey = process.env.REACT_APP_googleMapsApiKey;
  const googleMapURL = `https://maps.googleapis.com/maps/api/js?key=${APIKey}`;

  return (
    <div className="App">
      <header className="App-header"></header>
      <MapLoader
        googleMapURL={googleMapURL}
        loadingElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default App;
