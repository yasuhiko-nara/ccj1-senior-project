import React from "react";
import { useSelector } from "react-redux";
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

export default function FavoritePlaces({ favoritePlaces }) {
  const classes = useStyles();
  const userName = useSelector((state) => state.users.userName);

  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            {userName}さんのお気に入りの場所一覧
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Breadcrumb schedules={favoritePlaces} />
        </AccordionDetails>
      </Accordion>
    </>
  );
}
