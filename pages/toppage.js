import React, { useState } from "react";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import prefs from "../components/GoogleMap/mapUtils/pref";

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
  const [pref, setPref] = useState("");

  return (
    <div className="top">
      <p>らくたび</p>
      <img
        src="https://www.ana.co.jp/www2/plan-book/promotions/special-fares/spring.jpg"
        alt="らくたびトップ画"
      />
      <div className="search-bar">
        <text>{pref.pref}</text>
        <button>検索する</button>
      </div>
      <div className="prefecture">
        <h2>都道府県一覧</h2>
        <Grid container spacing={1} justify="left">
          {prefs.map((pref) => (
            <Grid item xs={1.5}>
              <Link
                href={{
                  pathname: "testpage",
                  query: { lat: pref.lat, lng: pref.lng },
                }}
              >
                <button
                  onClick={() => {
                    setPref(pref);
                  }}
                >
                  {pref.pref}
                </button>
              </Link>
            </Grid>
          ))}
        </Grid>
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
