import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Breadcrumb from "./Breadcrumb";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function ScheduleOfADay({ schedules, routeInfo }) {
  const classes = useStyles();
  const distanceInKm =
    routeInfo.length > 0
      ? Math.round(
          routeInfo
            .map((route) => route.distance.value)
            .reduce((prev, curr) => prev + curr) / 1000
        )
      : null;
  const durationInSec =
    routeInfo.length > 0
      ? routeInfo
          .map((route) => route.duration.value)
          .reduce((prev, curr) => prev + curr)
      : null;

  const durationTime = durationInSec
    ? new Date(durationInSec * 1000).toISOString().substr(11, 8)
    : null;

  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            移動距離：{distanceInKm}km
          </Typography>

          <Typography className={classes.heading}>
            所要時間：{durationTime}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Breadcrumb schedules={schedules} routeInfo={routeInfo} />
        </AccordionDetails>
      </Accordion>
    </>
  );
}
