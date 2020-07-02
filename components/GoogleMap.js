import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100vw",
  height: "calc(100vh - 80px)",
};

const center = {
  lat: 43,
  lng: 145,
};

function MyComponent() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBM-UMdy6RjiH06ehfm2XNw9v5PTtUXt8M">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={7}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyComponent);
