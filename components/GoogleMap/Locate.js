import React, { useState, useCallback, useRef } from "react";
const homeIcon =
  "https://firebasestorage.googleapis.com/v0/b/tidal-reactor-279300.appspot.com/o/kamo%2F%E5%AE%B6%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3.svg?alt=media&token=fcf22311-0af1-40d9-a106-8c871ec72687";

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
