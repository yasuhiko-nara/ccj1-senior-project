import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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

const Toppage = () => {
  const classes = useStyles();
  return (
    <div className="top">
      <p>らくたび</p>
      <img
        src="https://www.ana.co.jp/www2/plan-book/promotions/special-fares/spring.jpg"
        alt="らくたびトップ画"
      />
      <div className="search-bar">
        <select></select>
        <button>検索する</button>
      </div>
      <div className="option">
        <div className={classes.root}>
          <Grid container spacing={1} justify="center">
            <Grid item xs={1}>
              <Paper className={classes.paper}>北海道地方</Paper>
            </Grid>
            <Grid item xs={1}>
              <Paper className={classes.paper}>東北地方</Paper>
            </Grid>
            <Grid item xs={1}>
              <Paper className={classes.paper}>関東地方</Paper>
            </Grid>
            <Grid item xs={1}>
              <Paper className={classes.paper}>中部地方</Paper>
            </Grid>
            <Grid item xs={1}>
              <Paper className={classes.paper}>近畿地方</Paper>
            </Grid>
            <Grid item xs={1}>
              <Paper className={classes.paper}>中国地方</Paper>
            </Grid>
            <Grid item xs={1}>
              <Paper className={classes.paper}>四国地方</Paper>
            </Grid>
            <Grid item xs={1}>
              <Paper className={classes.paper}>九州地方</Paper>
            </Grid>
            <Grid item xs={1}>
              <Paper className={classes.paper}>沖縄</Paper>
            </Grid>
          </Grid>
        </div>
        {/*<div class="region">
          <ul>
            <li>
              <span>北海道地方</span>
            </li>
            <li>
              <span>東北地方</span>
            </li>
            <li>
              <span>関東地方</span>
            </li>
            <li>
              <span>中部地方</span>
            </li>
            <li>
              <span>近畿地方</span>
            </li>
            <li>
              <span>中国地方</span>
            </li>
            <li>
              <span>四国地方</span>
            </li>
            <li>
              <span>九州地方</span>
            </li>
            <li>
              <span>沖縄</span>
            </li>
          </ul>
        </div>
        <div class="prefecture">
          <p>都道府県</p>
          <ul>
            <li>
              <span>北海道</span>
            </li>
            <li>
              <span>青森県</span>
            </li>
            <li>
              <span>岩手県</span>
            </li>
            <li>
              <span>宮城県</span>
            </li>
            <li>
              <span>秋田県</span>
            </li>
            <li>
              <span>山形県</span>
            </li>
            <li>
              <span>福島県</span>
            </li>
            <li>
              <span>茨城県</span>
            </li>
            <li>
              <span>栃木県</span>
            </li>
            <li>
              <span>群馬県</span>
            </li>
            <li>
              <span>埼玉県</span>
            </li>
            <li>
              <span>千葉県</span>
            </li>
            <li>
              <span>東京都</span>
            </li>
            <li>
              <span>神奈川県</span>
            </li>
            <li>
              <span>新潟県</span>
            </li>
            <li>
              <span>富山県</span>
            </li>
            <li>
              <span>石川県</span>
            </li>
            <li>
              <span>福井県</span>
            </li>
            <li>
              <span>山梨県</span>
            </li>
            <li>
              <span>長野県</span>
            </li>
            <li>
              <span>岐阜県</span>
            </li>
            <li>
              <span>静岡県</span>
            </li>
            <li>
              <span>愛知県</span>
            </li>
            <li>
              <span>三重県</span>
            </li>
          </ul>

        </div>
          */}
      </div>
      <style jsx>{`
        img {
          width: 100%;
        }
        .search-bar {
          margin-top: 20px;
          text-align: center;
        }
        select {
          width: 750px;
          height: 45px;
          margin-right: 10px;
        }
        button {
          height: 45px;
        }
      `}</style>
    </div>
  );
};

export default Toppage;
