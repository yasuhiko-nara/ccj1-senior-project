import _ from "lodash";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import Button from "@material-ui/core/Button";

import Navbar from "../components/Navbar";

import SingleLineGridListOfMaps from "../components/SingleLineGridListOfMaps";
// import ScheduleOfADayOfMaps from "../components/ScheduleOfADayOfMaps"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const recommend = (props) => {
  const [myRoutesAndSchedules, setMyRoutesAndSchedules] = useState(null);
  const targetPrefecture = useSelector((state) => state.map.targetPrefecture);

  const classes = useStyles();

  useEffect(() => {
    if (targetPrefecture.pref) {
      console.log(`now loading recommend of ${targetPrefecture.pref} `);
      const opt = {
        method: "get",
        params: {
          prefecture: targetPrefecture.pref,
        },
        url: "/routes",
      };
      axios(opt).then((res) => {
        const removeDuplication = _.uniqBy(
          JSON.parse(res.data.body),
          JSON.stringify
        );
        console.log(removeDuplication);
        setMyRoutesAndSchedules(removeDuplication);
      });
    }
  }, [targetPrefecture]);

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Navbar />
            </Paper>
          </Grid>
          {!targetPrefecture.pref && (
            <Grid>
              <h2>都道府県を選んでください</h2>
            </Grid>
          )}
          {targetPrefecture.pref && (
            <Grid item xs={12}>
              {myRoutesAndSchedules && myRoutesAndSchedules.length > 0 && (
                <SingleLineGridListOfMaps
                  // favoritePlaces={favoritePlaces}
                  myRoutesAndSchedules={myRoutesAndSchedules}
                />
                // <ScheduleOfADayOfMaps myRoutesAndSchedules={myRoutesAndSchedules} />
              )}
            </Grid>
          )}
        </Grid>
      </div>
    </>
  );
};

export default recommend;
