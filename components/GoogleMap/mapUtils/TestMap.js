import React, { useState, useCallback, useRef, useEffect } from "react";

import {
  TrafficLayer,
  TransitLayer,
  BicyclingLayer,
} from "@react-google-maps/api";

export default function TestMap() {
  const onTrafficLayerLoad = useCallback((trafficLayer) => {
    console.log("trafficLayer: ", trafficLayer);
  });
  const onTransitLayerLoad = useCallback((transitLayer) => {
    console.log("transitLayer: ", transitLayer);
  });
  const onBicyclingLayerLoad = useCallback((bicyclingLayer) => {
    console.log("bicyclingLayer: ", bicyclingLayer);
  });

  return (
    <>
      <TrafficLayer onLoad={onTrafficLayerLoad} />
      {/* <TransitLayer onLoad={onTransitLayerLoad} /> */}
      <BicyclingLayer onLoad={onBicyclingLayerLoad} />
    </>
  );
}
