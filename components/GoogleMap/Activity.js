import React, { useState } from "react";

import { Marker, InfoWindow } from "@react-google-maps/api";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function Activity({ icon, show, activity }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {show &&
        activity.map((marker) => (
          <Marker
            key={`${marker.location.lat}-${marker.location.lng}`}
            position={{ lat: marker.location.lat, lng: marker.location.lng }}
            onMouseOver={() => {
              console.log(marker);
              setSelected(marker);
            }}
            onClick={handleClickOpen}
            icon={{
              url: icon,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          />
        ))}

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
            <DialogContentText id="alert-dialog-description">
              {selected ? (
                <div>
                  <img src={selected.image} width="100%" />
                  {selected.reviews.map((review) => (
                    <div>
                      <h2>{review.title}</h2>
                      <p>{review.published_date}</p>
                      <p>{review.rating}</p>
                      <p>{review.text}</p>
                    </div>
                  ))}
                </div>
              ) : null}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              戻る
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              追加する
            </Button>
          </DialogActions>
        </Dialog>
      </>
    </div>
  );
}
