import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { get_initial_status } from "../redux/travels/action";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Navbar from "../components/Navbar";
import GoogleMapForRouteView from "../components/GoogleMap/GoogleMapForRouteVIew";

// export async function getStaticProps() {
//   const resOfInitialState = await axios.get(
//     "https://ala5g0w56m.execute-api.ap-northeast-1.amazonaws.com/Rakutabi_API"
//   );
//   const data = JSON.stringify(resOfInitialState.data);

//   const opt = {
//     method: "get",
//     params: {
//       userId: userId,
//     },
//     headers: {
//       Authorization: idToken,
//     },
//     url: `https://b8aalc26tj.execute-api.ap-northeast-1.amazonaws.com/favoriteSpot`,
//   };
//   const resOfFavoriteActivities = await axios(opt);

//   const favoriteActivities = JSON.parse(resOfFavoriteActivities.data.body);

//   return {
//     props: {
//       data,
//       favoriteActivities,
//     },
//   };
// }

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
  //   const currentDirection = useSelector(
  //     (state) => state.travels.currentDirection
  //   );

  //   const initialState = JSON.parse(props.data);
  //   const dispatch = useDispatch();
  //   dispatch(get_initial_status(initialState));

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
              <GoogleMapForRouteView />
            </Paper>
          </Grid>
        </Grid>
      </div>
      {/* <GoogleMapForRouteView myRoute={currentDirection} /> */}
    </>
  );
};

export default Index;
