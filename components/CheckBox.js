import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { select_activities } from "../redux/travels/action";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
  Checkbox,
} from "@material-ui/core";

import {
  Favorite,
  FavoriteBorder,
  LocationOn,
  CheckBox,
  CheckBoxOutlineBlank,
} from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  formControl: {
    alignItems: "center",
  },
}));

export default function CheckboxesGroup() {
  const classes = useStyles();

  const selectedActivities = useSelector(
    (state) => state.travels.selectedActivities
  );
  const { restaurants, attractions, hotels } = selectedActivities;

  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(select_activities(event.target));
  };

  return (
    <div>
      <FormControl>
        <FormGroup row className={classes.formControl}>
          <FormLabel component="legend" style={{ marginRight: "50px" }}>
            アクティビティを選びましょう！
          </FormLabel>
          <FormControlLabel
            control={
              <Checkbox
                checked={attractions}
                onChange={handleChange}
                name="attractions"
                color="primary"
              />
            }
            label="観光スポット"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={restaurants}
                onChange={handleChange}
                name="restaurants"
                color="primary"
              />
            }
            label="レストラン"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={hotels}
                onChange={handleChange}
                name="hotels"
                color="primary"
              />
            }
            label="ホテル"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}
