import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { get_locations, select_activities } from "../redux/travels/action";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
  Checkbox,
} from "@material-ui/core";

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
  //   const [state, setState] = React.useState({
  //     restaurants: true,
  //     attractions: false,
  //     hotels: false,
  //   });
  const selectedActivities = useSelector(
    (state) => state.travels.selectedActivities
  );
  const { restaurants, attractions, hotels } = selectedActivities;

  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(select_activities(event.target));
    // setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
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
                checked={hotels}
                onChange={handleChange}
                name="hotels"
              />
            }
            label="ホテル"
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
    </div>
  );
}
