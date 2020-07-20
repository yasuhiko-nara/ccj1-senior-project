import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Marker, InfoWindow, MarkerClusterer } from "@react-google-maps/api";
import { select_plan } from "../../redux/travels/action";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import CheckForFavorite from "./CheckForFavorite";

const restaurantIcon =
  "https://firebasestorage.googleapis.com/v0/b/tidal-reactor-279300.appspot.com/o/googlemap%2F%E3%83%95%E3%82%A9%E3%83%BC%E3%82%AF%E3%81%A8%E3%83%8A%E3%82%A4%E3%83%95%E3%81%AE%E3%81%8A%E9%A3%9F%E4%BA%8B%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3%E7%B4%A0%E6%9D%90.png?alt=media&token=d388c830-5887-446b-a4a0-7a223187c94e";

const activityIcon =
  "https://firebasestorage.googleapis.com/v0/b/tidal-reactor-279300.appspot.com/o/googlemap%2F%E4%B9%97%E7%94%A8%E8%BB%8A%E3%81%AE%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3%E7%B4%A0%E6%9D%901.png?alt=media&token=6e692394-1880-488f-b6a9-efdf8718f9b1";
const hotelIcon =
  "https://firebasestorage.googleapis.com/v0/b/tidal-reactor-279300.appspot.com/o/googlemap%2F%E5%AE%BF%E6%B3%8A%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B32.png?alt=media&token=bfff456b-c267-4ab1-8121-e329deba3b56";

const favoriteIcon =
  "https://firebasestorage.googleapis.com/v0/b/tidal-reactor-279300.appspot.com/o/kamo%2F%E3%83%8F%E3%83%BC%E3%83%88%E3%81%AE%E3%83%9E%E3%83%BC%E3%82%AF3.svg?alt=media&token=485153b6-3a71-4443-bf2f-b2eaf1d033e5";

export default function Activity({ showAddPlanButton = true }) {
  const activities = useSelector((state) =>
    state.travels.restaurants
      .concat(state.travels.attractions)
      .concat(state.travels.hotels)
  );
  const selectedActivities = useSelector(
    (state) => state.travels.selectedActivities
  );

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const dispatch = useDispatch();

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const selectIcon = useCallback((activity) => {
    if (activity.like) {
      return favoriteIcon;
    }
    if (activity.activityClass === "restaurants") {
      return restaurantIcon;
    }
    if (activity.activityClass === "attractions") {
      return activityIcon;
    }
    if (activity.activityClass === "hotels") {
      return hotelIcon;
    }
  }, []);

  // const options = {
  //   imagePath:
  //     "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  //   // so you must have m1.png, m2.png, m3.png, m4.png, m5.png and m6.png in that folder
  // };

  const clusterStyles = [
    {
      textColor: "white",
      url:
        "https://firebasestorage.googleapis.com/v0/b/tidal-reactor-279300.appspot.com/o/googlemap%2Frakutabi%20(1).png?alt=media&token=a190fa50-bb19-4eb1-b425-cb236ae7970b",
      height: 50,
      width: 50,
    },
    {
      textColor: "white",
      url:
        "https://firebasestorage.googleapis.com/v0/b/tidal-reactor-279300.appspot.com/o/googlemap%2Frakutabi%20(1).png?alt=media&token=a190fa50-bb19-4eb1-b425-cb236ae7970b",
      height: 50,
      width: 50,
    },
    {
      textColor: "white",
      url:
        "https://firebasestorage.googleapis.com/v0/b/tidal-reactor-279300.appspot.com/o/googlemap%2Frakutabi%20(1).png?alt=media&token=a190fa50-bb19-4eb1-b425-cb236ae7970b",
      height: 50,
      width: 50,
    },
  ];
  const options = {
    gridSize: 50,
    styles: clusterStyles,
    maxZoom: 15,
  };

  return (
    <>
      <MarkerClusterer options={options}>
        {(clusterer) =>
          activities.map(
            (marker, index) =>
              selectedActivities[marker.activityClass] && (
                <Marker
                  key={`${
                    marker.location.lat * marker.location.lng * (index + 1)
                  }`}
                  clusterer={clusterer}
                  position={{
                    lat: Number(marker.location.lat),
                    lng: Number(marker.location.lng),
                  }}
                  onMouseOver={() => {
                    setSelected(marker);
                  }}
                  onClick={() => {
                    setOpen(true);
                  }}
                  icon={
                    // {
                    //   anchor: new google.maps.Point(0, 0),

                    //   labelOrigin: new google.maps.Point(30, 30),
                    //   path: google.maps.SymbolPath.CIRCLE,
                    //   scale: 10,
                    // }
                    {
                      url: selectIcon(marker),
                      origin: new window.google.maps.Point(0, 0),
                      anchor: new window.google.maps.Point(15, 15),
                      scaledSize: new window.google.maps.Size(30, 30),
                    }
                  }
                />
              )
          )
        }
      </MarkerClusterer>
      {selected ? (
        <InfoWindow
          position={{
            lat: Number(selected.location.lat),
            lng: Number(selected.location.lng),
          }}
          onCloseClick={() => {
            setSelected(null);
          }}
        >
          <div>
            <h2>
              <CheckForFavorite activity={selected} />
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
                <img src={selected.bigImage || selected.image} width="100%" />
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
