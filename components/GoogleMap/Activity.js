import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Marker, InfoWindow } from "@react-google-maps/api";
import Checkbox from "@material-ui/core/Checkbox";
import { select_plan } from "../../redux/travels/action";

export default function Activity({ icon, show, activity }) {
  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const dispatch = useDispatch();

  return (
    <div>
      {show &&
        activity.map((marker) => (
          <Marker
            key={`${marker.location.lat}-${marker.location.lng}`}
            position={{ lat: marker.location.lat, lng: marker.location.lng }}
            onClick={() => {
              console.log(marker);
              setSelectedPlaces([...selectedPlaces, marker]);
            }}
            icon={{
              url: icon,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          />
        ))}

      {selectedPlaces.map((selectedPlace, index) => (
        <InfoWindow
          key={`${selectedPlace.location.lat - selectedPlace.location.lng}`}
          position={{
            lat: selectedPlace.location.lat,
            lng: selectedPlace.location.lng,
          }}
          onCloseClick={() => {
            const deletedSelectedPlaces = [...selectedPlaces];
            deletedSelectedPlaces.splice(index, 1);
            setSelectedPlaces([...deletedSelectedPlaces]);
          }}
        >
          <div>
            <h2>
              <Checkbox
                checked={selectedPlace.checked}
                onChange={(event) => {
                  dispatch(select_plan(event.target, selectedPlace));
                }}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <span role="img" aria-label="bear">
                {selectedPlace.name}
              </span>
            </h2>
            <img src={selectedPlace.image} />
          </div>
        </InfoWindow>
      ))}
    </div>
  );
}
