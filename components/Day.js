import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Card from "./Card";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function Day({
  day = 1,
  schedules = [
    {
      activityClass: "restaurants",
      day: 1,
      checked: false,

      place: "hokkaido",
      location: { lat: 43.048583, lng: 141.318944 },
      name: "testRestaurants1",
      image: "https://i.postimg.cc/3wtRLxHM/9.jpg",
      category: "",
      reviews: [
        {
          titile: "test1",
          text: "testtesttesttesttest",
          rating: "4",
          published_data: "2020-02-22T20:52:08-05:00",
        },
        {
          titile: "test1",
          text: "testtesttesttesttest",
          rating: "4",
          published_data: "2020-02-22T20:52:08-05:00",
        },
        {
          titile: "test1",
          text: "testtesttesttesttest",
          rating: "4",
          published_data: "2020-02-22T20:52:08-05:00",
        },
      ],
      rating: 1.7,
    },
  ],
}) {
  const classes = useStyles();

  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Day {day}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {schedules.map((activity) => (
            <Card
              key={`${activity.location.lat}-${activity.location.lng}`}
              name={activity.name}
              image={activity.image}
              location={activity.location}
              place={activity.place}
              category={activity.category}
              reviews={activity.reviews}
              rating={activity.rating}
            />
          ))}
        </AccordionDetails>
      </Accordion>
    </>
  );
}
