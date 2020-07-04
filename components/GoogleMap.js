import React, { useState, useEffect } from "react";

import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100vw",
  height: "calc(100vh - 80px)",
};

const center = {
  lat: 43,
  lng: 145,
};

const locations = [
  { name: "北海道開拓の村", location: { lat: 43.048225, lng: 141.49701 } },
  { name: "北海道神宮", location: { lat: 43.05472, lng: 141.3081 } },
  {
    name: "北海道博物館 森のちゃれんが",
    location: { lat: 43.05278, lng: 141.49663 },
  },
  { name: "北海道庁旧本庁舎", location: { lat: 43.063976, lng: 141.34799 } },
  {
    name: "北海道フーディスト 八重洲店",
    location: { lat: 35.679752, lng: 139.7687 },
  },
  { name: "すすきの", location: { lat: 43.055588, lng: 141.35333 } },
  {
    name: "三井アウトレットパーク 札幌北広島",
    location: { lat: 42.97171, lng: 141.4716 },
  },
  {
    name: "天に続く道 名もなき展望台",
    location: { lat: 43.906742, lng: 144.79872 },
  },
  { name: "円山公園", location: { lat: 43.054855, lng: 141.31409 } },
  { name: "博物館 網走監獄", location: { lat: 43.99598, lng: 144.22884 } },
  { name: "旭岳", location: { lat: 43.66406, lng: 142.85445 } },
  { name: "北海道野幌森林公園", location: { lat: 43.0552, lng: 141.49393 } },
  { name: "ナイタイ高原牧場", location: { lat: 43.286533, lng: 143.18524 } },
  { name: "小樽市総合博物館", location: { lat: 43.211437, lng: 141.00075 } },
  {
    name: "さっぽろ羊ヶ丘展望台",
    location: { lat: 42.998825, lng: 141.39531 },
  },
  { name: "オロロンライン", location: { lat: 44.299023, lng: 141.65308 } },
  { name: "支笏湖", location: { lat: 42.755955, lng: 141.32816 } },
  {
    name: "ジェットコースターの路",
    location: { lat: 43.520485, lng: 142.43042 },
  },
  { name: "北海道大学植物園", location: { lat: 43.063354, lng: 141.34515 } },
  { name: "北海道ラーメン道場", location: { lat: 42.787685, lng: 141.68025 } },
];

function MyComponent() {
  const [selected, setSelected] = useState({});
  const [currentPosition, setCurrentPosition] = useState(center);

  useEffect(() => {
    console.log(currentPosition);
  }, []);

  const onSelect = (item) => {
    console.log(item);
    setSelected(item);
  };
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_googleMapsApiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={currentPosition}
        zoom={7}
      >
        {locations.map((item) => {
          return (
            <Marker
              key={item.name}
              position={item.location}
              onClick={() => onSelect(item)}
            />
          );
        })}
        {selected.location && (
          <InfoWindow
            position={selected.location}
            clickable={true}
            onCloseClick={() => setSelected({})}
          >
            <p>{selected.name}</p>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyComponent);
