import React from "react";
import Carousel from "react-multi-carousel";

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
    height: 700,
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

export default function SingleLineGridListOfMaps({
  // favoritePlaces,
  myRoutesAndSchedules,
}) {
  const classes = useStyles();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={classes.root}>
      <GridList spacing={20} className={classes.gridList} cols={2.5}>
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
