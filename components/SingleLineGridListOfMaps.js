import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
// import GridListTile from "@material-ui/core/GridListTile";
// import GridListTileBar from "@material-ui/core/GridListTileBar";
// import IconButton from "@material-ui/core/IconButton";
// import StarBorderIcon from "@material-ui/icons/StarBorder";
import GoogleMapForFavoritePlaces from "../components/GoogleMap/GoogleMapForFavoritePlaces";
import SingleLineGridList from "./SingleLineGridList";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.success.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));
const icon =
  "https://firebasestorage.googleapis.com/v0/b/tidal-reactor-279300.appspot.com/o/kamo%2F%E3%83%8F%E3%82%99%E3%82%A4%E3%82%AF%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3.svg?alt=media&token=260673d7-dafc-4496-b5d1-2a41ffab66a6";

export default function SingleLineGridListOfMaps({
  // favoritePlaces,
  myRoutesAndSchedules,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList spacing={10} className={classes.gridList} cols={2.5}>
        {myRoutesAndSchedules.map((routesAndSchedule, index) => (
          <div key={`${index}`}>
            {routesAndSchedule.schedules.length > 2 &&
              routesAndSchedule.route && (
                <SingleLineGridList
                  schedules={routesAndSchedule.schedules}
                  routeInfo={routesAndSchedule.route}
                />
              )}
            <GoogleMapForFavoritePlaces
              // favoritePlaces={favoritePlaces}
              myRoute={routesAndSchedule.schedules}
              routeInfo={routesAndSchedule.route}
            />
          </div>
        ))}
      </GridList>
    </div>
  );
}
