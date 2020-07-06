import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
// import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";

const styles = {
  width: "100vw",
  height: "calc(100vh - 80px)",
  position: "absolute",
};

const MapboxGLMap = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;
    const initializeMap = (setMap, mapContainer) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [146, 43],
        zoom: 6,
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap(setMap, mapContainer);
  }, [map]); // mapが変更されたときのみ、再レンダーされる

  return <div ref={(el) => (mapContainer.current = el)} style={styles} />;
};

export default MapboxGLMap;
