import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { like_activity } from "../../redux/travels/action";
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

export default function CheckboxesGroup({ activity }) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(like_activity(activity));
  };

  return (
    <div>
      <FormControl>
        <FormGroup row className={classes.formControl}>
          <FormControlLabel
            control={
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                checked={activity.like}
                onChange={handleChange}
              />
            }
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}
