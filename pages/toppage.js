import React, { useState } from "react";
import Link from "next/link";
import Grid from "@material-ui/core/Grid";

import prefs from "../components/GoogleMap/mapUtils/pref";
import Navbar from "../components/Navbar";

const Toppage = () => {
  const [pref, setPref] = useState("");

  return (
    <div className="top">
      <Navbar />
      <img
        src="https://www.ana.co.jp/www2/plan-book/promotions/special-fares/spring.jpg"
        alt="らくたびトップ画"
      />
      <div className="search-bar">
        <input
          type="text"
          id="text"
          value={pref.pref}
          placeholder="どこに行きますか？"
          disabled
        ></input>
        <Link
          href={{
            pathname: "testpage",
            query: { lat: pref.lat, lng: pref.lng },
          }}
        >
          <button>検索する</button>
        </Link>
      </div>
      <div className="prefecture">
        <h2>都道府県一覧</h2>
        <Grid container spacing={1} justify="left">
          {prefs.map((pref) => (
            <Grid item xs={1.5}>
              <button
                className="btn-border"
                onClick={() => {
                  setPref(pref);
                }}
              >
                {pref.pref}
              </button>
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
        button {
          height: 45px;
        }
        #text {
          width: 50%;
          padding: 10px 15px;
          font-size: 16px;
          border-radius: 3px;
          border: 2px solid #ddd;
          box-sizing: border-box;
          margin-right: 15px;
        }
        .btn-border {
          display: inline-block;
          max-width: 180px;
          text-align: left;
          border: 2px solid #6aafe6;
          font-size: 16px;
          color: #6aafe6;
          text-decoration: none;
          font-weight: bold;
          padding: 8px 16px;
          border-radius: 4px;
          transition: 0.4s;
          background-color: white;
        }
        .btn-border:hover {
          background-color: #6aafe6;
          border-color: #6aafe6;
          color: #fff;
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
