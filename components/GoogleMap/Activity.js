import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Marker, InfoWindow } from "@react-google-maps/api";
import Checkbox from "@material-ui/core/Checkbox";
import { select_plan } from "../../redux/travels/action";

export default function Activity({ icon, show, activity }) {
  const [selected, setSelected] = useState(null);
  const dispatch = useDispatch();

  return (
    <div>
      {show &&
        activity.map((marker, index) => (
          <>
            <Marker
              key={`${marker.location.lat}-${marker.location.lng}`}
              position={{ lat: marker.location.lat, lng: marker.location.lng }}
              onMouseOver={() => {
                setSelected(marker);
              }}
              icon={{
                url: icon,
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15),
                scaledSize: new window.google.maps.Size(30, 30),
              }}
            />
            {selected && (
              <InfoWindow
                key={`${marker.location.lat}-${marker.location.lng}`}
                position={{
                  lat: marker.location.lat,
                  lng: marker.location.lng,
                }}
                // onCloseClick={() => {
                //   const deletedSelectedPlaces = [...selectedPlaces];
                //   deletedSelectedPlaces.splice(index, 1);
                //   setSelectedPlaces([...deletedSelectedPlaces]);
                // }}
              >
                <div>
                  <h2>
                    <Checkbox
                      key={`${marker.location.lat}-${marker.location.lng}`}
                      checked={marker.checked}
                      onChange={(event) => {
                        dispatch(select_plan(event.target, marker));
                        console.log("checked!", marker.checked);
                      }}
                      inputProps={{ "aria-label": "primary checkbox" }}
                    />
                    <span role="img" aria-label="bear">
                      {marker.name}
                    </span>
                  </h2>
                  <img src={marker.image} />
                </div>
              </InfoWindow>
            )}
          </>
        ))}
    </div>
  );
}
