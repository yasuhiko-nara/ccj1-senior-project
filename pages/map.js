import _ from "lodash";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { get_initial_status } from "../redux/travels/action";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Map from "../components/GoogleMap/GoogleMap";
import CheckBox from "../components/CheckBox";
import Schedules from "../components/Schedules";
import Navbar from "../components/Navbar";
import SpotList from "../components/SpotList";

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

const map = (props) => {
  const dispatch = useDispatch();
  const initialState = JSON.parse(props.data);
  const userLoginFlag = useSelector((state) => state.users.loginFlag);
  const userId = useSelector((state) => state.users.userId);
  const idToken = useSelector((state) => state.users.idToken);

  useEffect(() => {
    if (!userLoginFlag) {
      console.log("now loading initial status");
      dispatch(get_initial_status(initialState, []));
    }

    if (userLoginFlag) {
      console.log("now loading my favorite places");
      const opt = {
        method: "get",
        params: {
          userId,
        },
        headers: {
          Authorization: idToken,
        },
        url: "/favoriteSpot",
      };
      axios(opt).then((res) => {
        const favoritePlacesWithoutDuplication = _.uniqBy(
          JSON.parse(res.data.body),
          JSON.stringify
        );
        console.log(
          "this is my favoite places :",
          favoritePlacesWithoutDuplication
        );
        dispatch(
          get_initial_status(initialState, favoritePlacesWithoutDuplication)
        );
      });
    }
  }, [userLoginFlag]);

  const classes = useStyles();
  const router = useRouter();

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
        <Grid container fixed spacing={2}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Navbar />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography variant="h4" gutterBottom>
                たびを計画する
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <CheckBox />
            </Paper>
          </Grid>
          {mapToList ? (
            router.query.pref !== "" ? (
              <>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <SpotList spotsOfTargetPref={attractionsOfTargetPref} />
                    <SpotList spotsOfTargetPref={restaurantsOfTargetPref} />
                    <SpotList spotsOfTargetPref={hotelsOfTargetPref} />
                  </Paper>
                </Grid>
              </>
            ) : (
              <p id="message">都道府県を選んでください</p>
            )
          ) : (
            <>
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

      <style jsx>{`
        #message {
          margin-left: 25px;
        }
      `}</style>
    </>
  );
};

export default map;
