import _ from "lodash";
import axios from "axios";
import { useState, useCallback } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Navbar from "../components/Navbar";
// import FavoritePlaces from "../components/FavoritePlaces";
import SingleLineGridListOfMaps from "../components/SingleLineGridListOfMaps";
import { SocialSentimentSatisfied } from "material-ui/svg-icons";
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
      setMyRoutesAndSchedules(removeDuplication);
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
          <Button
            variant="contained"
            color="primary"
            onClick={getRecommendRoutes}
          >
            青森のルート取得
          </Button>

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
