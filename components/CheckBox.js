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
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

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
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                checked={attractions}
                onChange={handleChange}
                name="attractions"
              />
            }
            label="観光スポット"
          />
          <FormControlLabel
            control={
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                checked={restaurants}
                onChange={handleChange}
                name="restaurants"
              />
            }
            label="レストラン"
          />
          <FormControlLabel
            control={
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                checked={hotels}
                onChange={handleChange}
                name="hotels"
              />
            }
            label="ホテル"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}
