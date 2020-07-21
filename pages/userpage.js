import _ from "lodash";
import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { get_favorite_places, get_my_routes } from "../redux/travels/action";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Navbar from "../components/Navbar";
import FavoriteSpotList from "../components/FavoriteSpotList";
import ScheduleForUserPage from "../components/ScheduleForUserPage";

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

const userpage = (props) => {
  const userLoginFlag = useSelector((state) => state.users.loginFlag);
  const userId = useSelector((state) => state.users.userId);
  const idToken = useSelector((state) => state.users.idToken);
  const favoritePlaces = useSelector((state) => state.travels.favoritePlaces);
  const myRoutesAndSchedules = useSelector(
    (state) => state.travels.myRoutesAndSchedules
  );

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("now loading my favorite places");
    if (userLoginFlag) {
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
        const removeDuplication = _.uniqBy(
          JSON.parse(res.data.body),
          JSON.stringify
        );
        dispatch(get_favorite_places(removeDuplication));
      });
    }
    console.log("now loading my favorite routes");
    if (userLoginFlag) {
      const opt = {
        method: "get",
        params: {
          userId,
        },
        headers: {
          Authorization: idToken,
        },
        url: `/savedRoutes`,
      };
      axios(opt).then((res) => {
        console.log(res.data.body);
        const myRoutesAndSchedules = res.data.body;

        dispatch(get_my_routes(myRoutesAndSchedules));
      });
    }
  }, []);

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Navbar />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography variant="h4" gutterBottom>
                みんなの旅をみる
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <FavoriteSpotList spotsOfTargetPref={favoritePlaces} />
            </Paper>
          </Grid>

          {myRoutesAndSchedules.length > 0 && (
            <Grid item xs={12}>
              <ScheduleForUserPage
                myRoutesAndSchedules={myRoutesAndSchedules}
              />
            </Grid>
          )}
        </Grid>
      </div>
    </>
  );
};

export default userpage;
