import axios from "axios";
import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { like_activity } from "../../redux/travels/action";
import { makeStyles } from "@material-ui/core/styles";
import {
  // FormLabel,
  // FormControl,
  // FormGroup,
  // FormControlLabel,
  // FormHelperText,
  Checkbox,
} from "@material-ui/core";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles(() => ({
  formControl: {
    alignItems: "center",
  },
}));

export default function CheckboxesGroup({ activity }) {
  const classes = useStyles();

  const userLoginFlag = useSelector((state) => state.users.loginFlag);
  const userId = useSelector((state) => state.users.userId);
  const idToken = useSelector((state) => state.users.idToken);
  const dispatch = useDispatch();

  const handleChange = useCallback(() => {
    dispatch(like_activity(activity));
    if (!activity.like && userLoginFlag) {
      const opt = {
        method: "post",
        headers: {
          Authorization: idToken,
        },
        url: "/favoriteSpot",
        data: {
          action: "save",
          userId,
          favoriteSpot: activity,
        },
      };
      axios(opt);
    }
  });

  return (
    // <div>
    //   <FormControl>
    //     <FormGroup row className={classes.formControl}>
    //       <FormControlLabel
    //         control={
    //           <Checkbox
    //             icon={<FavoriteBorder />}
    //             checkedIcon={<Favorite />}
    //             checked={activity.like}
    //             onChange={handleChange}
    //           />
    //         }
    //       />
    //     </FormGroup>
    //   </FormControl>
    // </div>

    // ♡の位置の変更をしました
    <Checkbox
      icon={<FavoriteBorder />}
      checkedIcon={<Favorite />}
      checked={activity.like}
      onChange={handleChange}
    />
  );
}
