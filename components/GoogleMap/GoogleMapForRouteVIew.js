import React, { useState, useCallback, useRef, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import { useRouter } from "next/router";

import {
  GoogleMap,
  useLoadScript,
  DirectionsRenderer,
} from "@react-google-maps/api";

import Activity from "./Activity";

import mapStyles from "./mapUtils/mapStyles";

const favoriteIcon =
  "https://firebasestorage.googleapis.com/v0/b/tidal-reactor-279300.appspot.com/o/kamo%2F%E3%83%95%E3%82%A9%E3%83%BC%E3%82%AF%E3%81%A8%E3%83%8A%E3%82%A4%E3%83%95%E3%81%AE%E3%81%8A%E9%A3%9F%E4%BA%8B%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3%E7%B4%A0%E6%9D%90%20(1).svg?alt=media&token=ca319d7f-5a67-4207-856f-28fc75f6875f";

const libraries = ["places"];
const mapContainerStyle = {
  height: "60vh",
  width: "100vw",
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

export default function GooleMapForRouteView({ myRoute }) {
  const userId = useSelector((state) => state.users.userId);
  const idToken = useSelector((state) => state.users.idToken);
  const [favoriteActivities, setFavoriteActivities] = useState([]);
  useEffect(() => {
    const opt = {
      method: "get",
      params: {
        userId: userId,
      },
      headers: {
        Authorization: idToken,
      },
      url: `https://b8aalc26tj.execute-api.ap-northeast-1.amazonaws.com/favoriteSpot`,
    };
    axios(opt).then((res) => setFavoriteActivities(JSON.parse(res.data.body)));
  }, []);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_googleMapsApiKey,
    libraries,
  });

  const router = useRouter();

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={{
          lat: Number(router.query.lat) || 43.048225,
          lng: Number(router.query.lng) || 141.49701,
        }}
        options={options}
        onLoad={onMapLoad}
      >
        {myRoute && (
          <DirectionsRenderer
            options={{
              directions: myRoute,
            }}
          />
        )}

        <Activity
          showAddPlanButton={false}
          show={favoriteActivities.length > 0}
          activity={favoriteActivities}
          icon={favoriteIcon}
        />
      </GoogleMap>
    </div>
  );
}
