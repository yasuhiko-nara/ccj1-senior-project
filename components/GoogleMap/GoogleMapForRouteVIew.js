// import React, { useState, useCallback, useRef, useEffect } from "react";
// import axios from "axios";
// import { useSelector } from "react-redux";

// import { useRouter } from "next/router";

// import {
//   GoogleMap,
//   useLoadScript,
//   DirectionsRenderer,
// } from "@react-google-maps/api";

// import Activity from "./Activity";

// import mapStyles from "./mapUtils/mapStyles";

// const favoriteIcon =
//   "https://firebasestorage.googleapis.com/v0/b/tidal-reactor-279300.appspot.com/o/kamo%2F%E3%83%8F%E3%83%BC%E3%83%88%E3%81%AE%E3%83%9E%E3%83%BC%E3%82%AF3.svg?alt=media&token=485153b6-3a71-4443-bf2f-b2eaf1d033e5";

// const libraries = ["places"];
// const mapContainerStyle = {
//   height: "60vh",
//   width: "100vw",
// };

// const options = {
//   styles: mapStyles,
//   disableDefaultUI: true,
//   zoomControl: true,
// };

// export default function GooleMapForRouteView({ myRoute }) {
//   const userId = useSelector((state) => state.users.userId);
//   const idToken = useSelector((state) => state.users.idToken);
//   const [favoriteActivities, setFavoriteActivities] = useState([]);
//   useEffect(() => {
//     const opt = {
//       method: "get",
//       params: {
//         userId: userId,
//       },
//       headers: {
//         Authorization: idToken,
//       },
//       url: `/favoriteSpot`,
//     };
//     axios(opt).then((res) => {
//       console.log(res.data);
//       // setFavoriteActivities(JSON.parse(res.data.body));
//     });
//   }, []);

//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: process.env.REACT_APP_googleMapsApiKey,
//     libraries,
//   });

//   const router = useRouter();

//   const mapRef = useRef();
//   const onMapLoad = useCallback((map) => {
//     mapRef.current = map;
//   }, []);

//   if (loadError) return "Error";
//   if (!isLoaded) return "Loading...";

//   return (
//     <div>
//       <GoogleMap
//         id="map"
//         mapContainerStyle={mapContainerStyle}
//         zoom={8}
//         center={{
//           lat: Number(router.query.lat) || 43.048225,
//           lng: Number(router.query.lng) || 141.49701,
//         }}
//         options={options}
//         onLoad={onMapLoad}
//       >
//         {myRoute && (
//           <DirectionsRenderer
//             options={{
//               directions: myRoute,
//             }}
//           />
//         )}

//         <Activity
//           showAddPlanButton={false}
//           show={favoriteActivities.length > 0}
//           activity={favoriteActivities}
//           icon={favoriteIcon}
//         />
//       </GoogleMap>
//     </div>
//   );
// }
