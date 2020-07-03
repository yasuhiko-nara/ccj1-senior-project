import { Provider } from "react-redux";

import { createStore } from "../redux/store/store";
import "../styles/style.css"; //global css
import "mapbox-gl/dist/mapbox-gl.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";

export default function App({ Component, pageProps }) {
  const store = createStore(pageProps.initialReduxState);


  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
