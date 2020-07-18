import React from "react";
// import Carousel from "react-multi-carousel";

import { makeStyles } from "@material-ui/core/styles";
// import GridList from "@material-ui/core/GridList";
// import GridListTile from "@material-ui/core/GridListTile";
// import GridListTileBar from "@material-ui/core/GridListTileBar";
// import IconButton from "@material-ui/core/IconButton";
// import StarBorderIcon from "@material-ui/icons/StarBorder";
import GoogleMapForFavoritePlaces from "../components/GoogleMap/GoogleMapForFavoritePlaces";
import SingleLineGridList from "./SingleLineGridList";
import ScheduleOfADayOfMaps from "./ScheduleOfADayOfMaps";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  icon: {
    color: "white",
  },
}));

export default function SingleLineGridListOfMaps({
  // favoritePlaces,
  myRoutesAndSchedules,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <GridList spacing={20} className={classes.gridList} cols={2.5}> */}
      {myRoutesAndSchedules.map((routesAndSchedule, index) => (
        <div key={`${index}`}>
          {routesAndSchedule.schedules.length > 2 && routesAndSchedule.route && (
            <>
              <ScheduleOfADayOfMaps
                routeInfo={routesAndSchedule.route}
                routeName={routesAndSchedule.routeName}
                userName={routesAndSchedule.userName}
              />
              <SingleLineGridList
                schedules={routesAndSchedule.schedules}
                routeInfo={routesAndSchedule.route}
              />
            </>
          )}
          <GoogleMapForFavoritePlaces
            // favoritePlaces={favoritePlaces}
            myRoute={routesAndSchedule.schedules}
            routeInfo={routesAndSchedule.route}
          />
          <div>ここにスペースを作る </div>
          <div>ここにスペースを作る </div>
          <div>ここにスペースを作る </div>
          <div>ここにスペースを作る </div>
        </div>
      ))}
      {/* </GridList> */}
    </div>
  );
}
