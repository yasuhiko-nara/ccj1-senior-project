import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { get_initial_status } from "../redux/travels/action";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Map from "../components/GoogleMap/GoogleMap";
import CheckBox from "../components/CheckBox";
import Schedules from "../components/Schedules";
import Navbar from "../components/Navbar";

export async function getStaticProps() {
  const res = await axios.get(
    "https://ala5g0w56m.execute-api.ap-northeast-1.amazonaws.com/Rakutabi_API"
  );
  const data = JSON.stringify(res.data);
  return {
    props: {
      data,
    },
  };
}

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

const Index = (props) => {
  // const name = useSelector((store) => store.users.name);
  const classes = useStyles();

  const initialState = JSON.parse(props.data);
  const dispatch = useDispatch();
  dispatch(get_initial_status(initialState));

  return (
    <>
      {/* <div>
        <Navbar />
        <CheckBox />
        <Map />
        <Schedules />
      </div> */}
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Navbar />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <CheckBox />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Map />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              {" "}
              <Schedules />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Index;
