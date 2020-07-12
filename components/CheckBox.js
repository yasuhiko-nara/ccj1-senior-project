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

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
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
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">アクティビティを選びましょう！</FormLabel>
        <FormGroup row>
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
                checked={attractions}
                onChange={handleChange}
                name="attractions"
              />
            }
            label="アトラクション"
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
