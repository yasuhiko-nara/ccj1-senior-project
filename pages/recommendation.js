import _ from "lodash";
import axios from "axios";
import { useState, useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { get_favorite_places, get_my_routes } from "../redux/travels/action";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Navbar from "../components/Navbar";
// import FavoritePlaces from "../components/FavoritePlaces";
import SingleLineGridListOfMaps from "../components/SingleLineGridListOfMaps";
// import GoogleMapForFavoritePlaces from "../components/GoogleMap/GoogleMapForFavoritePlaces";
// import GoogleMapForRouteView from "../components/GoogleMap/GoogleMapForRouteVIew";

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

  const classes = useStyles();

  const getRecommendRoutes = useCallback(() => {
    console.log(
      "now loading route recommend and this can be fetched by anybody"
    );

    const opt = {
      method: "get",
      params: {
        prefecture: "青森県",
      },
      url: "/routes",
    };

    axios(opt).then((res) => {
      const removeDuplication = _.uniqBy(
        JSON.parse(res.data.body),
        JSON.stringify
      );
      console.log(removeDuplication);
    });
  }, []);

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Navbar />
            </Paper>
          </Grid>

          <Grid item xs={12}>
            {myRoutesAndSchedules && myRoutesAndSchedules.length > 0 && (
              <SingleLineGridListOfMaps
                // favoritePlaces={favoritePlaces}
                myRoutesAndSchedules={myRoutesAndSchedules}
              />
            )}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default recommend;
