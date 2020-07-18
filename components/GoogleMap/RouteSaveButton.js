import axios from "axios";

import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  // delete_schedules_and_route,
  save_route_name,
} from "../../redux/travels/action";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function () {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [routeName, setRouteName] = useState();

  const dispatch = useDispatch();
  const userLoginFlag = useSelector((state) => state.users.loginFlag);
  const userId = useSelector((state) => state.users.userId);
  const userName = useSelector((state) => state.users.userName);
  const idToken = useSelector((state) => state.users.idToken);
  const currentDirection = useSelector(
    (state) => state.travels.currentDirection
  );
  const routeInfo = useSelector((state) => state.travels.routeInfo);
  const schedules = useSelector((state) => state.travels.schedules);
  const data = {
    action: "save",
    userName,
    userId,
    schedules,
    route: routeInfo,
    routeName,
  };

  const handleClickOpen = useCallback(() => {
    setDialogOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setDialogOpen(false);
  }, []);

  const handleNameChange = useCallback((e) => {
    setRouteName(e.target.value);
  }, []);

  const saveRoute = useCallback(async () => {
    const opt = {
      method: "post",
      headers: {
        Authorization: idToken,
      },
      url: "/savedRoutes",
      data,
    };
    const res = await axios(opt);
    console.log(res);
    if (res.status === 200) {
      console.log("alert");
      alert("ルートが保存されました！ユーザーページで確認しましょう✔️");
      // dispatch(delete_schedules_and_route());
      dispatch(save_route_name(routeName));
    }
    console.log("saved route data and this is the response", res.data);
    setDialogOpen(false);
  }, [data]);

  return (
    <>
      {userLoginFlag && currentDirection && (
        <>
          <Button variant="contained" color="primary" onClick={handleClickOpen}>
            ルート保存
          </Button>
          <Dialog
            open={dialogOpen}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">ルートを保存</DialogTitle>
            <DialogContent>
              <DialogContentText>
                計画したルートに名前をつけましょう！
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="ルート名"
                type="email"
                fullWidth
                onChange={handleNameChange}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                キャンセル
              </Button>
              <Button onClick={saveRoute} color="primary">
                保存する
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </>
  );
}
