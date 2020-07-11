import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";

import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Card from "./Card";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Breadcrumb({ schedules }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {schedules.map((activity, index) => (
          <Card
            key={`${activity.location.lat * (index + 1)}`}
            name={activity.name}
            image={activity.image}
            location={activity.location}
            place={activity.place}
            category={activity.category}
            reviews={activity.reviews}
            rating={activity.rating}
          />
        ))}
      </Breadcrumbs>
    </div>
  );
}
