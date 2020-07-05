import React, { useState, useCallback, useRef } from "react";
const homeIcon =
  "https://firebasestorage.googleapis.com/v0/b/tidal-reactor-279300.appspot.com/o/kamo%2F%E3%83%9B%E3%83%BC%E3%83%A0%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3.jpeg?alt=media&token=10731173-077b-4d14-b3c1-6866cb01bf29";

export default function List({ panTo }) {
  return (
    <button
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      <img src={homeIcon} alt="home" />
    </button>
  );
}
