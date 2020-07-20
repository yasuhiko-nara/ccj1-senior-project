import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { select_activities } from "../redux/travels/action";
import { makeStyles } from "@material-ui/core/styles";
import { toggle_display } from "../redux/travels/action";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';

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

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-flex",
    alignItems: "center",
  },
  formControl: {
    alignItems: "center",
    textAlign:"center",
  },
  button: {
    margin: "10px"
  },
  row: {
    flexDirection: 'row',
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
  const matches = useMediaQuery('(min-width:600px)');
  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
      <FormLabel component="legend" >
            アクティビティを選びましょう！
          </FormLabel>
        <FormGroup  className={clsx(
        classes.root,
        {
          [classes.row]: matches,
        },
       
      )}>
          {/* <FormLabel component="legend" style={{ marginRight: "50px" }}>
            アクティビティを選びましょう！
          </FormLabel> */}
          <FormControlLabel
            control={
              <Checkbox
                checked={attractions}
                onChange={handleChange}
                name="attractions"
                color="primary"
              />
            }
            label={matches ? "観光スポットㅤ": "観光スポット"}

            // label="観光スポット"
          />
          <FormControlLabel
            // className={classes.list}
            control={
              <Checkbox
                checked={restaurants}
                onChange={handleChange}
                name="restaurants"
                color="primary"
              />
            }
            label={matches ? "レストランㅤ": "レストランㅤ"}
            // label="レストランㅤ"
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
            label={matches ? "ホテル　": "ホテルㅤㅤㅤ"}
          />
        </FormGroup>
        <Button className={classes.button} variant="contained" color="primary" disableElevation onClick={() => dispatch(toggle_display())}>
      ⇄表示の切替⇆</Button>
      </FormControl>
      <Grid>
      {/* <button　className={classes.button} onClick={() => dispatch(toggle_display())}>⇄表示の切替⇆</button> */}
      {/* <Button className={classes.button} variant="contained" color="primary" disableElevation onClick={() => dispatch(toggle_display())}>
      ⇄表示の切替⇆</Button> */}
      </Grid>
    </div>
  );
}
