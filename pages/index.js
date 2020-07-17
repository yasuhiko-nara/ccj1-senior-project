import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { get_initial_status } from "../redux/travels/action";
import List from "../components/List";
import CheckBox from "../components/CheckBox";
import Button from "@material-ui/core/Button";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import MapCategory from "../components/Category/MapCategory";
import prefs, { categoryMap } from "../components/GoogleMap/mapUtils/pref";
import Navbar from "../components/Navbar";

const Index = (props) => {
  let flag;
  const [pref, setPref] = useState("");

  const dispatch = useDispatch();

  return (
    <div className="top">
      <Navbar />
      <div className="back">
        <h2 className="back__h2 fadein">あなたの旅をサポートします</h2>
      </div>

      {/* <img
        src="https://www.ana.co.jp/www2/plan-book/promotions/special-fares/spring.jpg"
        alt="らくたびトップ画"
      /> */}
      <div className="search-bar">
        <p className="result">{pref.pref}</p>

        <Link
          href={{
            pathname: "/testpage",
            query: { lat: pref.lat, lng: pref.lng, pref: pref.pref },
          }}
        >
          <Button variant="contained">調べる</Button>
          {/* <button>調べる</button> */}
        </Link>
      </div>
      <div className="prefecture">
        <h2 style={{ textAlign: "center" }}>都道府県一覧</h2>
        {/* <div style={{ height: "2em" }}> */}
        <div className="small__container">
          <Grid container spacing={7} justify="center">
            {categoryMap.map((obj) => (
              <Grid style={{ marginBottom: "30px" }} item xs={3}>
                <MapCategory
                  feeld={obj.feeld}
                  category={obj.category}
                  setLocation={(obj) => setPref(obj)}
                  pref={pref}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      <style jsx>{`
      .back{
        background-image: url("http://sozai-free.com/sozai/jpg/img_0315.jpg");
        height:100vh;
        width: 100vw;
      }
        img {
          width: 100%;
          
        }
        .search-bar {
          display:flex;
          justify-content: center;
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
          position: relative;
          height: 27em;
          margin: 0 15%;
          margin-top: 30px;
        }
        .small__container{
          width:100%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateY(-50%) translateX(-50%);
          -webkit- transform: translateY(-50%) translateX(-50%);
        }
        h2 {
          margin-bottom: 15px;
        }

       .result{
         
         height:3em;
         width: 10%;
          padding: 10px 15px;
          font-size: 16px;
          border-radius: 3px;
          border: 2px solid #ddd;
          box-sizing: border-box;
          margin-right: 15px;
       }

       .fadein{
        opacity: 0;
        animation: fadein 3s ease forwards;
       }

       .aa{
        animation-delay: 2s;
        font-size:4em;
        font-family: 'Noto Serif JP', sans-serif;
        // animation-name: fadein;
        // animation-duration: 3s;
        
       }

       .back__h2{
        padding:3%;
        font-size:4em;
        font-family: 'Noto Serif JP', sans-serif;
        // animation-name: fadein;
        // animation-duration: 3s;
       }

     
      @keyframes fadein {
      // from {
      //   opacity: 0;
      //   transform: translateY(20px);
      // }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
      }
      `}</style>
    </div>
  );
};

export default Index;
