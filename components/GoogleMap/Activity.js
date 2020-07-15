import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Marker, InfoWindow } from "@react-google-maps/api";
import { Checkbox } from "@material-ui/core";
import { select_plan } from "../../redux/travels/action";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";

const restaurantIcon =
  "https://firebasestorage.googleapis.com/v0/b/tidal-reactor-279300.appspot.com/o/kamo%2F%E3%83%95%E3%82%A9%E3%83%BC%E3%82%AF%E3%81%A8%E3%83%8A%E3%82%A4%E3%83%95%E3%81%AE%E3%81%8A%E9%A3%9F%E4%BA%8B%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3%E7%B4%A0%E6%9D%90%20(1).svg?alt=media&token=ca319d7f-5a67-4207-856f-28fc75f6875f";

const activityIcon =
  "https://firebasestorage.googleapis.com/v0/b/tidal-reactor-279300.appspot.com/o/kamo%2F%E3%83%8F%E3%82%99%E3%82%A4%E3%82%AF%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3.svg?alt=media&token=260673d7-dafc-4496-b5d1-2a41ffab66a6";
const hotelIcon =
  "https://firebasestorage.googleapis.com/v0/b/tidal-reactor-279300.appspot.com/o/kamo%2F%E3%83%98%E3%82%99%E3%83%83%E3%83%88%E3%82%99%E3%81%AE%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B39.svg?alt=media&token=76f3bedd-c925-4561-b282-07b81a98a8e6";

export default function Activity({ activity, showAddPlanButton = true }) {
  const selectedActivities = useSelector(
    (state) => state.travels.selectedActivities
  );

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const dispatch = useDispatch();

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const selectIcon = (activityClass) => {
    if (activityClass === "restaurants") {
      return restaurantIcon;
    }
    if (activityClass === "attractions") {
      return activityIcon;
    }
    if (activityClass === "hotels") {
      return hotelIcon;
    }
  };

  return (
    <>
      {activity.map(
        (marker, index) =>
          selectedActivities[marker.activityClass] && (
            <>
              <Marker
                key={`${marker.location.lat * (index + 1)}`}
                position={{
                  lat: marker.location.lat,
                  lng: marker.location.lng,
                }}
                onMouseOver={() => {
                  setSelected(marker);
                }}
                onClick={() => {
                  setOpen(true);
                }}
                icon={{
                  url: selectIcon(marker.activityClass),
                  origin: new window.google.maps.Point(0, 0),
                  anchor: new window.google.maps.Point(15, 15),
                  scaledSize: new window.google.maps.Size(30, 30),
                }}
              />
            </>
          )
      )}

      {selected ? (
        <InfoWindow
          position={{
            lat: selected.location.lat,
            lng: selected.location.lng,
          }}
          onCloseClick={() => {
            setSelected(null);
          }}
        >
          <div>
            <h2>
              <span role="img" aria-label="bear">
                {selected.name}
              </span>
            </h2>
            <img src={selected.image} />
          </div>
        </InfoWindow>
      ) : null}
      <>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {selected ? selected.name : null}
          </DialogTitle>
          <DialogContent>
            {selected ? (
              <>
                <img src={selected.image} width="100%" />
                {/* DialogContentTextの中にテキスト以外（pタグやh2タグ）を入れるとエラーが起きるので修正しました */}
                {selected.reviews.map((review, index) => (
                  <div key={`${review.title}+${index}`}>
                    <Typography>{review.title}</Typography>
                    <DialogContentText id="alert-dialog-description">
                      {review.published_date}
                    </DialogContentText>
                    <Rating
                      name="read-only"
                      value={Number(review.rating)}
                      readOnly
                    />
                    <DialogContentText id="alert-dialog-description">
                      {review.text}
                    </DialogContentText>
                  </div>
                ))}
              </>
            ) : null}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              戻る
            </Button>
            {selected && showAddPlanButton && (
              <Button
                onClick={() => {
                  setOpen(false);
                  dispatch(select_plan(selected));
                }}
                color="primary"
                autoFocus
              >
                <strong>{selected.name}</strong>を追加
              </Button>
            )}
          </DialogActions>
        </Dialog>
      </>
    </>
  );
}
