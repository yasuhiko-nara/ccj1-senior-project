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
        <div className="region">
          <h2>地域一覧</h2>
          <Grid container spacing={1} justify="left">
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>北海道地方</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>東北地方</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>関東地方</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>中部地方</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>近畿地方</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>中国地方</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>四国地方</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>九州地方</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>沖縄</Paper>
            </Grid>
          </Grid>
        </div>
        <div className="prefecture">
          <h2>都道府県一覧</h2>
          <Grid container spacing={1} justify="left">
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>北海道</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>青森県</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>岩手県</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>宮城県</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>秋田県</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>山形県</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>福島県</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>茨城県</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>栃木県</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>群馬県</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>埼玉県</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>千葉県</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>東京都</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>神奈川県</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>新潟県</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>富山県</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>石川県</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>福井県</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>山梨県</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>長野県</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>岐阜県</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>静岡県</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>愛知県</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>三重県</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>滋賀県</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>京都府</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>大阪府</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>兵庫県</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>奈良県</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>和歌山県</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>鳥取県</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>島根県</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>岡山県</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>広島県</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>山口県</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>徳島県</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>香川県</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>愛媛県</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>高知県</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>福岡県</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>佐賀県</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>長崎県</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>熊本県</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>大分県</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>宮崎県</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>鹿児島県</Paper>
            </Grid>
            <Grid item xs={1.5}>
              <Paper className={classes.paper}>沖縄県</Paper>
            </Grid>
          </Grid>
        </div>
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
        .region {
          margin: 0 15%;
          margin-top: 30px;
        }
        .prefecture {
          margin: 0 15%;
          margin-top: 30px;
        }
        h2 {
          margin-bottom: 15px;
        }
      `}</style>
    </div>
  );
};

export default Toppage;
