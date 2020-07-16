import axios from "axios";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { get_initial_status } from "../redux/travels/action";
import { toggle_display } from "../redux/travels/action";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AutorenewTwoToneIcon from "@material-ui/icons/AutorenewTwoTone";

import Map from "../components/GoogleMap/GoogleMap";
import CheckBox from "../components/CheckBox";
import Schedules from "../components/Schedules";
import Navbar from "../components/Navbar";
import SpotList from "../components/SpotList";
import GoogleMapForRouteView from "../components/GoogleMap/GoogleMapForRouteVIew";

export async function getStaticProps() {
  console.log("server");
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
  const classes = useStyles();
  const router = useRouter();
  const currentDirection = useSelector(
    (state) => state.travels.currentDirection
  );

  const initialState = JSON.parse(props.data);
  console.log("aaa", initialState);
  const dispatch = useDispatch();
  dispatch(get_initial_status(initialState));

  const mapToList = useSelector((store) => store.travels.toggleDisplay);

  const restaurantsOfTargetPref = initialState.restaurants.filter(
    (restaurant) => restaurant.prefecture === router.query.pref
  );
  const attractionsOfTargetPref = initialState.attractions.filter(
    (attraction) => attraction.prefecture === router.query.pref
  );
  const hotelsOfTargetPref = initialState.hotels.filter(
    (hotel) => hotel.prefecture === router.query.pref
  );
  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Navbar />
            </Paper>
          </Grid>
          {mapToList ? (
            <>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <SpotList spotsOfTargetPref={attractionsOfTargetPref} />
                  <SpotList spotsOfTargetPref={restaurantsOfTargetPref} />
                  <SpotList spotsOfTargetPref={hotelsOfTargetPref} />
                </Paper>
              </Grid>
              <Grid item xs={0.5}>
                <Paper>
                  <AutorenewTwoToneIcon
                    onClick={() => dispatch(toggle_display())}
                    variant="contained"
                    style={{ fontSize: "70px" }}
                  />
                </Paper>
              </Grid>
            </>
          ) : (
            <>
              <Grid item xs={11}>
                <Paper className={classes.paper}>
                  <CheckBox />
                </Paper>
              </Grid>
              <Grid item xs={0.5}>
                <Paper>
                  <AutorenewTwoToneIcon
                    onClick={() => dispatch(toggle_display())}
                    variant="contained"
                    style={{ fontSize: "70px" }}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Schedules />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Map />
                </Paper>
              </Grid>
            </>
          )}
        </Grid>
      </div>
      {/* <GoogleMapForRouteView myRoute={currentDirection} /> */}
    </>
  );
};

export default Index;
